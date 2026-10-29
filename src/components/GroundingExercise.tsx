import { useState } from 'react';
import { Eye, Hand, Ear, Wind, Coffee, RotateCcw, Check } from 'lucide-react';

interface GroundingStep {
  sense: string;
  instruction: string;
  icon: typeof Eye;
  color: string;
  bg: string;
}

const STEPS: GroundingStep[] = [
  {
    sense: 'See',
    instruction: 'Name 5 things you can see around you right now. Notice colors, shapes, and details you might usually overlook.',
    icon: Eye,
    color: 'text-sky-600',
    bg: 'bg-sky-100',
  },
  {
    sense: 'Touch',
    instruction: 'Name 4 things you can feel — the texture of your clothes, the temperature of the air, or the surface beneath you.',
    icon: Hand,
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
  },
  {
    sense: 'Hear',
    instruction: 'Name 3 sounds you can hear. They might be nearby or far away. Just notice them without judgment.',
    icon: Ear,
    color: 'text-plum-600',
    bg: 'bg-plum-100',
  },
  {
    sense: 'Smell',
    instruction: 'Name 2 things you can smell. If you cannot detect a scent, recall two scents you find comforting.',
    icon: Wind,
    color: 'text-gold-600',
    bg: 'bg-gold-100',
  },
  {
    sense: 'Taste',
    instruction: 'Name 1 thing you can taste. It could be the lingering flavor of a drink, or simply the taste in your mouth right now.',
    icon: Coffee,
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
  },
];

export default function GroundingExercise() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>([false, false, false, false, false]);
  const [finished, setFinished] = useState(false);

  const step = STEPS[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    const newCompleted = [...completed];
    newCompleted[currentStep] = true;
    setCompleted(newCompleted);

    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompleted([false, false, false, false, false]);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="bg-gradient-to-br from-velvet-100 to-plum-50 rounded-3xl p-8 text-center border border-velvet-100">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-velvet-200 mx-auto mb-4">
          <Check className="w-8 h-8 text-velvet-700" />
        </div>
        <h4 className="font-display font-semibold text-xl text-velvet-800 mb-2">
          You are here, in this moment.
        </h4>
        <p className="text-sm text-velvet-700 max-w-md mx-auto mb-6 leading-relaxed">
          You moved through all five senses. Grounding exercises like this one
          can help bring you back to the present when your mind feels
          overwhelming. You can return to this anytime.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-velvet-600 text-white text-sm font-medium hover:bg-velvet-500 transition-colors velvet-sheen"
        >
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-velvet-100 to-plum-50 rounded-3xl p-8 border border-velvet-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1.5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                completed[i]
                  ? 'w-8 bg-velvet-500'
                  : i === currentStep
                  ? 'w-8 bg-plum-400'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-velvet-500">
          Step {currentStep + 1} of {STEPS.length}
        </span>
      </div>

      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bg} mb-3`}>
          <Icon className={`w-8 h-8 ${step.color}`} />
        </div>
        <h4 className="font-display font-semibold text-lg text-velvet-900 mb-2">
          {step.sense}
        </h4>
        <p className="text-sm text-velvet-700 max-w-md mx-auto leading-relaxed">
          {step.instruction}
        </p>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
        >
          {currentStep < STEPS.length - 1 ? 'Next Sense →' : 'Complete'}
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-4 py-3 rounded-full bg-white text-velvet-600 text-sm border border-velvet-200 hover:bg-velvet-50 transition-colors"
          aria-label="Restart grounding exercise"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

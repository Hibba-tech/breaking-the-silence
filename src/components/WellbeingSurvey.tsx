import { useState } from 'react';
import {
  ClipboardList,
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw,
  Heart,
  Moon,
  Brain,
  GraduationCap,
  Users,
  Info,
  Sparkles,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

type SurveyState = 'intro' | 'questions' | 'results';

interface Question {
  id: string;
  icon: typeof Brain;
  iconBg: string;
  iconColor: string;
  question: string;
  options: { label: string; value: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'stress',
    icon: Brain,
    iconBg: 'bg-gold-100',
    iconColor: 'text-gold-600',
    question: 'How would you rate your stress levels lately?',
    options: [
      { label: 'Rarely feel stressed', value: 0 },
      { label: 'Occasionally stressed, but manageable', value: 1 },
      { label: 'Frequently stressed', value: 2 },
      { label: 'Constantly overwhelmed', value: 3 },
    ],
  },
  {
    id: 'mood',
    icon: Heart,
    iconBg: 'bg-velvet-100',
    iconColor: 'text-velvet-600',
    question: 'How has your overall mood been in recent weeks?',
    options: [
      { label: 'Generally positive and stable', value: 0 },
      { label: 'A mix of ups and downs', value: 1 },
      { label: 'Often low or unmotivated', value: 2 },
      { label: 'Persistently down or numb', value: 3 },
    ],
  },
  {
    id: 'sleep',
    icon: Moon,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    question: 'How would you describe your sleep quality?',
    options: [
      { label: 'Restful and consistent', value: 0 },
      { label: 'Mostly okay, some off nights', value: 1 },
      { label: 'Often poor or broken', value: 2 },
      { label: 'Consistently struggling to sleep', value: 3 },
    ],
  },
  {
    id: 'academic',
    icon: GraduationCap,
    iconBg: 'bg-plum-100',
    iconColor: 'text-plum-600',
    question: 'How much pressure do you feel from academic responsibilities?',
    options: [
      { label: 'Little to no pressure', value: 0 },
      { label: 'Moderate pressure I can handle', value: 1 },
      { label: 'Heavy pressure most of the time', value: 2 },
      { label: 'Unmanageable pressure', value: 3 },
    ],
  },
  {
    id: 'supported',
    icon: Users,
    iconBg: 'bg-velvet-100',
    iconColor: 'text-velvet-600',
    question: 'How supported do you feel by the people around you?',
    options: [
      { label: 'Very supported', value: 0 },
      { label: 'Somewhat supported', value: 1 },
      { label: 'Not very supported', value: 2 },
      { label: 'I feel quite alone', value: 3 },
    ],
  },
];

const ALL_SUGGESTIONS = [
  'Try the breathing exercise on the Self-Care page — even two minutes can ease tension.',
  'Consider writing down one feeling each day. Naming what you feel is a form of care.',
  'Step outside for fresh air between study sessions. Small breaks help your mind reset.',
  'Reach out to someone you trust, even with a simple message. Connection matters.',
  'Aim for a consistent sleep routine. Going to bed at the same time helps your body adjust.',
  'Break large tasks into the smallest possible first step. "Open the document" counts.',
  'Explore the grounding technique on the Self-Care page when your mind feels scattered.',
  'If things feel heavy, speaking to a counselor or professional is a strong step forward.',
];

function getSuggestions(answers: Record<string, number | undefined>): string[] {
  const stress = answers['stress'];
  const mood = answers['mood'];
  const sleep = answers['sleep'];
  const academic = answers['academic'];
  const supported = answers['supported'];

  const suggestions: string[] = [];

  if (stress !== undefined && stress >= 2) {
    suggestions.push(ALL_SUGGESTIONS[0]);
    suggestions.push(ALL_SUGGESTIONS[5]);
  }
  if (mood !== undefined && mood >= 2) {
    suggestions.push(ALL_SUGGESTIONS[1]);
  }
  if (sleep !== undefined && sleep >= 2) {
    suggestions.push(ALL_SUGGESTIONS[4]);
  }
  if (academic !== undefined && academic >= 2) {
    suggestions.push(ALL_SUGGESTIONS[5]);
  }
  if (supported !== undefined && supported >= 2) {
    suggestions.push(ALL_SUGGESTIONS[3]);
  }

  if (suggestions.length === 0) {
    return [
      'Keep doing what works for you. Small daily habits are the foundation of wellbeing.',
      'Check in with yourself regularly — noticing when something shifts is a real skill.',
    ];
  }

  const unique = [...new Set(suggestions)];
  return unique.slice(0, 5);
}

function getSummaryMessage(answeredCount: number, totalScore: number): string {
  if (answeredCount === 0) {
    return 'Thank you for taking a moment to reflect. Every bit of self-awareness matters.';
  }

  const avg = totalScore / answeredCount;

  if (avg <= 1) {
    return 'It sounds like things have been relatively manageable lately. That is worth acknowledging. The suggestions below can help you maintain that balance.';
  }
  if (avg <= 2) {
    return 'It sounds like you have been carrying quite a bit. That takes strength to admit. The suggestions below offer gentle, practical steps that might help.';
  }
  return 'It sounds like things have been genuinely difficult. Please know that what you are feeling is valid, and you do not have to navigate this alone. The suggestions below are a starting point, and reaching out to a professional could make a real difference.';
}

interface WellbeingSurveyProps {
  onNavigate: (page: string) => void;
}

export default function WellbeingSurvey({ onNavigate }: WellbeingSurveyProps) {
  const [state, setState] = useState<SurveyState>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | undefined>>({});

  const handleStart = () => {
    setState('questions');
    setCurrentIndex(0);
  };

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setState('results');
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setState('intro');
    setCurrentIndex(0);
    setAnswers({});
  };

  const answeredCount = Object.values(answers).filter((v) => v !== undefined).length;
  const totalScore = Object.values(answers).reduce<number>((sum, v) => sum + (v ?? 0), 0);
  const progress = Math.round((answeredCount / QUESTIONS.length) * 100);

  const currentQuestion = QUESTIONS[currentIndex];
  const currentAnswer = answers[currentQuestion?.id];
  const suggestions = state === 'results' ? getSuggestions(answers) : [];

  return (
    <section className="py-20 bg-gradient-to-br from-velvet-950 via-velvet-900 to-plum-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-velvet-300 text-sm font-semibold uppercase tracking-wide mb-4">
            <ClipboardList className="w-4 h-4" />
            Mental Well-being Survey
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-velvet-50 mb-4 text-balance">
            How Have You Been Feeling Lately?
          </h2>
          <p className="text-velvet-200 max-w-2xl mx-auto leading-relaxed">
            This short survey helps you reflect on your mental well-being.
            There are no right or wrong answers — just an opportunity to check
            in with yourself. Your responses stay on your device and are never
            shared.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="bg-velvet-50 rounded-3xl shadow-xl border border-velvet-200 p-6 sm:p-8">
            {/* Disclaimer */}
            <div className="flex items-start gap-3 bg-gold-50 border border-gold-200 rounded-2xl p-4 mb-6">
              <Info className="flex-shrink-0 w-5 h-5 text-gold-600 mt-0.5" />
              <p className="text-sm text-gold-800 leading-relaxed">
                This survey is for awareness and self-reflection only. It is
                not a medical diagnosis or a substitute for professional
                treatment. All questions are optional.
              </p>
            </div>

            {/* Intro State */}
            {state === 'intro' && (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-velvet-100 mb-5">
                  <ClipboardList className="w-8 h-8 text-velvet-600" />
                </div>
                <h3 className="font-display font-semibold text-xl text-velvet-900 mb-3">
                  A quick check-in with yourself
                </h3>
                <p className="text-sm text-velvet-700 leading-relaxed max-w-md mx-auto mb-6">
                  Five simple multiple-choice questions about stress, mood,
                  sleep, academic pressure, and feeling supported. It takes
                  about two minutes, and every question is optional.
                </p>
                <button
                  onClick={handleStart}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-velvet-600 text-white font-medium shadow-lg hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
                >
                  Start Survey
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Questions State */}
            {state === 'questions' && currentQuestion && (
              <div>
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-velvet-700">
                      Question {currentIndex + 1} of {QUESTIONS.length}
                    </span>
                    <span className="text-sm font-medium text-velvet-500">
                      {progress}% answered
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-velvet-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-velvet-500 to-plum-500 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${currentQuestion.iconBg} mb-4`}>
                    {(() => {
                      const Icon = currentQuestion.icon;
                      return <Icon className={`w-7 h-7 ${currentQuestion.iconColor}`} />;
                    })()}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-velvet-900 leading-snug text-balance px-2">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-2.5 mb-8">
                  {currentQuestion.options.map((option) => {
                    const isSelected = currentAnswer === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(currentQuestion.id, option.value)}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                          isSelected
                            ? 'bg-velvet-100 border-2 border-velvet-400 shadow-sm'
                            : 'bg-gray-50 border-2 border-transparent hover:bg-velvet-50 hover:border-velvet-200'
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span
                          className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all ${
                            isSelected
                              ? 'bg-velvet-600 border-velvet-600 text-white'
                              : 'border-gray-300 text-transparent'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className={`text-sm font-medium ${isSelected ? 'text-velvet-800' : 'text-velvet-700'}`}>
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all ${
                      currentIndex === 0
                        ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                        : 'bg-gray-100 text-velvet-700 hover:bg-velvet-100'
                    }`}
                    aria-label="Previous question"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <span className="text-xs text-velvet-400 hidden sm:block">
                    Skip is okay — all questions are optional
                  </span>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-velvet-600 text-white font-medium text-sm shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
                  >
                    {currentIndex < QUESTIONS.length - 1 ? 'Next' : 'Submit'}
                    {currentIndex < QUESTIONS.length - 1 ? <ArrowRight className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Results State */}
            {state === 'results' && (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-velvet-100 mb-5">
                  <Sparkles className="w-8 h-8 text-velvet-600" />
                </div>
                <h3 className="font-display font-semibold text-xl text-velvet-900 mb-4">
                  Thank you for reflecting with us
                </h3>
                <p className="text-sm text-velvet-700 leading-relaxed max-w-md mx-auto mb-6 text-balance">
                  {getSummaryMessage(answeredCount, totalScore)}
                </p>

                {suggestions.length > 0 && (
                  <div className="bg-velvet-50 rounded-2xl p-5 border border-velvet-100 text-left mb-6">
                    <h4 className="font-display font-semibold text-sm text-velvet-700 mb-3 text-center">
                      Gentle suggestions for you
                    </h4>
                    <ul className="space-y-2.5">
                      {suggestions.map((suggestion, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-velvet-200 text-velvet-700 mt-0.5">
                            <Heart className="w-3 h-3" fill="currentColor" />
                          </span>
                          <span className="text-sm text-velvet-800 leading-relaxed">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl p-4 mb-6 text-left">
                  <Info className="flex-shrink-0 w-5 h-5 text-sky-500 mt-0.5" />
                  <p className="text-sm text-sky-800 leading-relaxed">
                    Remember: this survey is for self-reflection, not
                    diagnosis. If you are concerned about your mental health,
                    please consider speaking with a qualified professional.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-velvet-700 font-medium text-sm border border-velvet-200 hover:bg-velvet-50 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Take Again
                  </button>
                  <button
                    onClick={() => onNavigate('self-care')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-velvet-600 text-white font-medium text-sm shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
                  >
                    Explore Self-Care
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('support')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-plum-600 text-white font-medium text-sm shadow-md hover:bg-plum-500 transition-all hover:scale-105 velvet-sheen"
                  >
                    Find Support
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

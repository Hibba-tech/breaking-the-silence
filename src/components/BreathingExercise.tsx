import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

type Phase = 'idle' | 'inhale' | 'hold' | 'exhale' | 'rest';

const PHASES: { phase: Phase; label: string; duration: number; instruction: string }[] = [
  { phase: 'inhale', label: 'Breathe In', duration: 4, instruction: 'Slowly breathe in through your nose...' },
  { phase: 'hold', label: 'Hold', duration: 4, instruction: 'Gently hold your breath...' },
  { phase: 'exhale', label: 'Breathe Out', duration: 6, instruction: 'Slowly release through your mouth...' },
  { phase: 'rest', label: 'Rest', duration: 2, instruction: 'Pause softly before the next breath...' },
];

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [cycles, setCycles] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentPhase = PHASES[phaseIndex];

  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setCountdown(currentPhase.duration);

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setPhaseIndex((prevPhase) => {
            const next = (prevPhase + 1) % PHASES.length;
            if (next === 0) setCycles((c) => c + 1);
            return next;
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, phaseIndex]);

  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setPhaseIndex(0);
    setCountdown(0);
    setCycles(0);
  };

  const circleScale = (() => {
    if (!isActive) return 'scale(1)';
    if (currentPhase.phase === 'inhale') return 'scale(1.35)';
    if (currentPhase.phase === 'hold') return 'scale(1.35)';
    if (currentPhase.phase === 'exhale') return 'scale(0.75)';
    return 'scale(0.75)';
  })();

  return (
    <div className="bg-gradient-to-br from-velvet-100 to-plum-50 rounded-3xl p-8 text-center border border-velvet-100">
      <div className="relative flex items-center justify-center h-64 mb-6">
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-32 h-32 rounded-full bg-velvet-300/30 animate-pulse-slow" />
        </div>
        <div
          className="absolute flex items-center justify-center rounded-full bg-gradient-to-br from-velvet-500 to-plum-500 text-white shadow-xl transition-transform duration-[4000ms] ease-in-out velvet-sheen"
          style={{
            width: '160px',
            height: '160px',
            transform: circleScale,
          }}
        >
          {isActive ? (
            <div className="text-center">
              <p className="font-display font-semibold text-lg">
                {currentPhase.label}
              </p>
              <p className="text-3xl font-display font-bold mt-1">{countdown}</p>
            </div>
          ) : (
            <p className="font-display font-medium text-base px-4 text-center">
              Press start to begin
            </p>
          )}
        </div>
      </div>

      {isActive && (
        <p className="text-sm text-velvet-700 mb-4 min-h-[20px]">
          {currentPhase.instruction}
        </p>
      )}

      {cycles > 0 && (
        <p className="text-xs text-velvet-600 font-medium mb-4">
          Completed {cycles} {cycles === 1 ? 'cycle' : 'cycles'}
        </p>
      )}

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleToggle}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
          aria-label={isActive ? 'Pause breathing exercise' : 'Start breathing exercise'}
        >
          {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-velvet-700 font-medium border border-velvet-200 hover:bg-velvet-50 transition-all"
          aria-label="Reset breathing exercise"
        >
          <RotateCcw className="w-5 h-5" />
          Reset
        </button>
      </div>

      <p className="text-xs text-velvet-500 mt-6 max-w-xs mx-auto leading-relaxed">
        Follow the circle as it expands and contracts. This gentle 4-4-6-2
        pattern can help calm your nervous system.
      </p>
    </div>
  );
}

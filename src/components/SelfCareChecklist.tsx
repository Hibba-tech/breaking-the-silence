import { useEffect, useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
}

const ITEMS: ChecklistItem[] = [
  { id: 'water', label: 'Drink a glass of water', description: 'Hydration supports both body and mind.' },
  { id: 'outside', label: 'Step outside for fresh air', description: 'Even a few minutes outdoors can shift your mood.' },
  { id: 'movement', label: 'Move your body for 10 minutes', description: 'A walk, stretching, or any gentle movement counts.' },
  { id: 'connect', label: 'Reach out to someone you trust', description: 'A short message or call can reduce isolation.' },
  { id: 'nourish', label: 'Eat something nourishing', description: 'Fueling your body is a form of self-respect.' },
  { id: 'rest', label: 'Take a screen break', description: 'Rest your eyes and mind from digital input.' },
  { id: 'reflect', label: 'Write down one feeling', description: 'Naming what you feel can bring clarity.' },
  { id: 'kindness', label: 'Do one kind thing for yourself', description: 'Self-compassion is a practice, not a luxury.' },
];

const STORAGE_KEY = 'mha-selfcare-checklist';

export default function SelfCareChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const reset = () => {
    setChecked({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((completedCount / ITEMS.length) * 100);

  return (
    <div className="bg-white rounded-3xl border border-velvet-100 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h4 className="font-display font-semibold text-lg text-velvet-900">
            Today's Self-Care Checklist
          </h4>
          <p className="text-sm text-velvet-500 mt-1">
            Tap to check off each one. Your progress is saved on this device.
          </p>
        </div>
        {completedCount > 0 && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs text-velvet-400 hover:text-velvet-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-velvet-700">
            {completedCount} of {ITEMS.length} completed
          </span>
          <span className="text-sm font-medium text-velvet-500">{progress}%</span>
        </div>
        <div className="h-3 rounded-full bg-velvet-50 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-velvet-400 to-plum-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {completedCount === ITEMS.length && (
          <p className="text-sm text-velvet-600 font-medium mt-2 text-center">
            You completed today's checklist. That is worth recognizing.
          </p>
        )}
      </div>

      <ul className="space-y-2">
        {ITEMS.map((item) => {
          const isChecked = checked[item.id] || false;
          return (
            <li key={item.id}>
              <button
                onClick={() => toggle(item.id)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                  isChecked
                    ? 'bg-velvet-50 border border-velvet-200'
                    : 'bg-gray-50 border border-transparent hover:bg-velvet-50'
                }`}
                aria-pressed={isChecked}
              >
                <span
                  className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md mt-0.5 transition-all ${
                    isChecked
                      ? 'bg-velvet-500 text-white'
                      : 'border-2 border-gray-300 text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4" />
                </span>
                <div className="flex-1">
                  <p
                    className={`text-sm font-medium ${
                      isChecked ? 'text-velvet-700 line-through' : 'text-velvet-800'
                    }`}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs text-velvet-400 mt-0.5">{item.description}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

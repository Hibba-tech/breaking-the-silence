import { useState } from 'react';
import { Check, X, RefreshCw } from 'lucide-react';

interface MythFact {
  myth: string;
  fact: string;
}

const ITEMS: MythFact[] = [
  {
    myth: 'Mental health struggles are a sign of weakness.',
    fact: 'Mental health conditions are not a sign of weakness. They are real experiences that can affect anyone, regardless of strength or character. Seeking support is a sign of courage.',
  },
  {
    myth: 'Young people are just being dramatic or moody.',
    fact: 'Emotional experiences in young people are valid. While mood changes can be part of growing up, persistent distress deserves attention and care — not dismissal.',
  },
  {
    myth: 'Talking about mental health makes it worse.',
    fact: 'Open, compassionate conversations can reduce stigma and help people feel less alone. Avoiding the topic often deepens isolation rather than protecting anyone.',
  },
  {
    myth: 'You need a diagnosis to justify feeling overwhelmed.',
    fact: 'You do not need a formal diagnosis to seek support or to take your feelings seriously. Emotional wellbeing matters at every level, not only at crisis point.',
  },
  {
    myth: 'Self-care can cure mental health conditions.',
    fact: 'Self-care supports wellbeing but is not a replacement for professional treatment. Both can coexist — small daily habits and professional support each have their place.',
  },
  {
    myth: 'If someone looks fine, they must be fine.',
    fact: 'People often mask distress behind a calm exterior. Looking okay does not always mean feeling okay. Checking in with kindness can make a real difference.',
  },
];

export default function MythsFacts() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [allRevealed, setAllRevealed] = useState(false);

  const toggle = (index: number) => {
    setRevealed((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const revealAll = () => {
    const all: Record<number, boolean> = {};
    ITEMS.forEach((_, i) => (all[i] = true));
    setRevealed(all);
    setAllRevealed(true);
  };

  const reset = () => {
    setRevealed({});
    setAllRevealed(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <p className="text-sm text-velvet-600">
          Tap each card to reveal the fact behind the myth.
        </p>
        <div className="flex gap-2">
          {!allRevealed ? (
            <button
              onClick={revealAll}
              className="px-4 py-2 rounded-full bg-velvet-100 text-velvet-700 text-sm font-medium hover:bg-velvet-200 transition-colors"
            >
              Reveal All
            </button>
          ) : (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ITEMS.map((item, index) => {
          const isRevealed = revealed[index];
          return (
            <button
              key={index}
              onClick={() => toggle(index)}
              className="text-left rounded-2xl border-2 border-velvet-100 bg-white p-5 transition-all duration-300 hover:shadow-lg hover:border-velvet-300 focus:outline-none focus:border-velvet-400"
              aria-expanded={isRevealed}
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500">
                  <X className="w-4 h-4" />
                </span>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-red-400 font-semibold mb-1">
                    Myth
                  </p>
                  <p className="text-sm text-velvet-800 font-medium leading-relaxed">
                    {item.myth}
                  </p>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isRevealed ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-velvet-100 pt-4 flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-velvet-100 text-velvet-600">
                    <Check className="w-4 h-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-velvet-500 font-semibold mb-1">
                      Fact
                    </p>
                    <p className="text-sm text-velvet-800 leading-relaxed">
                      {item.fact}
                    </p>
                  </div>
                </div>
              </div>

              {!isRevealed && (
                <p className="mt-3 text-xs text-velvet-500 font-medium">
                  Click to reveal the fact →
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { Brain, Zap, CloudRain, Flame, Users, Heart, AlertCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import MythsFacts from '@/components/MythsFacts';
import type { PageProps } from '@/types';

const TOPICS = [
  {
    icon: Zap,
    title: 'Stress',
    color: 'text-gold-600',
    bg: 'bg-gold-100',
    description: 'Stress is the body\'s natural response to pressure. A little stress can motivate you to meet a deadline or prepare for an exam. But when stress becomes constant, it can leave you feeling exhausted, irritable, or unable to switch off. Learning to recognize stress — tight shoulders, racing thoughts, trouble sleeping — is the first step toward managing it.',
  },
  {
    icon: CloudRain,
    title: 'Anxiety',
    color: 'text-sky-600',
    bg: 'bg-sky-100',
    description: 'Anxiety is more than everyday worry. It is a feeling of unease that can range from mild to intense, and it often comes with physical sensations like a racing heart, restlessness, or a sense of dread. Anxiety becomes a concern when it interferes with daily life — avoiding situations, overthinking, or feeling on edge without a clear reason.',
  },
  {
    icon: Flame,
    title: 'Burnout',
    color: 'text-red-500',
    bg: 'bg-red-100',
    description: 'Burnout happens when prolonged stress leaves you feeling emotionally drained, detached, and unable to meet constant demands. It is common among students juggling academics, work, and personal life. Signs include exhaustion, cynicism, and a sense that nothing you do makes a difference. Burnout is not a personal failure — it is a signal that something needs to change.',
  },
  {
    icon: Users,
    title: 'Loneliness',
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
    description: 'Loneliness is not just about being alone. You can feel lonely in a crowded room or connected while spending time by yourself. It is the gap between the connection you have and the connection you need. Young people are especially affected, and loneliness can have a real impact on both mental and physical health.',
  },
  {
    icon: Heart,
    title: 'Emotional Wellbeing',
    color: 'text-plum-600',
    bg: 'bg-plum-100',
    description: 'Emotional wellbeing is about how you feel and how you handle those feelings. It does not mean being happy all the time. It means having the awareness and tools to experience emotions — pleasant and difficult — without being overwhelmed by them. Building emotional wellbeing is a lifelong process, and it looks different for everyone.',
  },
];

export default function Understanding({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-velvet-950 via-velvet-900 to-plum-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
              <Brain className="w-4 h-4" />
              Understanding Mental Health
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-velvet-50 mb-6 text-balance">
              What does mental health really mean?
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-200 leading-relaxed">
              Mental health is not just the absence of illness. It includes
              your emotional, psychological, and social wellbeing. It affects
              how you think, feel, and act — and it plays a role in how you
              handle stress, relate to others, and make choices. Everyone has
              mental health, just like everyone has physical health.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-velvet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-start gap-3 bg-gold-50 border border-gold-200 rounded-2xl p-4">
              <AlertCircle className="flex-shrink-0 w-5 h-5 text-gold-600 mt-0.5" />
              <p className="text-sm text-gold-800 leading-relaxed">
                The information on this page is educational and is not medical
                advice. It cannot diagnose any condition. If you are concerned
                about your mental health, please speak with a qualified
                professional — you deserve proper support.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Educational Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Common experiences worth understanding
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              These are not weaknesses or character flaws. They are human
              experiences that deserve understanding and care.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {TOPICS.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <Reveal key={topic.title} delay={((i % 2) + 1) as 1 | 2}>
                  <article className="bg-velvet-50 rounded-2xl p-7 border border-velvet-100 transition-shadow hover:shadow-lg h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${topic.bg} mb-4`}>
                      <Icon className={`w-6 h-6 ${topic.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-velvet-900 mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-velvet-700 leading-relaxed">
                      {topic.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Differences */}
      <section className="py-16 bg-velvet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              No two experiences are the same
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <div className="bg-white rounded-2xl p-7 border border-velvet-200">
              <p className="text-velvet-700 leading-relaxed">
                Mental health experiences differ from person to person. What
                feels overwhelming to one person might feel manageable to
                another, and that is completely okay. Your experiences are
                shaped by many factors — your background, your relationships,
                your environment, your biology, and the challenges you face.
                Comparing your struggles to someone else\'s is rarely helpful.
                What matters is recognizing what you feel and taking steps that
                work for <em>you</em>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Myths vs Facts */}
      <section className="py-16 bg-gradient-to-br from-velvet-50 to-plum-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Myths vs Facts: Interactive Edition
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              Stigma grows when misinformation goes unchallenged. Tap each card
              to separate what society says from what is actually true.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <MythsFacts />
          </Reveal>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-velvet-900 mb-4">
              Ready to explore further?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-velvet-700 mb-6">
              Understanding is the first step. The next is learning how to talk
              about it — and how to take care of yourself.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onNavigate('breaking-silence')}
                className="px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
              >
                Breaking the Silence
              </button>
              <button
                onClick={() => onNavigate('self-care')}
                className="px-6 py-3 rounded-full bg-white text-velvet-700 font-medium border-2 border-velvet-200 hover:bg-velvet-50 transition-all"
              >
                Self-Care & Wellbeing
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

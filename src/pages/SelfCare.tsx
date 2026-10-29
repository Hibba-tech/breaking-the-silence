import { Moon, PenLine, Activity, Sun, Users, Coffee, Wind, Eye, Heart, Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import BreathingExercise from '@/components/BreathingExercise';
import GroundingExercise from '@/components/GroundingExercise';
import SelfCareChecklist from '@/components/SelfCareChecklist';
import type { PageProps } from '@/types';

const SELF_CARE_CARDS = [
  {
    icon: Moon,
    title: 'Rest',
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
    description: 'Rest is not laziness. Quality sleep, naps when needed, and mental breaks all help your brain process and recover. Aim for 7-9 hours of sleep, and let yourself rest without guilt.',
  },
  {
    icon: PenLine,
    title: 'Journaling',
    color: 'text-sky-600',
    bg: 'bg-sky-100',
    description: 'Writing down your thoughts can help untangle them. You do not need to write beautifully — just honestly. Even a few sentences about how you feel can bring clarity and relief.',
  },
  {
    icon: Activity,
    title: 'Movement',
    color: 'text-plum-600',
    bg: 'bg-plum-100',
    description: 'Gentle movement — walking, stretching, dancing, swimming — releases tension and can improve mood. It does not need to be intense or long. Ten minutes counts.',
  },
  {
    icon: Sun,
    title: 'Healthy Routines',
    color: 'text-gold-600',
    bg: 'bg-gold-100',
    description: 'Simple routines create stability. Eating at regular times, stepping outside for daylight, and having a wind-down ritual before bed can anchor your day and reduce overwhelm.',
  },
  {
    icon: Users,
    title: 'Talking to Someone',
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
    description: 'Sharing how you feel with someone you trust — a friend, family member, or mentor — can lighten the load. You do not need to have answers; connection itself is healing.',
  },
  {
    icon: Coffee,
    title: 'Taking Breaks',
    color: 'text-plum-600',
    bg: 'bg-plum-100',
    description: 'Breaks are not a reward for finishing — they are part of the process. Stepping away from work, screens, or studying, even briefly, helps your mind reset and refocus.',
  },
];

export default function SelfCare({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-velvet-950 via-plum-900 to-velvet-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
              <Heart className="w-4 h-4" />
              Self-Care & Wellbeing
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-velvet-50 mb-6 text-balance">
              Small acts of care, repeated daily, add up.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-200 leading-relaxed">
              Self-care is not selfish. It is the practice of attending to your
              own needs so you can function, cope, and feel more like yourself.
              Below you will find practical strategies and interactive tools
              you can use right now.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 bg-velvet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl p-4">
              <Info className="flex-shrink-0 w-5 h-5 text-sky-500 mt-0.5" />
              <p className="text-sm text-sky-800 leading-relaxed">
                Self-care is supportive, not a substitute for professional
                treatment. If you are struggling, self-care can help — but it
                does not replace the guidance of a qualified mental health
                professional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Self-Care Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Six pillars of self-care
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              You do not have to do all of them. Pick one that feels
              approachable and start there.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELF_CARE_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article className="bg-velvet-50 rounded-2xl p-6 border border-velvet-100 transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.bg} mb-4`}>
                      <Icon className={`w-6 h-6 ${card.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-velvet-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-velvet-700 leading-relaxed">
                      {card.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Checklist */}
      <section className="py-16 bg-gradient-to-br from-velvet-100 to-velvet-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Daily Self-Care Checklist
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              A simple, optional checklist to bring gentle awareness to your
              day. Your progress is saved on your device — no account needed.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <SelfCareChecklist />
          </Reveal>
        </div>
      </section>

      {/* Breathing Exercise */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-velvet-600 text-sm font-semibold uppercase tracking-wide mb-4">
              <Wind className="w-4 h-4" />
              Breathing Activity
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              A gentle breathing exercise
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              When anxiety or stress feels overwhelming, slowing your breath
              can help calm your nervous system. Follow the circle.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <BreathingExercise />
          </Reveal>
        </div>
      </section>

      {/* Grounding Exercise */}
      <section className="py-16 bg-gradient-to-br from-velvet-50 to-plum-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-plum-600 text-sm font-semibold uppercase tracking-wide mb-4">
              <Eye className="w-4 h-4" />
              Grounding Exercise
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              The 5-4-3-2-1 grounding technique
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              When your mind is racing, grounding brings you back to the
              present moment using your five senses. Move through each step at
              your own pace.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <GroundingExercise />
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-velvet-900 mb-4">
              Self-care is a practice, not a perfect routine.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-velvet-700 mb-6">
              Some days you will manage all of it, some days none of it. Both
              are okay. The goal is not perfection — it is gentleness with
              yourself.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <button
              onClick={() => onNavigate('student')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
            >
              Student Wellbeing
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

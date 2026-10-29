import { Target, Heart, BookOpen, Users, Shield, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import type { PageProps } from '@/types';

const VALUES = [
  {
    icon: Heart,
    title: 'Awareness',
    description: 'Mental health affects everyone. By spreading accurate, compassionate information, we help people recognize what they or others might be going through.',
  },
  {
    icon: Users,
    title: 'Empathy',
    description: 'We believe in meeting people where they are. No judgment, no minimization — just understanding and respect for every individual\'s experience.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Knowledge reduces fear. We provide clear, accessible information that helps young people understand mental health without feeling overwhelmed.',
  },
  {
    icon: Shield,
    title: 'Reducing Stigma',
    description: 'Stigma keeps people silent. By openly discussing mental health, we contribute to a culture where asking for help is seen as a sign of strength.',
  },
];

export default function About({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-velvet-950 via-velvet-900 to-plum-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
              <Target className="w-4 h-4" />
              About
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-velvet-50 mb-6 text-balance">
              Mental health deserves the same thoughtful attention as physical health.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-200 leading-relaxed">
              This website was created as an educational project to spread
              mental health awareness among teenagers, university students,
              and young adults. It is built on a simple belief: when people
              understand mental health, they are more likely to seek support,
              support others, and speak openly about what they feel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Our mission
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={((i % 2) + 1) as 1 | 2}>
                  <article className="bg-velvet-50 rounded-2xl p-7 border border-velvet-100 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-velvet-100 mb-4">
                      <Icon className="w-6 h-6 text-velvet-600" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-velvet-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-velvet-700 leading-relaxed">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Belief */}
      <section className="py-16 bg-gradient-to-br from-velvet-100 to-plum-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-velvet-100 text-center">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-velvet-900 mb-6 text-balance">
                What we believe
              </h2>
              <div className="space-y-4 text-left">
                <p className="text-velvet-700 leading-relaxed">
                  We believe that mental health is not a side topic — it is
                  central to how we live, learn, and connect. When a young
                  person understands that stress, anxiety, loneliness, and
                  burnout are not signs of weakness but shared human
                  experiences, something shifts. The shame loosens. The
                  silence softens.
                </p>
                <p className="text-velvet-700 leading-relaxed">
                  We believe that education is one of the most effective tools
                  against stigma. When people have accurate information, they
                  are better equipped to care for themselves and for each
                  other. They are more likely to recognize when something is
                  wrong, and more likely to respond with compassion instead of
                  judgment.
                </p>
                <p className="text-velvet-700 leading-relaxed">
                  And we believe that mental health deserves the same
                  thoughtful attention as physical health — not as an
                  afterthought, not only when things go wrong, but as an
                  ongoing part of how we live and care for ourselves and the
                  people around us.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-semibold text-lg text-velvet-900 mb-4">
              A note on what this website is — and is not
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-sm text-velvet-700 leading-relaxed mb-4">
              This website provides educational information about mental
              health. It is not a diagnostic tool, a therapy service, or an
              emergency resource. It does not collect personal data or track
              users. The self-care checklist stores your progress only on your
              own device. We have linked to verified external resources for
              anyone seeking further support.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-sm text-velvet-700 leading-relaxed mb-8">
              This project was created as a university assignment to
              demonstrate how thoughtful design and compassionate content can
              contribute to mental health awareness. If it helps even one
              person feel less alone, it has done its job.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
            >
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { Brain, HeartHandshake, Sparkles, BookOpen, ArrowRight, Lightbulb, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import WellbeingSurvey from '@/components/WellbeingSurvey';
import type { PageProps } from '@/types';

const AWARENESS_CARDS = [
  {
    icon: Brain,
    title: 'Understanding Mental Health',
    description: 'Learn what mental health really means — from stress and anxiety to emotional wellbeing — in clear, relatable language.',
    page: 'understanding',
    color: 'velvet',
  },
  {
    icon: HeartHandshake,
    title: 'Breaking the Silence',
    description: 'Explore why stigma keeps people quiet and how compassionate listening can change that, one conversation at a time.',
    page: 'breaking-silence',
    color: 'plum',
  },
  {
    icon: Sparkles,
    title: 'Self-Care & Wellbeing',
    description: 'Discover practical self-care strategies, a daily checklist, grounding tools, and a guided breathing exercise.',
    page: 'self-care',
    color: 'gold',
  },
];

const MYTH_FACT_PREVIEW = [
  { myth: 'Mental health struggles are a sign of weakness.', fact: 'They are real experiences that can affect anyone. Seeking support is a sign of courage.' },
  { myth: 'Young people are just being dramatic.', fact: 'Emotional experiences in young people are valid and deserve attention — not dismissal.' },
  { myth: 'Talking about mental health makes it worse.', fact: 'Open conversations reduce stigma and help people feel less alone.' },
];

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  velvet: { bg: 'bg-velvet-100', text: 'text-velvet-700', border: 'border-velvet-200', hover: 'hover:bg-velvet-200' },
  plum: { bg: 'bg-plum-100', text: 'text-plum-700', border: 'border-plum-200', hover: 'hover:bg-plum-200' },
  gold: { bg: 'bg-gold-100', text: 'text-gold-700', border: 'border-gold-200', hover: 'hover:bg-gold-200' },
};

export default function Home({ onNavigate }: PageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-gradient-to-br from-velvet-950 via-velvet-900 to-plum-900">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-velvet-500/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-plum-500/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 backdrop-blur-sm text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
                <Sparkles className="w-4 h-4" />
                Mental Health Awareness
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-velvet-50 leading-tight text-balance mb-6">
                Your Mind Matters.{' '}
                <span className="text-velvet-300">Your Feelings Are Valid.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-lg text-velvet-200 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                A space to understand mental health, break the silence, and
                discover that seeking support is a sign of strength.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('understanding')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-velvet-500 text-white font-medium shadow-lg hover:bg-velvet-400 transition-all hover:scale-105 velvet-sheen"
                >
                  Explore Mental Health
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('self-care')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-velvet-100 font-medium border-2 border-velvet-400/60 hover:border-velvet-300 hover:bg-velvet-800/40 transition-all"
                >
                  Discover Self-Care
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-velvet-700/30">
              <img
                src="https://images.pexels.com/photos/9176118/pexels-photo-9176118.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Abstract watercolor art in rich shades of purple, evoking a calm, contemplative mood"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-velvet-900/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 max-w-[200px] hidden sm:block animate-float border border-velvet-700/50">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span className="text-sm font-display font-semibold text-velvet-100">You are not alone</span>
              </div>
              <p className="text-xs text-velvet-300">1 in 4 people experience mental health challenges each year.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Welcome Introduction */}
      <section className="py-20 bg-velvet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-velvet-600 text-sm font-semibold uppercase tracking-wide mb-4">
              <HeartHandshake className="w-4 h-4" />
              Welcome
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-velvet-900 mb-6 text-balance">
              A space where silence becomes understanding
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-700 leading-relaxed">
              Mental health is part of being human. It shapes how we think,
              feel, and connect with others. Yet for many young people, talking
              about it still feels difficult. This website exists to change
              that — not by offering diagnoses, but by offering understanding.
              Here, you will find clear information, practical self-care tools,
              and compassionate messages reminding you that your experiences
              are real and deserving of care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Awareness Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-velvet-900 mb-4">
              Where would you like to begin?
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              Each section offers something different — from understanding what
              mental health means to finding practical tools you can use today.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {AWARENESS_CARDS.map((card, i) => {
              const Icon = card.icon;
              const colors = colorMap[card.color];
              return (
                <Reveal key={card.page} delay={(i + 1) as 1 | 2 | 3}>
                  <button
                    onClick={() => onNavigate(card.page)}
                    className={`group w-full text-left bg-white rounded-2xl border-2 ${colors.border} p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colors.bg} mb-5`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-velvet-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-velvet-700 leading-relaxed mb-4">
                      {card.description}
                    </p>
                    <span className={`inline-flex items-center gap-1 text-sm font-medium ${colors.text} group-hover:gap-2 transition-all`}>
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mental Well-being Survey */}
      <WellbeingSurvey onNavigate={onNavigate} />

      {/* Myths vs Facts Preview */}
      <section className="py-20 bg-gradient-to-br from-velvet-100 to-plum-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-velvet-600 text-sm font-semibold uppercase tracking-wide mb-4">
              <Lightbulb className="w-4 h-4" />
              Myths vs Facts
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-velvet-900 mb-4">
              Let's unlearn what isn't true
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              Stigma thrives on misinformation. Here is a preview — visit the
              full interactive section to explore more.
            </p>
          </Reveal>

          <div className="space-y-4 mb-8">
            {MYTH_FACT_PREVIEW.map((item, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-velvet-100 grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wide text-red-400 mt-0.5">Myth</span>
                    <p className="text-sm text-velvet-700">{item.myth}</p>
                  </div>
                  <div className="flex items-start gap-3 md:border-l md:border-velvet-100 md:pl-4">
                    <span className="flex-shrink-0 text-xs font-bold uppercase tracking-wide text-velvet-600 mt-0.5">Fact</span>
                    <p className="text-sm text-velvet-800">{item.fact}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3} className="text-center">
            <button
              onClick={() => onNavigate('understanding')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
            >
              See All Myths & Facts
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20 bg-velvet-950 text-velvet-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <BookOpen className="w-10 h-10 text-gold-400 mx-auto mb-6" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6 text-velvet-100 text-balance">
              You do not have to have it all figured out to deserve support.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-velvet-300 leading-relaxed mb-8">
              Mental health is not about being perfect or always being okay. It
              is about recognizing when something feels heavy, and knowing that
              reaching out — to a friend, a family member, or a professional —
              is one of the strongest things you can do.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <button
              onClick={() => onNavigate('support')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-500 text-white font-medium hover:bg-velvet-400 transition-all hover:scale-105 velvet-sheen"
            >
              Find Support & Resources
              <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

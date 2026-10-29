import { GraduationCap, BookOpen, Users, Scale, Clock, Footprints, ArrowRight, Lightbulb } from 'lucide-react';
import Reveal from '@/components/Reveal';
import type { PageProps } from '@/types';

const CHALLENGES = [
  {
    icon: GraduationCap,
    title: 'University Adjustment',
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
    description: 'Starting university means new routines, new people, and new expectations. It is exciting and overwhelming at the same time. It is completely normal to feel homesick, uncertain, or like you are pretending to belong. Adjustment takes time — sometimes months, sometimes a full year.',
  },
  {
    icon: BookOpen,
    title: 'Exams & Academic Expectations',
    color: 'text-sky-600',
    bg: 'bg-sky-100',
    description: 'Exam periods can intensify stress and anxiety. The pressure to perform well can feel all-consuming. While some stress can motivate you, constant pressure can lead to burnout. Breaking work into smaller tasks, taking real breaks, and remembering that a grade does not define your worth are all part of managing this.',
  },
  {
    icon: Users,
    title: 'Friendship Difficulties',
    color: 'text-plum-600',
    bg: 'bg-plum-100',
    description: 'Friendships at university can be complicated. People change, drift apart, or turn out to be different from who you thought they were. Making new friends takes effort, and losing old ones can hurt. Navigating social dynamics while studying is a real challenge — not a trivial one.',
  },
  {
    icon: Scale,
    title: 'Social Comparison',
    color: 'text-velvet-600',
    bg: 'bg-velvet-100',
    description: 'Social media makes it easy to compare your behind-the-scenes with everyone else\'s highlight reel. Seeing peers appear to thrive while you are struggling can deepen feelings of inadequacy. What you see online is curated, not complete. Your journey does not need to match anyone else\'s timeline.',
  },
  {
    icon: Clock,
    title: 'Balancing Responsibilities',
    color: 'text-gold-600',
    bg: 'bg-gold-100',
    description: 'Many students balance studying with work, family responsibilities, social lives, and basic self-care. When everything feels equally urgent, it is easy to drop the things that keep you well — like sleep and meals. Prioritizing is not about doing everything; it is about accepting that something can wait.',
  },
];

const SMALL_STEPS = [
  'Break a large assignment into the smallest possible first step. "Open the document" counts.',
  'Send one message to a friend you have not spoken to recently.',
  'Step outside between classes, even for two minutes of fresh air.',
  'Write down one thing that went well today, however small.',
  'Set a realistic goal for one study session instead of the whole week.',
  'Drink water before reaching for another coffee.',
  'Close your laptop for ten minutes and just breathe.',
  'Tell someone — anyone — if today feels heavier than usual.',
];

export default function Student({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-velvet-900 via-velvet-950 to-plum-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
              <GraduationCap className="w-4 h-4" />
              Student Mental Wellbeing
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-velvet-50 mb-6 text-balance">
              Being a student is harder than it looks.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-200 leading-relaxed">
              Behind the social media posts and the busy schedules, many
              students are navigating stress, loneliness, and pressure. This
              section is here to acknowledge that reality and offer practical,
              realistic suggestions — without assuming every student\'s
              experience is the same.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-velvet-100">
              <img
                src="https://images.pexels.com/photos/8085257/pexels-photo-8085257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Student working late at a desk with books and a laptop in a warm, cozy setting"
                className="w-full h-[300px] sm:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 bg-velvet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Common challenges students face
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              You might recognize some of these, or none at all. Your
              experience is your own.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {CHALLENGES.map((challenge, i) => {
              const Icon = challenge.icon;
              return (
                <Reveal key={challenge.title} delay={((i % 2) + 1) as 1 | 2}>
                  <article className="bg-white rounded-2xl p-7 border border-velvet-100 h-full transition-shadow hover:shadow-lg">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${challenge.bg} mb-4`}>
                      <Icon className={`w-6 h-6 ${challenge.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-velvet-900 mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-velvet-700 leading-relaxed">
                      {challenge.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Small Steps Count */}
      <section className="py-16 bg-gradient-to-br from-velvet-100 to-plum-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-velvet-600 text-sm font-semibold uppercase tracking-wide mb-4">
              <Footprints className="w-4 h-4" />
              Small Steps Count
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              You do not have to do everything at once
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              When everything feels overwhelming, the smallest action is often
              the most sustainable one. Here are a few to choose from.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {SMALL_STEPS.map((step, i) => (
              <Reveal key={i} delay={((i % 2) + 1) as 1 | 2}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-velvet-100">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-velvet-100 text-velvet-600">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </span>
                  <p className="text-sm text-velvet-800 leading-relaxed">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Practical suggestions that actually help
            </h2>
          </Reveal>
          <div className="space-y-4">
            <Reveal>
              <div className="flex items-start gap-4 bg-velvet-50 rounded-2xl p-5 border border-velvet-100">
                <span className="flex-shrink-0 font-display font-bold text-xl text-velvet-500">1</span>
                <div>
                  <h3 className="font-display font-semibold text-velvet-900 mb-1">Create a rough routine — not a rigid one</h3>
                  <p className="text-sm text-velvet-700 leading-relaxed">A loose structure helps your brain know what to expect. Wake-up times, study blocks, and wind-down periods can all be flexible. The goal is consistency, not perfection.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex items-start gap-4 bg-plum-50 rounded-2xl p-5 border border-plum-100">
                <span className="flex-shrink-0 font-display font-bold text-xl text-plum-500">2</span>
                <div>
                  <h3 className="font-display font-semibold text-velvet-900 mb-1">Use campus resources early</h3>
                  <p className="text-sm text-velvet-700 leading-relaxed">Most universities offer counseling, academic support, and wellbeing services. You do not need to be in crisis to use them. Reaching out early is a sign of self-awareness.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex items-start gap-4 bg-velvet-50 rounded-2xl p-5 border border-velvet-100">
                <span className="flex-shrink-0 font-display font-bold text-xl text-velvet-500">3</span>
                <div>
                  <h3 className="font-display font-semibold text-velvet-900 mb-1">Limit social comparison</h3>
                  <p className="text-sm text-velvet-700 leading-relaxed">Curate your social media feeds. Unfollow accounts that make you feel worse. Remember that people share their best moments, not their hardest ones.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="flex items-start gap-4 bg-cream-100 rounded-2xl p-5 border border-cream-200">
                <span className="flex-shrink-0 font-display font-bold text-xl text-gold-600">4</span>
                <div>
                  <h3 className="font-display font-semibold text-velvet-900 mb-1">Talk to someone — anyone</h3>
                  <p className="text-sm text-velvet-700 leading-relaxed">A friend, a roommate, a family member, a counselor. You do not need to have it all figured out before you speak. Saying "I'm struggling" is enough.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-velvet-950 to-plum-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-50 mb-4 text-balance">
              Your degree matters. Your mental health matters more.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <button
              onClick={() => onNavigate('support')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-500 text-white font-medium shadow-md hover:bg-velvet-400 transition-all hover:scale-105 velvet-sheen"
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

import { HeartHandshake, MessageCircle, Ear, ShieldOff, BookOpen, ArrowRight, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import type { PageProps } from '@/types';

const STIGMA_CARDS = [
  {
    icon: ShieldOff,
    title: 'The Weight of Stigma',
    description: 'Stigma is the negative attitude society holds toward mental health challenges. It shows up in subtle ways — jokes about being "crazy," dismissive comments, or the assumption that people should just "tough it out." Stigma makes people hide what they are going through, which deepens isolation.',
  },
  {
    icon: MessageCircle,
    title: 'Fear of Judgment',
    description: 'Many young people avoid talking about their feelings because they fear being seen as weak, dramatic, or different. This fear is understandable — no one wants to be misunderstood. But silence often makes things harder. The judgment we imagine is frequently worse than the reality.',
  },
  {
    icon: BookOpen,
    title: 'Academic Pressure',
    description: 'Schools and universities can create environments where success feels like the only acceptable outcome. When grades, deadlines, and expectations pile up, admitting you are struggling can feel like admitting failure. But struggling does not mean failing — it means you are human.',
  },
];

const COMPASSIONATE_MESSAGES = [
  'You do not have to explain every feeling perfectly to deserve understanding.',
  'Listening without judgment can make a meaningful difference.',
  'Your worth is not measured by your productivity or your grades.',
  'Asking for help is not giving up — it is choosing yourself.',
  'Silence is not the same as being fine. It is okay to speak up.',
  'You are allowed to take up space with your feelings.',
];

const EMPATHY_TIPS = [
  'Listen to understand, not to fix. Sometimes people just need to be heard.',
  'Avoid dismissing feelings with phrases like "it could be worse" or "everyone gets stressed."',
  'Ask open questions like "How are you really doing?" and give them time to answer.',
  'Respect their pace. Not everyone is ready to share, and that is okay.',
  'Follow up. A simple "I\'m still here if you want to talk" can mean a lot.',
  'Encourage professional support without making it feel like a punishment.',
];

export default function BreakingSilence({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-plum-900 via-velvet-900 to-velvet-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
              <HeartHandshake className="w-4 h-4" />
              Breaking the Silence
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-velvet-50 mb-6 text-balance">
              Why is it so hard to talk about how we feel?
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-200 leading-relaxed">
              Many young people carry their struggles in silence — not because
              their problems are small, but because the world has taught them
              to hide. Breaking the silence starts with understanding why it
              exists, and choosing to respond with empathy instead of judgment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual */}
      <section className="py-8 bg-velvet-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-velvet-200">
              <img
                src="https://images.pexels.com/photos/10638724/pexels-photo-10638724.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Two hands reaching toward each other in warm light, symbolizing connection and support"
                className="w-full h-[300px] sm:h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display font-medium text-lg sm:text-xl text-balance">
                  Sometimes the bravest thing you can say is: "I'm not okay."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stigma Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              What keeps the silence going?
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {STIGMA_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={(i + 1) as 1 | 2 | 3}>
                  <article className="bg-velvet-50 rounded-2xl p-7 border border-velvet-100 h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-velvet-100 mb-4">
                      <Icon className="w-6 h-6 text-velvet-600" />
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

      {/* Compassionate Messages */}
      <section className="py-16 bg-gradient-to-br from-velvet-100 to-plum-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <Quote className="w-8 h-8 text-velvet-400 mx-auto mb-4" />
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Words worth holding onto
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              Compassionate reminders for yourself or someone who needs to hear them.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {COMPASSIONATE_MESSAGES.map((msg, i) => (
              <Reveal key={i} delay={((i % 2) + 1) as 1 | 2}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-velvet-100">
                  <p className="text-velvet-800 leading-relaxed font-display font-medium">
                    "{msg}"
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Empathy Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-velvet-600 text-sm font-semibold uppercase tracking-wide mb-4">
              <Ear className="w-4 h-4" />
              How to Listen Well
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Being there for someone else
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              You do not need to be an expert to support someone. Often, the
              most powerful thing you can do is listen.
            </p>
          </Reveal>
          <div className="space-y-3">
            {EMPATHY_TIPS.map((tip, i) => (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="flex items-start gap-3 bg-velvet-50 rounded-xl p-4 border border-velvet-100">
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-velvet-200 text-velvet-800 text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-velvet-800 leading-relaxed">{tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-plum-50 to-velvet-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4 text-balance">
              Every conversation that breaks the silence makes the next one easier.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-velvet-700 mb-6">
              Whether you are reaching out for yourself or checking in on
              someone else, you are part of changing how mental health is
              talked about.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <button
              onClick={() => onNavigate('support')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
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

import { Phone, MessageCircle, UserCheck, Heart, ExternalLink, AlertTriangle, Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import type { PageProps } from '@/types';

const STEPS = [
  {
    icon: Heart,
    title: 'Acknowledge what you are feeling',
    description: 'You do not need to label it perfectly. Simply recognizing "something feels off" or "I need support" is a meaningful first step. There is no minimum threshold for deserving help.',
  },
  {
    icon: UserCheck,
    title: 'Identify someone you trust',
    description: 'This could be a friend, family member, teacher, counselor, or mentor. Trust matters more than closeness — choose someone who listens without dismissing what you say.',
  },
  {
    icon: MessageCircle,
    title: 'Start the conversation',
    description: 'You can say as much or as little as you are ready to. "I have been having a hard time lately" is enough. You do not owe anyone a full explanation.',
  },
  {
    icon: Phone,
    title: 'Consider professional support',
    description: 'A counselor, therapist, or doctor can offer tools and perspectives that friends and family may not be equipped to provide. Professional help is a form of care, not a last resort.',
  },
];

const RESOURCES = [
  {
    name: 'World Health Organization — Mental Health',
    url: 'https://www.who.int/health-topics/mental-health',
    description: 'Comprehensive information on mental health from the WHO, including fact sheets and global resources.',
  },
  {
    name: 'Mental Health Foundation',
    url: 'https://www.mentalhealth.org.uk/',
    description: 'A UK-based charity providing reliable mental health information, guides, and research.',
  },
  {
    name: 'NAMI — National Alliance on Mental Illness',
    url: 'https://www.nami.org/',
    description: 'The largest US mental health organization, offering education, support, and advocacy resources.',
  },
  {
    name: 'Mind — For Better Mental Health',
    url: 'https://www.mind.org.uk/',
    description: 'Information and support for anyone experiencing a mental health problem, with practical guides.',
  },
  {
    name: 'YoungMinds',
    url: 'https://www.youngminds.org.uk/',
    description: 'A UK charity focused on children and young people\'s mental health, with resources for young people and parents.',
  },
  {
    name: 'Find A Helpline',
    url: 'https://findahelpline.com/',
    description: 'A directory that helps you find free, confidential mental health helplines available in your country.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'How do I know if I need professional support?',
    answer: 'There is no specific threshold you need to meet. If your thoughts, feelings, or behaviors are affecting your daily life — your sleep, concentration, relationships, or ability to function — that is reason enough. You do not need to be in crisis to benefit from talking to a professional.',
  },
  {
    question: 'What is the difference between a counselor and a therapist?',
    answer: 'Both provide talk-based support. A counselor typically focuses on specific issues or shorter-term support, while a therapist (or psychotherapist) may work with you over a longer period to explore deeper patterns. The distinction varies by country. What matters most is finding someone you feel comfortable with.',
  },
  {
    question: 'What if I cannot afford professional help?',
    answer: 'Many universities offer free or low-cost counseling services to students. Community health centers, helplines, and online support services can also be free or low-cost. Some countries have public mental health services available through the healthcare system.',
  },
  {
    question: 'Is what I share confidential?',
    answer: 'Professional mental health providers are bound by confidentiality. There are limited exceptions — for example, if there is an immediate risk of serious harm. Your provider should explain their confidentiality policy at your first session so you know what to expect.',
  },
  {
    question: 'What should I do in an emergency?',
    answer: 'If you or someone else is in immediate danger, contact your local emergency services right away. This website is not an emergency service. If you are in crisis, please reach out to a helpline or emergency number available in your country. You can use the Find A Helpline directory linked above to locate one.',
  },
];

export default function Support({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-velvet-950 via-velvet-900 to-plum-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-velvet-800/60 text-velvet-200 text-sm font-medium mb-6 border border-velvet-700/50">
              <Heart className="w-4 h-4" />
              Support & Resources
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-velvet-50 mb-6 text-balance">
              Seeking support is a sign of strength.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-lg text-velvet-200 leading-relaxed">
              Whether you are reaching out for the first time or looking for
              specific resources, this section offers practical guidance on
              how to find the right kind of help — at your own pace.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6 bg-velvet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
              <AlertTriangle className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5" />
              <p className="text-sm text-red-800 leading-relaxed">
                <strong>If you are in immediate danger or experiencing a crisis, please contact your local emergency services right away.</strong> This website is not an emergency service and cannot provide urgent help. The resources listed below can help you find appropriate support.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to Seek Support Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              How to reach out for support
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              There is no single right way. These steps are a guide, not a
              checklist — take what feels useful.
            </p>
          </Reveal>
          <div className="space-y-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="flex items-start gap-4 bg-velvet-50 rounded-2xl p-5 border border-velvet-100">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-velvet-100">
                      <Icon className="w-6 h-6 text-velvet-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-velvet-400">STEP {i + 1}</span>
                      </div>
                      <h3 className="font-display font-semibold text-velvet-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-velvet-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="py-8 bg-velvet-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-velvet-200">
              <img
                src="https://images.pexels.com/photos/31564184/pexels-photo-31564184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Two hands reaching toward each other in a warm sunset setting, symbolizing connection and support"
                className="w-full h-[300px] sm:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Verified Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Verified mental health resources
            </h2>
            <p className="text-velvet-700 max-w-2xl mx-auto">
              These are real, established organizations that provide reliable
              mental health information and support. We link only to
              organizations whose accuracy we can confirm.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.url} delay={((i % 2) + 1) as 1 | 2}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-velvet-50 rounded-2xl p-5 border border-velvet-100 transition-all hover:shadow-lg hover:border-velvet-300 h-full group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-velvet-900 text-sm leading-snug">
                      {resource.name}
                    </h3>
                    <ExternalLink className="flex-shrink-0 w-4 h-4 text-velvet-400 group-hover:text-velvet-600 transition-colors" />
                  </div>
                  <p className="text-sm text-velvet-700 leading-relaxed">
                    {resource.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={3}>
            <div className="mt-6 flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-2xl p-4">
              <Info className="flex-shrink-0 w-5 h-5 text-sky-500 mt-0.5" />
              <p className="text-sm text-sky-800 leading-relaxed">
                We have not invented helpline numbers or medical credentials.
                For crisis support specific to your country, please use the
                Find A Helpline directory above or contact your local
                emergency services.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-velvet-100 to-velvet-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <FAQAccordion items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-velvet-900 mb-4 text-balance">
              You deserve support. Not someday — now, if you need it.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-velvet-700 mb-6">
              Learning about mental health is a powerful step. If anything you
              read here resonates, we encourage you to explore the rest of
              this site or reach out to one of the resources above.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-velvet-600 text-white font-medium shadow-md hover:bg-velvet-500 transition-all hover:scale-105 velvet-sheen"
            >
              About This Project
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

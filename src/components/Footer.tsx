import { Heart, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const FOOTER_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Understanding Mental Health', page: 'understanding' },
  { label: 'Breaking the Silence', page: 'breaking-silence' },
  { label: 'Self-Care & Wellbeing', page: 'self-care' },
  { label: 'Student Wellbeing', page: 'student' },
  { label: 'Support & Resources', page: 'support' },
  { label: 'About', page: 'about' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-velvet-950 text-velvet-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-velvet-600 velvet-sheen">
                <Heart className="w-5 h-5 text-velvet-100" fill="currentColor" />
              </span>
              <span className="font-display font-semibold text-lg text-white">
                Breaking the Silence
              </span>
            </div>
            <p className="text-sm leading-relaxed text-velvet-300 max-w-xs">
              Spreading mental health awareness, challenging stigma, and helping
              young people feel understood rather than judged. Mental health
              deserves the same thoughtful attention as physical health.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-display font-semibold text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-velvet-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Important Note
            </h3>
            <p className="text-sm leading-relaxed text-velvet-300 mb-4">
              This website provides educational information only. It is not an
              emergency service and is not a replacement for professional
              mental health care.
            </p>
            <a
              href="https://www.who.int/health-topics/mental-health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-velvet-200 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              WHO Mental Health Resources
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-velvet-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-400">
            © {new Date().getFullYear()} Breaking the Silence — Mental Health Awareness.
            An educational project.
          </p>
          <p className="text-xs text-velvet-400 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-velvet-300" fill="currentColor" /> for everyone who deserves to be heard
          </p>
        </div>
      </div>
    </footer>
  );
}

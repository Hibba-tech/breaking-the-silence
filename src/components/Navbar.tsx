import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home' },
  { label: 'Understanding', page: 'understanding' },
  { label: 'Breaking the Silence', page: 'breaking-silence' },
  { label: 'Self-Care', page: 'self-care' },
  { label: 'Student Wellbeing', page: 'student' },
  { label: 'Support', page: 'support' },
  { label: 'About', page: 'about' },
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-velvet-950/90 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-velvet-100 font-display font-semibold text-lg transition-colors hover:text-white"
            aria-label="Go to home page"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-velvet-600 velvet-sheen">
              <Heart className="w-5 h-5 text-velvet-100" fill="currentColor" />
            </span>
            <span className="hidden sm:inline">Breaking the Silence</span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentPage === item.page
                      ? 'bg-velvet-600 text-white velvet-sheen'
                      : 'text-velvet-100 hover:bg-velvet-700/60 hover:text-white'
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-velvet-100 hover:bg-velvet-700/60 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-3 pb-4">
            <ul className="flex flex-col gap-1 bg-velvet-900/95 backdrop-blur-md rounded-2xl p-3 shadow-lg">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      currentPage === item.page
                        ? 'bg-velvet-600 text-white'
                        : 'text-velvet-100 hover:bg-velvet-700/60'
                    }`}
                    aria-current={currentPage === item.page ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

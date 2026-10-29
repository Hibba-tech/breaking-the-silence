import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Home from '@/pages/Home';
import Understanding from '@/pages/Understanding';
import BreakingSilence from '@/pages/BreakingSilence';
import SelfCare from '@/pages/SelfCare';
import Student from '@/pages/Student';
import Support from '@/pages/Support';
import About from '@/pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    document.title = 'Breaking the Silence — Mental Health Awareness';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'understanding':
        return <Understanding onNavigate={handleNavigate} />;
      case 'breaking-silence':
        return <BreakingSilence onNavigate={handleNavigate} />;
      case 'self-care':
        return <SelfCare onNavigate={handleNavigate} />;
      case 'student':
        return <Student onNavigate={handleNavigate} />;
      case 'support':
        return <Support onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-velvet-50 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <BackToTop />
    </div>
  );
}

export default App;

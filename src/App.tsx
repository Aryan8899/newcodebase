import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import CompanyInfo from './components/CompanyInfo';
import Stats from './components/Stats';
import Services from './components/Services';
import Awards from './components/Awards';
import BusinessTypes from './components/BusinessTypes';
import Testimonials from './components/Testimonials';
import Footer from './bottom/Footer';
import DevelopmentProcess from './components/DevelopmentProcess';
import BlogSection from './components/BlogSection';
import ServicesPage from './components/ServicesPage';
import FAQPage from './bottom/FAQPage';
import ContactPage from './support/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigate = (path: string) => {
    setCurrentPage(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case '/blog':
        return <BlogSection />;
      case '/services':
        return <ServicesPage />;
      case '/faq':
        return <FAQPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <Partners />
            <CompanyInfo />
            <Stats />
            <Services />
            <Awards />
            <DevelopmentProcess />
            <BusinessTypes />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main style={{ paddingTop: currentPage === '/' ? '0' : '100px' }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import CompanyInfo from './components/CompanyInfo';
import Stats from './components/Stats';
import Services from './components/Services';
import Awards from './components/Awards';
import BusinessTypes from './components/BusinessTypes';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Partners />
        <CompanyInfo />
        <Stats />
        <Services />
        <Awards />
        <BusinessTypes />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyFree } from './components/WhyFree';
import { ImpactStats } from './components/ImpactStats';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div style={{ background: '#050a14', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <WhyFree />
        <ImpactStats />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

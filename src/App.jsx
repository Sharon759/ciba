import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Mission from './components/Mission.jsx';
import Services from './components/Services.jsx';
import Partners from './components/Partners.jsx';
import Mentors from './components/Mentors.jsx';
import StatsCounters from './components/StatsCounters.jsx';
import Support from './components/Support.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Testimonials from './components/Testimonials.jsx';

function App() {
  return (
    <div style={{ minHeight: '400vh', background: '#f8fafc' }}>
      <ScrollProgress />
      <Navbar />
        <Hero />
      
        <About />
         <Partners />
        <Mission />
         
        <Services />
      
        <Mentors />
        <Testimonials/>
        <StatsCounters />
        <Support />
      <Footer />
    </div>
  );
}

export default App;
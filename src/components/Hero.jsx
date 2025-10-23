import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const slides = [
  { image: "/1.jpg" },
  { image: "/2.jpg" },
  { image: "/3.jpg" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence>
        {slides.map((slide, idx) =>
          idx === current && (
            <motion.div
              key={idx}
              className="hero__slide"
              initial={{ opacity: 0, scale: 1.1, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.05, x: -50 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              <div className="hero__image" style={{ backgroundImage: `url(${slide.image})` }} />
            </motion.div>
          )
        )}
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="hero__dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="hero__scroll-icon" />
      </motion.div>
    </section>
  );
};

export default Hero;
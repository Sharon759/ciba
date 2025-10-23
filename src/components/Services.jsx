import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const services = [
  { 
    title: 'Consultation & Planning', 
    desc: 'Strategic business plan reviews and expert consultation to scale smarter.',
    index: '01'
  },
  { 
    title: 'Growth & Prototyping', 
    desc: 'Resources and technical support to accelerate product launches.',
    index: '02'
  },
  { 
    title: 'Office & Infrastructure', 
    desc: 'Modern workspaces and tech infrastructure to foster innovation.',
    index: '03'
  },
  { 
    title: 'Mentoring & Funding', 
    desc: 'Expert guidance and opportunities for seed funding.',
    index: '04'
  },
  
];

export default function Services() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section ref={sectionRef} className="services">
      <motion.div 
        className="services__bg-orb services__bg-orb--1"
        style={{ y: orbY1, scale }}
      />
      <motion.div 
        className="services__bg-orb services__bg-orb--2"
        style={{ y: orbY2, scale }}
      />

      <div className="services__container">
        <motion.div 
          className="services__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span 
            className="services__badge"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Offerings
          </motion.span>
          <h2 className="services__title">Premium Solutions for Growth</h2>
          <p className="services__subtitle">
            Cutting-edge services to propel your startup to new heights
          </p>
        </motion.div>

        <div className="services__hexagon-grid">
          {services.map((service, idx) => {
            const delay = idx * 0.2;
            return (
              <motion.div
                key={service.index}
                className={`hexagon-wrapper hexagon-wrapper--${idx + 1}`}
                initial={{ opacity: 0, scale: 0.85, rotateX: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  duration: 0.9,
                  delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.div 
                  className="hexagon"
                  whileHover={{ 
                    scale: 1.08, 
                    rotateY: 10, 
                    boxShadow: '0 15px 40px rgba(0, 174, 255, 0.3)' 
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="hexagon__inner">
                    <motion.div 
                      className="hexagon__content"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: delay + 0.4 }}
                    >
                      <div className="hexagon__index">{service.index}</div>
                      <h3 className="hexagon__title">{service.title}</h3>
                      <p className="hexagon__desc">{service.desc}</p>
                      <motion.div 
                        className="hexagon__glow"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="services__cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ opacity }}
        >
          <motion.button
            className="services__button"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 8px 30px rgba(0, 174, 255, 0.5)',
              background: 'linear-gradient(45deg, #00aeff, #007bff)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Discover Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
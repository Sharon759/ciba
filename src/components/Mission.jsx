import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './Mission.css';

const startups = [
  { 
    id: 1, 
    name: 'TechVista', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=techvista&backgroundColor=2563eb', 
    type: 'incubated',
    website: 'https://techvista.com',
    instagram: '@techvista',
    description: 'AI-powered analytics platform'
  },
  { 
    id: 2, 
    name: 'CloudSync Pro', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=cloudsync&backgroundColor=7c3aed', 
    type: 'incubated',
    website: 'https://cloudsync.io',
    instagram: '@cloudsynchq',
    description: 'Cloud storage solutions'
  },
  { 
    id: 3, 
    name: 'DataFlow AI', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=dataflow&backgroundColor=06b6d4', 
    type: 'incubated',
    website: 'https://dataflow.ai',
    instagram: '@dataflowai',
    description: 'Data pipeline automation'
  },
  { 
    id: 4, 
    name: 'QuantumLeap', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=quantum&backgroundColor=8b5cf6', 
    type: 'incubated',
    website: 'https://quantumleap.tech',
    instagram: '@quantumleaphq',
    description: 'Quantum computing solutions'
  },
  { 
    id: 5, 
    name: 'NexGen Solutions', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=nexgen&backgroundColor=ec4899', 
    type: 'incubated',
    website: 'https://nexgen.io',
    instagram: '@nexgensolutions',
    description: 'Next-gen software development'
  },
  { 
    id: 6, 
    name: 'SmartHub Analytics', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=smarthub&backgroundColor=10b981', 
    type: 'incubated',
    website: 'https://smarthub.co',
    instagram: '@smarthubhq',
    description: 'Business intelligence tools'
  },
  { 
    id: 7, 
    name: 'PayFlow Systems', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=payflow&backgroundColor=f59e0b', 
    type: 'graduated',
    website: 'https://payflow.com',
    instagram: '@payflowsystems',
    description: 'Payment processing platform'
  },
  { 
    id: 8, 
    name: 'EcoTech Innovations', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=ecotech&backgroundColor=14b8a6', 
    type: 'graduated',
    website: 'https://ecotech.green',
    instagram: '@ecotechinnovate',
    description: 'Sustainable tech solutions'
  },
  { 
    id: 9, 
    name: 'MediCare Plus', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=medicare&backgroundColor=3b82f6', 
    type: 'graduated',
    website: 'https://medicareplus.health',
    instagram: '@medicareplus',
    description: 'Healthcare management system'
  },
  { 
    id: 10, 
    name: 'FinanceFlow', 
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=financeflow&backgroundColor=6366f1', 
    type: 'graduated',
    website: 'https://financeflow.app',
    instagram: '@financeflow',
    description: 'Financial management tools'
  },
];

function StartupCard({ startup, isGraduated, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`startup-card ${isGraduated ? 'startup-card--graduated' : 'startup-card--incubated'}`}
      initial={{ opacity: 0, y: 40, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`card-glow ${isGraduated ? 'card-glow--success' : ''}`}></div>

      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="card-front"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="card-logo"
              whileHover={{ scale: 1.1, rotate: isGraduated ? -5 : 5 }}
              transition={{ duration: 0.3 }}
            >
              <img src={startup.logo} alt={`${startup.name} logo`} />
            </motion.div>
            <h3 className="card-name">{startup.name}</h3>
            <p className="card-description">{startup.description}</p>
            <div className={`card-status ${isGraduated ? 'card-status--success' : ''}`}>
              <span className={`status-dot ${isGraduated ? 'status-dot--success' : 'status-dot--active'}`}></span>
              {isGraduated ? 'Successfully Graduated' : 'Active Incubation'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="card-back"
            initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-back-content">
              <h3 className="card-back-title">{startup.name}</h3>
              <div className="card-links">
                <motion.a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link card-link--website"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Visit Website</span>
                </motion.a>
                <motion.a
                  href={`https://instagram.com/${startup.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link card-link--instagram"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>{startup.instagram}</span>
                </motion.a>
                <motion.button
                  className="card-link card-link--learn"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span>Learn More</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`card-shine ${isGraduated ? 'card-shine--success' : ''}`}
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}

export default function IncubatedGraduated() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const incubatedStartups = startups.filter((s) => s.type === 'incubated');
  const graduatedStartups = startups.filter((s) => s.type === 'graduated');

  return (
    <section ref={ref} className="incubated-graduated">
      <motion.div className="bg-gradient bg-gradient--1" style={{ y }} />
      <motion.div
        className="bg-gradient bg-gradient--2"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />
      <motion.div className="container" style={{ opacity, scale }}>
        <motion.div
          className="section-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-header">
            <motion.div
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="badge-dot"></span>
              <span>Current Ventures</span>
            </motion.div>
            <h2 className="section-title">Currently Incubated Startups</h2>
            <p className="section-subtitle">
              Innovative startups thriving under CIBA's support • Hover to connect
            </p>
          </div>
          <div className="startup-grid">
            {incubatedStartups.map((startup, idx) => (
              <StartupCard key={startup.id} startup={startup} isGraduated={false} index={idx} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="section-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.div
          className="section-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-header">
            <motion.div
              className="badge badge--success"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="badge-dot badge-dot--success"></span>
              <span>Alumni Success</span>
            </motion.div>
            <h2 className="section-title">Graduated Startups</h2>
            <p className="section-subtitle">
              Thriving companies that began with CIBA • Hover to explore
            </p>
          </div>
          <div className="startup-grid">
            {graduatedStartups.map((startup, idx) => (
              <StartupCard key={startup.id} startup={startup} isGraduated={true} index={idx} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
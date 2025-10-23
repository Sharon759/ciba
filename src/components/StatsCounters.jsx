import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './StatsCounters.css';

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const end = Number(target) || 0;
    const startTs = performance.now();
    
    function tick(now) {
      const progress = Math.min(1, (now - startTs) / duration);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(end * easeOut);
      setCount(val);
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(end);
    }
    requestAnimationFrame(tick);
  }, [target, duration, isInView]);

  return [ref, count];
}

const stats = [
  {
    id: 1,
    value: 77,
    label: 'Startups Incubated',
    suffix: '+',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: '#3b82f6'
  },
  {
    id: 2,
    value: 2200,
    label: 'Jobs Created',
    suffix: '+',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#8b5cf6'
  },
  {
    id: 3,
    value: 175,
    label: 'Funds Raised',
    suffix: ' Cr+',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8M12 18V6"/>
      </svg>
    ),
    color: '#ec4899'
  },
  {
    id: 4,
    value: 20,
    label: 'Success Stories',
    suffix: '+',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    color: '#10b981'
  }
];

export default function StatsCounters() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={sectionRef} className="stats-section">
      {/* Animated Background Elements */}
      <motion.div className="stats-bg-orb stats-bg-orb--1" style={{ y: y1 }} />
      <motion.div className="stats-bg-orb stats-bg-orb--2" style={{ y: y2 }} />
      
      {/* Floating Particles */}
      <div className="stats-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * 600,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * 600],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="stats-container"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="stats-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="stats-badge-dot"></span>
            Our Impact
          </motion.div>
          <h2 className="stats-title">Transforming Ideas Into Reality</h2>
          <p className="stats-subtitle">Numbers that speak for our commitment to innovation</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, idx) => {
            const [ref, count] = useCountUp(stat.value, 2500);
            
            return (
              <motion.div
                key={stat.id}
                ref={ref}
                className="stat-card"
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient Background */}
                <div 
                  className="stat-card-bg"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${stat.color}15, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className="stat-icon"
                  style={{ color: stat.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: idx * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <motion.div 
                  className="stat-number"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.5 }}
                >
                  <span className="stat-value">{count.toLocaleString()}</span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </motion.div>

                {/* Label */}
                <motion.div 
                  className="stat-label"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.6 }}
                >
                  {stat.label}
                </motion.div>

                {/* Decorative Line */}
                <motion.div 
                  className="stat-line"
                  style={{ backgroundColor: stat.color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.7 }}
                />

                {/* Hover Glow */}
                <motion.div 
                  className="stat-glow"
                  style={{ 
                    background: `radial-gradient(circle, ${stat.color}40, transparent 70%)`
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine Effect */}
                <motion.div 
                  className="stat-shine"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
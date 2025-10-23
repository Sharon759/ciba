import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Partners.css';

// Dummy data for incubated startups (replace with real data)
const startups = [
  { id: 1, name: 'InnoTech Solutions', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=50&fit=crop' },
  { id: 2, name: 'GreenPulse Energy', logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c1?w=150&h=50&fit=crop' },
  { id: 3, name: 'HealthSync AI', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=50&fit=crop' },
  { id: 4, name: 'EduFuture Platforms', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=50&fit=crop' },
  { id: 5, name: 'SmartCity Innovations', logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c1?w=150&h=50&fit=crop' },
  { id: 6, name: 'AgriGrow Tech', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=50&fit=crop' },
  { id: 7, name: 'FinSecure Labs', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=50&fit=crop' },
  { id: 8, name: 'CreativeWave Media', logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c1?w=150&h=50&fit=crop' },
];

// Duplicate array for infinite marquee effect
const marqueeStartups = [...startups, ...startups];

export default function StartupsMarquee() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for section
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Marquee speed for two rows with offset
  const xTop = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xBottom = useTransform(scrollYProgress, [0, 1], [0, -110]); // Slight offset for second row

  return (
    <section id="startups-marquee" className="startups-marquee" ref={ref} style={{ y }}>
      <div className="container">
        <div className="marquee-header">
          <div className="marquee-badge">
            <span className="badge-dot"></span>
            Our Partners
          </div>
          <h2 className="marquee-title">
            CIBA's <span className="highlight">Trusted Partners</span>
          </h2>
          <p className="marquee-subtitle">
            Discover the esteemed partners collaborating with CIBA to foster innovation
          </p>
        </div>

        {/* Two Marquee Rows */}
        <div className="marquee-wrapper">
          {/* Top Row */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              style={{ x: xTop }}
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {marqueeStartups.map((startup, index) => (
                <motion.div 
                  key={`${startup.name}-top-${index}`}
                  className="startup-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                >
                  <div className="startup-logo">
                    <img src={startup.logo} alt={startup.name} loading="lazy" />
                  </div>
                  <div className="startup-name">{startup.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="marquee-row">
            <motion.div 
              className="marquee-track"
              style={{ x: xBottom }}
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            >
              {marqueeStartups.map((startup, index) => (
                <motion.div 
                  key={`${startup.name}-bottom-${index}`}
                  className="startup-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    zIndex: 10,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                >
                  <div className="startup-logo">
                    <img src={startup.logo} alt={startup.name} loading="lazy" />
                  </div>
                  <div className="startup-name">{startup.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
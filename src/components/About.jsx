import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaLightbulb, FaUsers, FaTrophy, FaChartLine, FaHandshake } from 'react-icons/fa';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: contentProgress } = useScroll({
    target: contentRef,
    offset: ["start 0.9", "end 0.2"]
  });

  // Smooth spring physics
  const springConfig = { stiffness: 80, damping: 25, restDelta: 0.001 };
  
  // Background parallax
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "25%"]), 
    springConfig
  );
  
  // Gradient orbs with parallax
  const orb1X = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-5%", "8%"]), 
    springConfig
  );
  const orb1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), 
    springConfig
  );
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  
  const orb2X = useSpring(
    useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]), 
    springConfig
  );
  const orb2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), 
    springConfig
  );
  const orb2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.95]);
  
  // Title transforms
  const titleY = useSpring(
    useTransform(contentProgress, [0, 0.3], [80, 0]), 
    springConfig
  );
  const titleOpacity = useTransform(contentProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);
  const titleScale = useTransform(contentProgress, [0, 0.3], [0.9, 1]);

  // Stats data
  const stats = [
    { icon: FaUsers, value: "500+", label: "Startups Incubated", delay: 0.1 },
    { icon: FaChartLine, value: "₹100Cr+", label: "Funding Raised", delay: 0.2 },
    { icon: FaTrophy, value: "50+", label: "Awards Won", delay: 0.3 },
    { icon: FaHandshake, value: "200+", label: "Mentor Network", delay: 0.4 }
  ];

  // Features data
  const features = [
    {
      icon: FaRocket,
      title: "Incubation Excellence",
      description: "Comprehensive support for early-stage startups with world-class infrastructure, expert mentorship, and strategic guidance to accelerate growth.",
      color: "#3b82f6",
      delay: 0.2
    },
    {
      icon: FaLightbulb,
      title: "Innovation Hub",
      description: "State-of-the-art prototyping labs, collaborative workspaces, and cutting-edge technology resources to bring your ideas to life.",
      color: "#8b5cf6",
      delay: 0.3
    },
    {
      icon: FaHandshake,
      title: "Strategic Partnerships",
      description: "Access to extensive network of industry leaders, investors, corporate partners, and government agencies for maximum impact.",
      color: "#06b6d4",
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      {/* Animated Background */}
      <motion.div 
        className="about-background"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="about-orb about-orb--1"
          style={{ 
            x: orb1X, 
            y: orb1Y,
            scale: orb1Scale
          }}
        />
        <motion.div 
          className="about-orb about-orb--2"
          style={{ 
            x: orb2X, 
            y: orb2Y,
            scale: orb2Scale
          }}
        />
        <div className="about-grid-overlay" />
      </motion.div>

      {/* Floating Particles */}
      <div className="about-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="about-particle"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [
                `${Math.random() * 100}%`, 
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="about-container" ref={contentRef}>
        {/* Section Header */}
        <motion.div 
          className="about-header"
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
        >
          <motion.div
            className="about-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about-badge-dot" />
            Empowering Innovation Since 2016
          </motion.div>
          
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            About <span className="about-title-highlight">CIBA</span>
          </motion.h2>
          
          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Transforming Mumbai into India's premier innovation ecosystem
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="about-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="about-stat-card"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.7, 
                delay: stat.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="about-stat-icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon />
              </motion.div>
              <motion.div 
                className="about-stat-value"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: stat.delay + 0.2,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                {stat.value}
              </motion.div>
              <div className="about-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="about-content-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="about-content-inner"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.p
              className="about-text about-text--primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              The <strong>Centre for Incubation and Business Acceleration (CIBA)</strong> is a 
              premier <span className="about-highlight">Technology Business Incubator</span> catalyzed 
              and supported by the <span className="about-highlight">Department of Science & Technology</span> under 
              the <span className="about-highlight">Startup India Action Plan</span>.
            </motion.p>
            
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              We are committed to fostering a vibrant entrepreneurial ecosystem by providing 
              a <span className="about-highlight">comprehensive support system</span> for startups, 
              transforming innovative ideas into successful businesses, and establishing Mumbai as 
              a <span className="about-highlight">global hub for innovation and technology</span>.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="about-features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="about-feature-card"
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: feature.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="about-feature-icon-wrapper"
                style={{ backgroundColor: `${feature.color}15` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon 
                  className="about-feature-icon" 
                  style={{ color: feature.color }}
                />
              </motion.div>
              
              <h3 className="about-feature-title">{feature.title}</h3>
              <p className="about-feature-description">{feature.description}</p>
              
              <motion.div 
                className="about-feature-shine"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a 
            href="#apply" 
            className="about-cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="about-cta-text">Start Your Journey</span>
            <motion.span 
              className="about-cta-arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              →
            </motion.span>
          </motion.a>
          
          <motion.p
            className="about-cta-subtext"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Join 500+ startups transforming their vision into reality
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
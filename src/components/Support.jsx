// Support.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Rocket, Building2, Handshake, Users, GraduationCap } from 'lucide-react';
import './Support.css';

const supportServices = [
  { 
    icon: Lightbulb,
    title: 'Consultation & Business Plan', 
    description: 'Strategic guidance on validation, planning, and achieving optimal market fit for your venture.' 
  },
  { 
    icon: Rocket,
    title: 'Growth Acceleration & Prototyping', 
    description: 'Comprehensive technical and go-to-market support to build, refine, and launch your product.' 
  },
  { 
    icon: Building2,
    title: 'Office Space & Infrastructure', 
    description: 'Premium workspace equipped with cutting-edge tools, high-speed connectivity, and innovation labs.' 
  },
  { 
    icon: Handshake,
    title: 'Mentorship & Seed Funding', 
    description: 'Direct access to industry experts and curated seed investment opportunities.' 
  },
  { 
    icon: Users,
    title: 'Networking & Community', 
    description: 'Exclusive events and introductions to founders, strategic partners, and venture capitalists.' 
  },
  { 
    icon: GraduationCap,
    title: 'Workshops & Clinics', 
    description: 'Intensive sessions focused on fundraising strategies, product development, and scaling.' 
  }
];

export default function Support() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    
    if (!section || !heading) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollPercentage = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      
      if (heading) {
        const translateY = Math.max(-20, -20 + (scrollPercentage * 20));
        heading.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} id="support" className="support-section">
      <div className="support-container">
        <div ref={headingRef} className="support-header">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="support-badge"
          >
            Comprehensive Support
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="support-title"
          >
            Everything You Need to Succeed
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="support-subtitle"
          >
            From ideation to scale, we provide world-class resources and expertise
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="support-grid"
        >
          {supportServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="support-card"
              >
                <div className="support-card-inner">
                  <div className="support-icon-wrapper">
                    <Icon className="support-icon" />
                  </div>
                  
                  <h3 className="support-card-title">{service.title}</h3>
                  <p className="support-card-description">{service.description}</p>
                  
                  <div className="support-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
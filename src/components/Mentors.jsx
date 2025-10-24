import './Mentors.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const mentors = [
  {
    name: 'Ravi Kumar',
    role: 'Lead Mentor',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'ravi@example.com'
  },
  {
    name: 'A. Sharma',
    role: 'Product Mentor',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'sharma@example.com'
  },
  {
    name: 'S. Khan',
    role: 'Growth Mentor',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'khan@example.com'
  },
  {
    name: 'R. Iyer',
    role: 'Tech Mentor',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    linkedin: 'https://linkedin.com',
    email: 'iyer@example.com'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Mentors() {
  return (
    <section className="mentors-section">
      <div className="mentors-container">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mentors-header"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
            className="header-line"
          />
          <h2 className="mentors-title">
            Meet Our <span className="title-accent">Mentors</span>
          </h2>
          <p className="mentors-subtitle">
            Industry experts dedicated to guiding your journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mentors-grid"
        >
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              variants={cardVariants}
              className="mentor-card"
            >
              <div className="card-inner">
                <div className="card-gradient" />
                
                <div className="card-content">
                  <div className="avatar-wrapper">
                    <div className="avatar-glow" />
                    <div 
                      className="mentor-avatar"
                      style={{ backgroundImage: `url(${mentor.img})` }}
                    />
                  </div>

                  <div className="mentor-info">
                    <h3 className="mentor-name">{mentor.name}</h3>
                    <p className="mentor-role">{mentor.role}</p>
                  </div>

                  <div className="mentor-socials">
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${mentor.email}`}
                      className="social-link"
                      aria-label="Email"
                    >
                      <FaEnvelope size={18} />
                    </a>
                  </div>
                </div>

                <div className="card-bottom-line" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mentors-cta"
        >
          <button className="cta-button">
            Connect With Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
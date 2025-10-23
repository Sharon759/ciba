import './Mentors.css';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const mentors = [
  {
    name: 'Edited_PXN_3413',
    role: 'Lead Mentor',
    img: '/mentors/dummy1.jpg',
    linkedin: 'https://linkedin.com',
    email: 'pxn@example.com'
  },
  {
    name: 'A. Sharma',
    role: 'Product Mentor',
    img: '/mentors/dummy2.jpg',
    linkedin: 'https://linkedin.com',
    email: 'sharma@example.com'
  },
  {
    name: 'S. Khan',
    role: 'Growth Mentor',
    img: '/mentors/dummy3.jpg',
    linkedin: 'https://linkedin.com',
    email: 'khan@example.com'
  },
  {
    name: 'R. Iyer',
    role: 'Tech Mentor',
    img: '/mentors/dummy4.jpg',
    linkedin: 'https://linkedin.com',
    email: 'iyer@example.com'
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="mentors-section">
      <motion.h2
        className="mentors-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Meet Our Mentors
      </motion.h2>

      <div className="mentors-grid">
        {mentors.map((m, i) => (
          <motion.div
            key={m.name}
            className="mentor-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div
              className="mentor-avatar"
              style={{ backgroundImage: `url(${m.img})` }}
            />
            <div className="mentor-info">
              <h3 className="mentor-name">{m.name}</h3>
              <p className="mentor-role">{m.role}</p>
            </div>
            <div className="mentor-socials">
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={`mailto:${m.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Gallery.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Gallery.css';

const ImageCard = ({ src, index, title, isLarge }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`gallery-card ${isLarge ? 'gallery-card-large' : ''} ${isHovered ? 'gallery-card-hovered' : ''}`}
    >
      <motion.div 
        className="gallery-card-inner"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={src} alt={title} className="gallery-image" />
        
        <motion.div 
          className="gallery-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          className="gallery-content"
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 30, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="gallery-title">{title}</h3>
          <p className="gallery-subtitle">Photography Collection</p>
        </motion.div>

        <motion.div
          className="gallery-icon"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 0 : -180
          }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <div className="gallery-icon-circle">
            <svg className="gallery-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function Gallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const images = [
    { src: '/1.jpg', title: 'Masterpiece One', isLarge: true },
    { src: '/2.jpg', title: 'Masterpiece Two', isLarge: false },
    { src: '/3.jpg', title: 'Masterpiece Three', isLarge: false }
  ];

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-bg">
        <motion.div
          className="gallery-blob gallery-blob-1"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="gallery-blob gallery-blob-2"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="gallery-container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="gallery-header"
        >
          <h2 className="gallery-heading">Our Gallery</h2>
          <p className="gallery-description">Explore our stunning collection of photography</p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              title={image.title}
              index={index}
              isLarge={image.isLarge}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="gallery-footer"
        >
          <motion.button
            className="gallery-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View More
            <svg className="gallery-button-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
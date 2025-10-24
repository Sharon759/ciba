// Gallery.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', title: 'Business Innovation' },
    { id: 2, src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop', title: 'Team Collaboration' },
    { id: 3, src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop', title: 'Startup Growth' },
    { id: 4, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop', title: 'Creative Workspace' }
  ];

  return (
    <section className="gallery">
      <div className="gallery__container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="gallery__header"
        >
          <span className="gallery__badge">Gallery</span>
          <h2 className="gallery__title">Our Work</h2>
          <p className="gallery__description">
            Moments that inspire and captivate
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="gallery__grid"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className={`gallery__card ${
                index === 0 ? 'gallery__card--large' : 
                index === 3 ? 'gallery__card--wide' : ''
              }`}
            >
              <div className="gallery__image-box">
                <img src={image.src} alt={image.title} className="gallery__image" />
                <div className="gallery__overlay">
                  <h3 className="gallery__name">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="gallery__footer"
        >
          <button className="gallery__btn">
            <span>View More</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
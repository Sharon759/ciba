import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './StartupClinicModal.css';

export default function StartupClinicModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => onClose(), 1200);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="sc-backdrop"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            className="sc-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <h3 className="sc-title">Register for Startup Clinic</h3>
                <p className="sc-sub">Get quick expert feedback on your idea, product, or go-to-market. Limited slots every week.</p>
                <form className="sc-form" onSubmit={onSubmit}>
                  <div className="sc-row">
                    <label>Name</label>
                    <input required placeholder="Your full name" />
                  </div>
                  <div className="sc-row">
                    <label>Email</label>
                    <input type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="sc-row">
                    <label>Startup</label>
                    <input placeholder="Startup name" />
                  </div>
                  <div className="sc-row">
                    <label>Stage</label>
                    <select defaultValue="ideation">
                      <option value="ideation">Ideation</option>
                      <option value="mvp">MVP</option>
                      <option value="early">Early Revenue</option>
                      <option value="growth">Growth</option>
                    </select>
                  </div>
                  <div className="sc-row">
                    <label>Notes</label>
                    <textarea rows={4} placeholder="What do you want help with?" />
                  </div>
                  <div className="sc-actions">
                    <button type="button" className="btn btn--outline" onClick={onClose}>Cancel</button>
                    <button type="submit" className="btn btn--accent">Register</button>
                  </div>
                </form>
              </>
            ) : (
              <div className="sc-success">Thanks! We’ll get back to you shortly.</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


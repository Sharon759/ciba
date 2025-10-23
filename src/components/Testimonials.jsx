import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav Shah",
    title: "Startup Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "CIBA Mumbai gave us not just office space but a true community and mentors that changed our business.",
  },
  {
    name: "Neha Kulkarni",
    title: "Incubate Alumni",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The consultation and support here is unmatched in Mumbai for tech startups. Highly recommended!",
  },
  {
    name: "Rajesh Patil",
    title: "Mentor",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "It is a privilege to help the next generation of entrepreneurs at CIBA. The energy is infectious.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">What People Say</h2>

        <div className="carousel">
          <button className="carousel-btn left" onClick={prev}>
            &larr;
          </button>

          <div className="carousel-card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="carousel-card"
                initial={{ opacity: 0, x: 60, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -60, rotateY: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img src={testimonials[index].img} alt={testimonials[index].name} className="testimonial-img" />
                <p className="testimonial-text">“{testimonials[index].text}”</p>
                <h3 className="testimonial-name">{testimonials[index].name}</h3>
                <p className="testimonial-role">{testimonials[index].title}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn right" onClick={next}>
            &rarr;
          </button>
        </div>

        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "./Partners.css";

const partnersTop = [
  { id: 1, name: "InnoVentures", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop" },
  { id: 2, name: "TechNova Labs", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop" },
  { id: 3, name: "FutureScale", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop" },
  { id: 4, name: "NextGen Capital", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop" },
  { id: 5, name: "Quantum Ventures", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop" },
  { id: 6, name: "BlueHorizon Fund", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop" },
  { id: 7, name: "PrimeInvest Group", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop" },
  { id: 8, name: "Stellar Partners", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop" },
];

const partnersBottom = [
  { id: 9, name: "Apex Innovations", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop" },
  { id: 10, name: "Zenith Capital", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop" },
  { id: 11, name: "Vertex Systems", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop" },
  { id: 12, name: "Pulse Ventures", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop" },
  { id: 13, name: "Nexus Partners", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop" },
  { id: 14, name: "Catalyst Group", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" },
  { id: 15, name: "Momentum Labs", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop" },
  { id: 16, name: "Elevate Fund", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
];

const marqueePartnersTop = [...partnersTop, ...partnersTop];
const marqueePartnersBottom = [...partnersBottom, ...partnersBottom];

export default function PartnersMarquee() {
  const ref = useRef(null);
  const [isPausedTop, setIsPausedTop] = useState(false);
  const [isPausedBottom, setIsPausedBottom] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section className="partners-section" ref={ref}>
      <div className="partners-bg-circle circle-top" />
      <div className="partners-bg-circle circle-bottom" />

      <motion.div style={{ y }} className="partners-content">
        {/* Header */}
        <div className="partners-header">
          <motion.div
            className="partners-badge"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="dot" />
            TRUSTED PARTNERS
          </motion.div>

          <motion.h2
            className="partners-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Powering Innovation <br />
            <span className="gradient-text">Together</span>
          </motion.h2>

          <motion.p
            className="partners-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Collaborating with leading global innovators to accelerate growth
            and inspire impactful change.
          </motion.p>
        </div>

        {/* Marquee Rows */}
        <div className="marquee-container">
          {/* Top Row */}
          <div className="marquee-wrapper">
            <motion.div
              className="marquee"
              animate={isPausedTop ? {} : { x: ["0%", "-50%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            >
              {marqueePartnersTop.map((partner, i) => (
                <motion.div
                  className="partner-card"
                  key={`top-${i}`}
                  whileHover={{ scale: 1.12, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onHoverStart={() => setIsPausedTop(true)}
                  onHoverEnd={() => setIsPausedTop(false)}
                >
                  <div className="image-wrapper">
                    <img src={partner.img} alt={partner.name} />
                    <div className="overlay" />
                  </div>
                  <h3>{partner.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="marquee-wrapper">
            <motion.div
              className="marquee"
              animate={isPausedBottom ? {} : { x: ["-50%", "0%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {marqueePartnersBottom.map((partner, i) => (
                <motion.div
                  className="partner-card"
                  key={`bottom-${i}`}
                  whileHover={{ scale: 1.12, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onHoverStart={() => setIsPausedBottom(true)}
                  onHoverEnd={() => setIsPausedBottom(false)}
                >
                  <div className="image-wrapper">
                    <img src={partner.img} alt={partner.name} />
                    <div className="overlay" />
                  </div>
                  <h3>{partner.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
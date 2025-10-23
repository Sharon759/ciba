import './Startups.css';
import { motion } from 'framer-motion';

const startups = [
  { name: 'zoss' },
  { name: 'Gabha' },
  { name: 'Pirate Alerts' },
  { name: 'logoblack' },
];

export default function Startups() {
  return (
    <section id="startups" className="section startups">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} style={{textAlign:'center', color:'var(--blue-900)', marginBottom: 18}}>Currently Incubated Startups</motion.h2>
        <div className="startups__grid">
          {startups.map((s,i) => (
            <motion.div key={s.name} className="startup" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.5, delay:i*.05}}>
              <div className="startup__logo" />
              <div className="startup__name">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import './Timeline.css';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Ideation Workshop', sub: 'Validate your idea with mentors' },
  { title: 'MVP Sprint', sub: 'Prototype and get early feedback' },
  { title: 'Go-To-Market', sub: 'Launch pilots and iterate' },
  { title: 'Scale & Funding', sub: 'Connect with investors and partners' },
];

export default function Timeline() {
  return (
    <section className="section timeline" id="timeline">
      <div className="container">
        <h2 style={{textAlign:'center', color:'var(--blue-900)', marginBottom: 18}}>Startup Journey</h2>
        <div className="timeline__wrap">
          {steps.map((s, i) => (
            <motion.div key={s.title} className="t-item" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.5, delay: i*.05}}>
              <div className="t-title">{s.title}</div>
              <div className="t-sub">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


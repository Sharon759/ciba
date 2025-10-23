import './Blog.css';
import { motion } from 'framer-motion';

const posts = [
  { title: 'CIBA hosts 2025 Mumbai Startup Week', desc: 'Bringing together founders, mentors, and investors for an inspiring week of workshops & pitches.', link: '#' },
  { title: 'CIBA Alumni raises Seed Funding', desc: 'Alumni venture KryoTech secured $1M in seed funding – another breakout success for Mumbai innovation.', link: '#' },
  { title: 'Mentorship Drive Coming Soon', desc: 'Announcing next registration window for the signature CIBA mentorship program. Don’t miss out!', link: '#' }
];

export default function Blog() {
  return (
    <section id="blog" className="section section--light">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} style={{textAlign:'center', color:'var(--blue-900)', marginBottom: 24}}>Latest News & Events</motion.h2>
        <div className="blog__grid">
          {posts.map((p, i) => (
            <motion.div key={p.title} className="blog__card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.5, delay: i*.06}}>
              <div className="blog__title">{p.title}</div>
              <div className="blog__desc">{p.desc}</div>
              <a className="blog__link" href={p.link}>Read more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

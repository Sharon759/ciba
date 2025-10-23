import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section about">
          <h2>CIBA Mumbai</h2>
          <p>
            Empowering entrepreneurs and fostering innovation in Navi Mumbai.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#startups">Startups</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Vashi, Navi Mumbai</p>
          <p>+91 98765 43210</p>
          <p>info@cibamumbai.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-section map">
          <iframe
            title="CIBA Mumbai Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.781899280827!2d72.99621517472767!3d19.065347052334996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1d022d3265d%3A0x8f54ec0df4b88e59!2sCIBA%20-%20Centre%20for%20Incubation%20and%20Business%20Acceleration!5e0!3m2!1sen!2sin!4v1709132814141!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CIBA Mumbai. All rights reserved.</p>
        <div className="policy-links">
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

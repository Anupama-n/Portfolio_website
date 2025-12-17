import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import { useLocation } from "react-router-dom";

// Luxury Color Palette - Light Theme
const COLORS = {
  bg: "#F5EDE4",
  burgundy: "#2D161A",
  rose: "#FF4D6D",
  roseSoft: "#FFB3C1",
  roseGold: "#B76E79",
  gold: "#C9A961",
  goldLight: "#D4B896",
  cream: "#F5EDE4",
};

const contactInfo = [
  { type: "Instagram", icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/a_amapuna_?igsh=MTlrb2JwcnVvczUwaQ==" },
  { type: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/anupama-neupane/" },
  { type: "Email", icon: <Mail className="w-5 h-5" />, link: "mailto:anupaneupane1994@gmail.com" },
  { type: "GitHub", icon: <Github className="w-5 h-5" />, link: "https://github.com/anupama-n" },
];

const Footer: React.FC = () => {
  const location = useLocation();
  const isPortfolio = location.pathname === '/portfolio';

  // Define styles based on route
  const bgStyle = isPortfolio ? COLORS.burgundy : COLORS.bg;
  const textStyle = isPortfolio ? COLORS.bg : COLORS.burgundy;
  const accentStyle = isPortfolio ? COLORS.roseSoft : COLORS.rose;

  return (
    <footer
      id="contact"
      className="py-10 lg:py-16 px-6 sm:px-10 lg:px-14 transition-colors duration-300"
      style={{ backgroundColor: bgStyle, color: textStyle }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-10"
        >
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[10px] lg:text-xs tracking-[0.2em] uppercase block mb-2 lg:mb-3"
            style={{ color: COLORS.gold, fontFamily: "'Raleway', sans-serif" }}
          >
            Let's Connect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-3 lg:mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: textStyle }}
          >
            Ready to{" "}
            <span className="italic" style={{ color: accentStyle ,fontFamily: "'Passions Conflict', cursive"}}>
              Create
            </span>{" "}
            <br />
            <span className="italic" style={{ color: COLORS.gold, fontFamily: "'Passions Conflict', cursive" }}>
              Something
            </span>{" "}
            Beautiful?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xs md:max-w-md mx-auto text-xs md:text-sm opacity-70 leading-relaxed"
            style={{ fontFamily: "'Raleway', sans-serif", color: textStyle }}
          >
            I'm always open to discussing new projects, creative ideas, or meaningful collaborations.
          </motion.p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="flex justify-center gap-6 lg:gap-5 mb-10 lg:mb-14"
        >
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.type}
              href={contact.link}
              target={contact.type === "Email" ? undefined : "_blank"}
              rel={contact.type === "Email" ? undefined : "noopener noreferrer"}
              aria-label={contact.type}
              className="transition-transform hover:scale-110 hover:opacity-80 p-1 lg:p-0"
              style={{ color: isPortfolio ? COLORS.gold : COLORS.roseGold }}
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              {contact.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-5 lg:pt-6 border-t flex flex-col items-center gap-2"
          style={{ borderColor: isPortfolio ? 'rgba(255,255,255,0.1)' : `${COLORS.burgundy}15` }}
        >
          <span
            className="text-[10px] lg:text-xs opacity-60 tracking-wider text-center"
            style={{ fontFamily: "'Raleway', sans-serif", color: textStyle }}
          >
            Designed & Developed by Anupama Neupane
          </span>
          <span
            className="text-[9px] lg:text-[11px] opacity-40 tracking-wider text-center"
            style={{ fontFamily: "'Raleway', sans-serif", color: textStyle }}
          >
            © {new Date().getFullYear()} Anupama Neupane. All rights reserved.
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
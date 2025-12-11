import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/navbar-logo.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="gradient-overlay"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="logo-glow"></div>
            <img src={logo} alt="X1 Zero Quinze Logo" className="hero-logo" />
          </motion.div>
          <h1 className="hero-title">
            O PALCO DOS <br />
            <span className="text-gradient">GRANDES DUELOS</span>
          </h1>
          <p className="hero-description">
            O campeonato de X1 mais disputado da região.
            Liga de pontos corridos, adrenalina pura e premiação exclusiva.
            Você está pronto para o desafio?
          </p>

          <div className="hero-actions">
            <Link to="/portal" className="btn-primary">
              Inscrever-se Agora <ChevronRight size={20} />
            </Link>
            <a href="#about" className="btn-secondary">
              Saiba Mais
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-color: var(--color-darker);
          z-index: -1;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(47, 184, 93, 0.15), transparent 70%);
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .hero-content {
          width: 100%;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .hero-text {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-tag {
          display: inline-block;
          background: rgba(47, 184, 93, 0.1);
          color: var(--color-primary);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(47, 184, 93, 0.2);
          letter-spacing: 0.1em;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-logo {
          width: 300px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-primary);
          color: var(--color-darker);
          padding: 1rem 2.5rem;
          border-radius: 0.5rem;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s;
          box-shadow: 0 0 20px rgba(47, 184, 93, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(47, 184, 93, 0.5);
          background: white;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 5.5rem;
          }
        }
      `}</style>
    </section>
  );
}

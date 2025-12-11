import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

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
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-tag">X1 ZERO QUINZE</span>
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

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="logo-glow"></div>
                    <img src={logo} alt="X1 Zero Quinze Logo" className="hero-logo" />
                </motion.div>
            </div>

            <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Navbar height */
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
          background: radial-gradient(circle at top right, rgba(47, 184, 93, 0.15), transparent 60%);
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
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-tag {
          display: inline-block;
          background: rgba(47, 184, 93, 0.1);
          color: var(--color-primary);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(47, 184, 93, 0.2);
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 480px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-primary);
          color: var(--color-darker);
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 700;
          font-size: 1.125rem;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(47, 184, 93, 0.4);
          background: white;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
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

        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--color-primary);
          filter: blur(100px);
          opacity: 0.2;
          border-radius: 50%;
          z-index: -1;
        }

        .hero-logo {
          width: 100%;
          max-width: 400px;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          /* Only apply a border/glow if desired, assuming image is rectangular */
        }

        @media (min-width: 1024px) {
          .hero-content {
            grid-template-columns: 1.2fr 1fr;
          }
          .hero-title {
            font-size: 5rem;
          }
          .hero-image-container {
            justify-content: flex-end;
          }
        }
      `}</style>
        </section>
    );
}

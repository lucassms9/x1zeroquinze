import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <About />
            <Gallery />

            {/* Portal CTA Section */}
            <section className="portal-cta">
                <div className="container">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="cta-content">
                            <h2>PRONTO PARA ENTRAR EM CAMPO?</h2>
                            <p>Inscreva-se agora, acompanhe a tabela, artilharia e muito mais no nosso Portal do Atleta.</p>
                            <Link to="/portal" className="cta-btn">
                                Acessar Portal <ChevronRight />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            <style>{`
        .portal-cta {
          padding: 6rem 0;
          background-color: var(--color-darker);
        }

        .cta-card {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          border-radius: 2rem;
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta-card h2 {
          color: white; /* Contrast against green/dark green */
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .cta-card p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.25rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: var(--color-primary-dark);
          padding: 1rem 2.5rem;
          border-radius: 99px;
          font-weight: 700;
          font-size: 1.125rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}</style>
        </div>
    );
}

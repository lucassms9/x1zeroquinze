import React from 'react';
import { Trophy, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Trophy className="text-primary" />
                            <span>X1 ZERO QUINZE</span>
                        </div>
                        <p className="footer-desc">
                            A maior liga de X1 de Sorocaba e região.
                            Organização, seriedade e compromisso com o esporte.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#about">O Campeonato</a></li>
                            <li><a href="#gallery">Galeria</a></li>
                            <li><a href="/portal">Portal do Atleta</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Redes Sociais</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Instagram /></a>
                            <a href="#" className="social-icon"><MessageCircle /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 X1 Zero Quinze. Todos os direitos reservados.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-darker);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1rem;
        }

        .text-primary {
          color: var(--color-primary);
        }

        .footer-desc {
          color: var(--text-muted);
          max-width: 300px;
        }

        .footer-links h3, .footer-social h3 {
          color: white;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--color-primary);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          color: white;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .social-icon:hover {
          background: var(--color-primary);
          transform: translateY(-3px);
          color: var(--color-darker);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          font-size: 0.875rem;
        }
      `}</style>
        </footer>
    );
}

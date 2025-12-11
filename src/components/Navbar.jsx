import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <Trophy className="logo-icon" />
                    <span className="logo-text">X1 <span className="text-highlight">ZERO QUINZE</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <a href="/#about" className="nav-link">O Campeonato</a>
                    <a href="/#gallery" className="nav-link">Galeria</a>
                    <Link to="/portal" className="nav-link portal-link">Portal do Atleta</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <a href="/#about" className="mobile-link" onClick={toggleMenu}>O Campeonato</a>
                        <a href="/#gallery" className="mobile-link" onClick={toggleMenu}>Galeria</a>
                        <Link to="/portal" className="mobile-link portal-link-mobile" onClick={toggleMenu}>Portal do Atleta</Link>
                    </div>
                )}
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .logo-icon {
          color: var(--color-primary);
        }

        .text-highlight {
          color: var(--color-primary);
        }

        .desktop-menu {
          display: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-muted);
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: white;
        }

        .portal-link {
          background: var(--color-primary);
          color: var(--color-darker);
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          font-weight: 700;
          transition: transform 0.2s, background 0.3s;
        }

        .portal-link:hover {
          background: white;
          transform: translateY(-2px);
          color: var(--color-primary);
        }

        .mobile-toggle {
          display: block;
          background: none;
          color: white;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--color-darker);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideDown 0.3s ease-out;
        }

        .mobile-link {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .portal-link-mobile {
          color: var(--color-primary);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
}

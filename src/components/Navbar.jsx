import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User, Trophy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth(); // Safe usage inside AuthProvider
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <Trophy size={32} className="logo-icon" />
          <span className="logo-text">X1 <span className="text-highlight">ZERO QUINZE</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="/#about" className="nav-link">O Campeonato</a>
          <a href="/#gallery" className="nav-link">Galeria</a>

          {isAuthenticated ? (
            <div className="auth-menu">
              <Link to="/portal" className="nav-link portal-link">
                <User size={18} /> Portal
              </Link>
              <button onClick={handleLogout} className="logout-btn" title="Sair">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="nav-link portal-link">Login</Link>
          )}
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

            {isAuthenticated ? (
              <>
                <Link to="/portal" className="mobile-link portal-link-mobile" onClick={toggleMenu}>
                  Portal do Atleta
                </Link>
                <button onClick={handleLogout} className="mobile-link logout-mobile">
                  Sair <LogOut size={18} />
                </button>
              </>
            ) : (
              <Link to="/login" className="mobile-link portal-link-mobile" onClick={toggleMenu}>Login / Inscrever-se</Link>
            )}
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
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .portal-link:hover {
          background: white;
          transform: translateY(-2px);
          color: var(--color-primary);
        }

        .auth-menu {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logout-btn {
          background: transparent;
          color: var(--text-muted);
          transition: 0.3s;
        }
        
        .logout-btn:hover {
          color: #ef4444; /* Red for logout */
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

        .logout-mobile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ef4444;
          background: transparent;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: left;
          padding: 0;
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

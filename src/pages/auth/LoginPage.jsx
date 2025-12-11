import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { LogIn, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await login(email, password);
        setLoading(false);
        navigate('/onboarding');
    };

    return (
        <div className="auth-page">
            <Navbar />
            <div className="auth-container">
                <motion.div
                    className="auth-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="auth-header">
                        <LogIn size={48} className="auth-icon" />
                        <h2>Bem-vindo de volta</h2>
                        <p>Entre na sua conta para acessar o portal.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-primary full-width" disabled={loading}>
                            {loading ? 'Entrando...' : 'Acessar Conta'}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p>Não tem uma conta? <Link to="/register" className="link-highlight">Inscreva-se agora</Link></p>
                    </div>
                </motion.div>
            </div>
            <Footer />

            <style>{`
        .auth-page {
          min-height: 100vh;
          background-color: var(--color-darker);
          display: flex;
          flex-direction: column;
        }
        
        .auth-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 1.5rem 4rem;
          background-image: 
            radial-gradient(circle at top right, rgba(47, 184, 93, 0.1), transparent 40%),
            radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.05), transparent 40%);
        }

        .auth-card {
          width: 100%;
          max-width: 450px;
          background: var(--color-card);
          padding: 2.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .auth-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .auth-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: var(--text-muted);
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group label {
          display: block;
          color: white;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .form-group input {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: white;
          font-family: var(--font-main);
          transition: border 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .btn-primary {
          background: var(--color-primary);
          color: var(--color-darker);
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .btn-primary:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .full-width {
          width: 100%;
        }

        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }

        .link-highlight {
          color: var(--color-primary);
          font-weight: 600;
        }

        .link-highlight:hover {
          text-decoration: underline;
        }
      `}</style>
        </div>
    );
}

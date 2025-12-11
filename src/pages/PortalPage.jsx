import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserPlus, Trophy, Users, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PortalPage() {
    const [activeTab, setActiveTab] = useState('inscricao');

    return (
        <div className="portal-page">
            <Navbar />

            <main className="portal-main">
                <div className="container portal-container">
                    {/* Sidebar / Tabs */}
                    <div className="portal-sidebar">
                        <div className="sidebar-header">
                            <h2>PAINEL DO ATLETA</h2>
                        </div>

                        <nav className="sidebar-nav">
                            <button
                                className={`sidebar-link ${activeTab === 'inscricao' ? 'active' : ''}`}
                                onClick={() => setActiveTab('inscricao')}
                            >
                                <UserPlus size={20} /> Inscrição
                            </button>
                            <button
                                className={`sidebar-link ${activeTab === 'classificacao' ? 'active' : ''}`}
                                onClick={() => setActiveTab('classificacao')}
                            >
                                <Trophy size={20} /> Classificação
                            </button>
                            <button
                                className={`sidebar-link ${activeTab === 'jogos' ? 'active' : ''}`}
                                onClick={() => setActiveTab('jogos')}
                            >
                                <BarChart2 size={20} /> Jogos & Resultados
                            </button>
                            <button
                                className={`sidebar-link ${activeTab === 'equipes' ? 'active' : ''}`}
                                onClick={() => setActiveTab('equipes')}
                            >
                                <Users size={20} /> Equipes
                            </button>
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="portal-content">
                        {activeTab === 'inscricao' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="content-card"
                            >
                                <h2 className="card-title">Nova Inscrição</h2>
                                <p className="card-subtitle">Preencha os dados abaixo para garantir sua vaga na próxima temporada.</p>

                                <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label>Nome Completo</label>
                                        <input type="text" placeholder="Seu nome" />
                                    </div>
                                    <div className="form-group">
                                        <label>Nome da Equipe / Apelido</label>
                                        <input type="text" placeholder="Como você quer ser chamado" />
                                    </div>
                                    <div className="form-group">
                                        <label>WhatsApp</label>
                                        <input type="tel" placeholder="(15) 99999-9999" />
                                    </div>
                                    <div className="form-group">
                                        <label>Posição Principal</label>
                                        <select>
                                            <option>Linha</option>
                                            <option>Goleiro</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="submit-btn">Realizar Pré-Inscrição</button>
                                </form>
                            </motion.div>
                        )}

                        {activeTab === 'classificacao' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="content-card"
                            >
                                <h2 className="card-title">Tabela de Classificação</h2>
                                <div className="table-responsive">
                                    <table className="classification-table">
                                        <thead>
                                            <tr>
                                                <th>Pos</th>
                                                <th>Atleta</th>
                                                <th>P</th>
                                                <th>J</th>
                                                <th>V</th>
                                                <th>D</th>
                                                <th>SG</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1, 2, 3, 4, 5].map((pos) => (
                                                <tr key={pos}>
                                                    <td className="rank">{pos}º</td>
                                                    <td className="athlete">Atleta {pos}</td>
                                                    <td className="points">{18 - pos * 3}</td>
                                                    <td>6</td>
                                                    <td>{6 - pos}</td>
                                                    <td>{pos}</td>
                                                    <td>{10 - pos * 2}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        )}

                        {(activeTab === 'jogos' || activeTab === 'equipes') && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="content-card empty-state"
                            >
                                <BarChart2 size={48} className="empty-icon" />
                                <h3>Em Breve</h3>
                                <p>Esta seção estará disponível no início do campeonato.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />

            <style>{`
        .portal-page {
          min-height: 100vh;
          background-color: var(--color-darker);
          display: flex;
          flex-direction: column;
        }

        .portal-main {
          flex: 1;
          padding-top: 120px; /* Navbar + spacing */
          padding-bottom: 4rem;
        }

        .portal-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .portal-container {
            grid-template-columns: 280px 1fr;
            align-items: start;
          }
        }

        .portal-sidebar {
          background: var(--color-card);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sidebar-header h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 0.5rem;
          color: var(--text-muted);
          background: transparent;
          font-weight: 500;
          transition: all 0.2s;
          text-align: left;
          width: 100%;
        }

        .sidebar-link:hover {
          background: rgba(47, 184, 93, 0.1);
          color: white;
        }

        .sidebar-link.active {
          background: var(--color-primary);
          color: var(--color-darker);
          font-weight: 700;
        }

        .content-card {
          background: var(--color-card);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .card-subtitle {
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: white;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: white;
          font-family: inherit;
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: var(--color-primary);
          color: var(--color-darker);
          font-weight: 700;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          transition: 0.3s;
        }

        .submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        /* Table */
        .table-responsive {
          overflow-x: auto;
        }

        .classification-table {
          width: 100%;
          border-collapse: collapse;
          color: var(--text-muted);
        }

        .classification-table th {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        .classification-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .rank {
          font-weight: 700;
          color: var(--color-primary);
        }

        .points {
          font-weight: 700;
          color: white;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .empty-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
          opacity: 0.5;
        }
      `}</style>
        </div>
    );
}

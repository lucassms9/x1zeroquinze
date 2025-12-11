import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  UserPlus, Trophy, Users, BarChart2, LayoutDashboard,
  Calendar, CheckCircle, Clock, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { leagueInfo, athletes, matches } from '../data/mockData';

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState('geral');

  // Calculate Standings dynamically
  const standings = [...athletes].sort((a, b) => {
    if (b.stats.points !== a.stats.points) return b.stats.points - a.stats.points;
    if (b.stats.wins !== a.stats.wins) return b.stats.wins - a.stats.wins;
    return (b.stats.goalsFor - b.stats.goalsAgainst) - (a.stats.goalsFor - a.stats.goalsAgainst);
  });

  const nextMatch = matches.find(m => m.status === 'Agendado');

  return (
    <div className="portal-page">
      <Navbar />

      <main className="portal-main">
        <div className="container portal-container">
          {/* Sidebar */}
          <div className="portal-sidebar">
            <div className="sidebar-header">
              <h2>PAINEL DO ATLETA</h2>
              <span className="season-badge">{leagueInfo.season}</span>
            </div>

            <nav className="sidebar-nav">
              <button
                className={`sidebar-link ${activeTab === 'geral' ? 'active' : ''}`}
                onClick={() => setActiveTab('geral')}
              >
                <LayoutDashboard size={20} /> Visão Geral
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
                <Calendar size={20} /> Jogos & Resultados
              </button>
              <button
                className={`sidebar-link ${activeTab === 'atletas' ? 'active' : ''}`}
                onClick={() => setActiveTab('atletas')}
              >
                <Users size={20} /> Equipes & Atletas
              </button>
              <button
                className={`sidebar-link ${activeTab === 'inscricao' ? 'active' : ''}`}
                onClick={() => setActiveTab('inscricao')}
              >
                <UserPlus size={20} /> Nova Inscrição
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="portal-content">

            {/* --- VISÃO GERAL --- */}
            {activeTab === 'geral' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="dashboard-grid">

                {/* Status Card */}
                <div className="dashboard-card status-card">
                  <h3>Status da Liga</h3>
                  <div className="status-indicator">
                    <span className="pulse"></span>
                    {leagueInfo.status}
                  </div>
                  <div className="round-info">Rodada Atual: {leagueInfo.nextRound} de {leagueInfo.totalRounds}</div>
                </div>

                {/* Prizes Card */}
                <div className="dashboard-card prize-card">
                  <h3>Premiação</h3>
                  <div className="prize-list">
                    <div className="prize-item">
                      <Trophy size={16} className="gold" />
                      <span>1º Lugar:</span> <strong>{leagueInfo.championPrize}</strong>
                    </div>
                    <div className="prize-item">
                      <Trophy size={16} className="silver" />
                      <span>2º Lugar:</span> <strong>{leagueInfo.vicePrize}</strong>
                    </div>
                  </div>
                </div>

                {/* Next Match Highlight */}
                {nextMatch && (
                  <div className="dashboard-card next-match-card">
                    <h3>Próximo Jogo Principal</h3>
                    <div className="match-highlight">
                      <div className="team-home">
                        <span className="team-name">{athletes.find(a => a.id === nextMatch.player1Id)?.nickname}</span>
                      </div>
                      <div className="vs">VS</div>
                      <div className="team-away">
                        <span className="team-name">{athletes.find(a => a.id === nextMatch.player2Id)?.nickname}</span>
                      </div>
                    </div>
                    <div className="match-footer">
                      <Clock size={14} /> {nextMatch.date} • {nextMatch.location}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* --- CLASSIFICAÇÃO --- */}
            {activeTab === 'classificacao' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="content-card">
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
                        <th>GP</th>
                        <th>GC</th>
                        <th>SG</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((athlete, index) => (
                        <tr key={athlete.id} className={index < 3 ? 'top-rank' : ''}>
                          <td className="rank">{index + 1}º</td>
                          <td className="athlete">
                            <span className="athlete-name">{athlete.nickname}</span>
                            <span className="athlete-team">{athlete.team}</span>
                          </td>
                          <td className="points">{athlete.stats.points}</td>
                          <td>{athlete.stats.matches}</td>
                          <td>{athlete.stats.wins}</td>
                          <td>{athlete.stats.losses}</td>
                          <td>{athlete.stats.goalsFor}</td>
                          <td>{athlete.stats.goalsAgainst}</td>
                          <td>{athlete.stats.goalsFor - athlete.stats.goalsAgainst}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* --- JOGOS --- */}
            {activeTab === 'jogos' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="games-list">
                <h2 className="section-title-small">Partidas Recentes & Agendadas</h2>
                {matches.map((match) => {
                  const p1 = athletes.find(a => a.id === match.player1Id);
                  const p2 = athletes.find(a => a.id === match.player2Id);
                  return (
                    <div key={match.id} className="match-card">
                      <div className="match-header">
                        <span className="match-round">Rodada {match.round}</span>
                        <span className={`match-status ${match.status.toLowerCase()}`}>{match.status}</span>
                      </div>
                      <div className="match-content">
                        <div className="player player-home">
                          <span className="p-name">{p1?.nickname}</span>
                        </div>
                        <div className="score-board">
                          {match.status === 'Finalizado' ? (
                            <>
                              <span className="score">{match.score1}</span>
                              <span className="divider">-</span>
                              <span className="score">{match.score2}</span>
                            </>
                          ) : (
                            <span className="vs-badge">VS</span>
                          )}
                        </div>
                        <div className="player player-away">
                          <span className="p-name">{p2?.nickname}</span>
                        </div>
                      </div>
                      <div className="match-info">
                        {match.date} • {match.location}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {/* --- ATLETAS --- */}
            {activeTab === 'atletas' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="athletes-grid">
                {athletes.map((athlete) => (
                  <div key={athlete.id} className="athlete-card">
                    <div className="athlete-header">
                      <div className="athlete-avatar-placeholder">
                        {athlete.nickname.charAt(0)}
                      </div>
                      <div className="athlete-info">
                        <h4>{athlete.nickname}</h4>
                        <span>{athlete.team}</span>
                      </div>
                    </div>
                    <div className="athlete-stats">
                      <div className="stat">
                        <label>Jogos</label>
                        <span>{athlete.stats.matches}</span>
                      </div>
                      <div className="stat">
                        <label>Gols</label>
                        <span>{athlete.stats.goalsFor}</span>
                      </div>
                      <div className="stat">
                        <label>Vitórias</label>
                        <span>{athlete.stats.wins}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* --- INSCRIÇÃO --- */}
            {activeTab === 'inscricao' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="content-card">
                <h2 className="card-title">Nova Inscrição</h2>
                <p className="card-subtitle">Pré-inscrição para a próxima temporada.</p>
                <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
                  {/* Keep existing form fields */}
                  <div className="form-group">
                    <label>Nome Completo</label>
                    <input type="text" placeholder="Seu nome" />
                  </div>
                  <div className="form-group">
                    <label>Nome da Equipe</label>
                    <input type="text" placeholder="Nome do time" />
                  </div>
                  <div className="form-group">
                    <label>WhatsApp</label>
                    <input type="tel" placeholder="(15) 99999-9999" />
                  </div>
                  <button type="submit" className="submit-btn">Enviar Pré-Inscrição</button>
                </form>
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
          padding-top: 120px;
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

        /* Sidebar */
        .portal-sidebar {
          background: var(--color-card);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 100px;
        }

        .sidebar-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-header h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .season-badge {
          display: inline-block;
          background: rgba(47, 184, 93, 0.1);
          color: var(--color-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 600;
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

        /* Dashboard Overview */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .dashboard-card {
          background: var(--color-card);
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dashboard-card h3 {
          color: var(--text-muted);
          font-size: 0.875rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(47, 184, 93, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(47, 184, 93, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(47, 184, 93, 0); }
          100% { box-shadow: 0 0 0 0 rgba(47, 184, 93, 0); }
        }

        .round-info {
          font-size: 0.875rem;
          color: white;
        }

        .prize-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .prize-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-size: 0.9rem;
        }

        .gold { color: #FFD700; }
        .silver { color: #C0C0C0; }

        .next-match-card {
          grid-column: 1 / -1;
          background: linear-gradient(to right, var(--color-card), #1e293b);
        }

        .match-highlight {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1.5rem 0;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .team-home, .team-away {
          flex: 1;
          color: white;
        }
        
        .team-away { text-align: right; }

        .vs {
          color: var(--text-muted);
          font-size: 0.875rem;
          padding: 0 1rem;
        }

        .match-footer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 1rem;
        }

        /* Classification Table */
        .content-card {
          background: var(--color-card);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .classification-table {
          width: 100%;
          border-collapse: collapse;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .classification-table th {
          text-align: left;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 0.875rem;
        }

        .classification-table td {
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .top-rank .rank { color: var(--color-primary); }
        .athlete-name { display: block; color: white; font-weight: 600; }
        .athlete-team { display: block; font-size: 0.75rem; }
        .points { color: white; font-weight: 700; }

        /* Games List */
        .games-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .match-card {
          background: var(--color-card);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: grid;
          gap: 1rem;
        }

        .match-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
        }

        .match-round { color: var(--text-muted); }
        .match-status { font-weight: 600; }
        .match-status.agendado { color: gold; }
        .match-status.finalizado { color: var(--color-primary); }

        .match-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 700;
          color: white;
          font-size: 1.125rem;
        }

        .score-board {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0,0,0,0.3);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }

        .vs-badge { 
          font-size: 0.875rem; 
          color: var(--text-muted); 
          font-weight: 600;
        }

        .match-info {
          font-size: 0.875rem;
          color: var(--text-muted);
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 0.75rem;
        }

        /* Athletes Grid */
        .athletes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .athlete-card {
          background: var(--color-card);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.2s;
        }

        .athlete-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .athlete-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .athlete-avatar-placeholder {
          width: 48px;
          height: 48px;
          background: var(--color-primary);
          color: var(--color-darker);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
        }

        .athlete-info h4 { color: white; margin-bottom: 0.25rem; }
        .athlete-info span { color: var(--text-muted); font-size: 0.875rem; }

        .athlete-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.5rem;
          text-align: center;
        }

        .stat label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem; }
        .stat span { color: white; font-weight: 700; }

        /* Forms and Common */
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        .card-subtitle { margin-bottom: 2rem; color: var(--text-muted); }
        
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; color: white; margin-bottom: 0.5rem; }
        .form-group input { 
          width: 100%; padding: 1rem; 
          background: rgba(0,0,0,0.2); 
          border: 1px solid rgba(255,255,255,0.1); 
          color: white; border-radius: 0.5rem;
        }
        .submit-btn {
          width: 100%; padding: 1rem;
          background: var(--color-primary);
          color: var(--color-darker);
          font-weight: 700;
          border-radius: 0.5rem;
        }

        .table-responsive { overflow-x: auto; }
      `}</style>
    </div>
  );
}

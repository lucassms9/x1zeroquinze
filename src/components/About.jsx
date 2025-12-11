import React from 'react';
import { Trophy, TrendingUp, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <TrendingUp size={32} />,
        title: "Pontos Corridos",
        description: "Cada partida vale pontos cruciais. A consistência é a chave para ser o campeão da liga."
    },
    {
        icon: <Zap size={32} />,
        title: "X1 Intenso",
        description: "Um contra um. Sem desculpas. Apenas você, seu oponente e a habilidade pura."
    },
    {
        icon: <Target size={32} />,
        title: "Classificação Online",
        description: "Acompanhe seus resultados e posição na tabela em tempo real através do nosso portal."
    },
    {
        icon: <Trophy size={32} />,
        title: "Premiação Exclusiva",
        description: "Troféus personalizados e premiação em dinheiro para os melhores da temporada."
    }
];

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">O MODELO</span>
                    <h2 className="section-title">COMO FUNCIONA A <span className="text-gradient">LIGA</span></h2>
                    <p className="section-description">
                        O X1 Zero Quinze traz o formato profissional de pontos corridos para o futebol 1x1.
                        Regularidade e habilidade decidem o campeão.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-text">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .about-section {
          padding: 8rem 0;
          background-color: var(--color-card);
        }

        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 5rem;
        }

        .section-subtitle {
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1.5rem;
        }

        .section-description {
          color: var(--text-muted);
          font-size: 1.125rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 1rem;
          transition: transform 0.3s, border-color 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--color-primary);
        }

        .feature-icon {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          background: rgba(47, 184, 93, 0.1);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .feature-text {
          color: var(--text-muted);
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3.5rem;
          }
        }
      `}</style>
        </section>
    );
}

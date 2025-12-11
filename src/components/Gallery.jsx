import React from 'react';
import { motion } from 'framer-motion';

const images = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">MOMENTOS</span>
                    <h2 className="section-title">GALERIA DE <span className="text-gradient">CRAQUES</span></h2>
                </div>

                <div className="gallery-grid">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`gallery-item item-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="placeholder-image">
                                <span>Foto {item}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .gallery-section {
          padding: 8rem 0;
          background-color: var(--color-darker);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          aspect-ratio: 16/9;
          background: var(--color-card);
        }
        
        .item-0 { grid-column: span 2; aspect-ratio: 21/9; }

        .placeholder-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--color-card), #2a2a2a);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-weight: 600;
          transition: transform 0.5s;
        }

        .gallery-item:hover .placeholder-image {
          transform: scale(1.05);
          background: linear-gradient(45deg, #2a2a2a, var(--color-card));
        }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 250px);
          }
          .item-0 { grid-column: span 2; grid-row: span 2; aspect-ratio: auto; }
          .item-1 { grid-column: span 2; }
          .item-2 { grid-column: span 1; }
          .item-3 { grid-column: span 1; }
        }
      `}</style>
        </section>
    );
}

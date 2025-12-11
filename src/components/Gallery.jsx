import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Using placeholders for now, but configured as objects for future expansion
const galleryItems = [
  { id: 1, title: 'Grande Final 2024', category: 'Final' },
  { id: 2, title: 'Artilheiro da Temporada', category: 'Premiação' },
  { id: 3, title: 'Duelo Intenso', category: 'Partida' },
  { id: 4, title: 'Torcida Vibrando', category: 'Torcida' },
  { id: 5, title: 'Defesa Espetacular', category: 'Highlight' },
  { id: 6, title: 'Campeões', category: 'Premiação' },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = galleryItems.find(item => item.id === selectedId);
  const selectedIndex = galleryItems.findIndex(item => item.id === selectedId);

  const openLightbox = (id) => setSelectedId(id);
  const closeLightbox = () => setSelectedId(null);

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % galleryItems.length;
    setSelectedId(galleryItems[nextIndex].id);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedId(galleryItems[prevIndex].id);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">MOMENTOS</span>
          <h2 className="section-title">GALERIA DE <span className="text-gradient">CRAQUES</span></h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`gallery-item item-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(item.id)}
              layoutId={`gallery-item-${item.id}`}
            >
              <div className="placeholder-image">
                <ZoomIn className="zoom-icon" size={24} />
                <div className="item-info">
                  <span className="item-category">{item.category}</span>
                  <h3 className="item-title">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              layoutId={`gallery-item-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeLightbox}>
                <X size={24} />
              </button>

              <div className="lightbox-image-placeholder">
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.category}</p>
              </div>

              <div className="lightbox-controls">
                <button className="nav-btn prev" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn next" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
          cursor: pointer;
        }
        
        .item-0 { grid-column: span 2; aspect-ratio: 21/9; }

        .placeholder-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--color-card), #2a2a2a);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: transform 0.5s;
          position: relative;
        }

        .gallery-item:hover .placeholder-image {
          transform: scale(1.05);
        }

        .zoom-icon {
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.3s;
          color: white;
          margin-bottom: 1rem;
        }

        .gallery-item:hover .zoom-icon {
          opacity: 1;
          transform: scale(1);
        }

        .item-info {
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .gallery-item:hover .item-info {
          transform: translateY(0);
        }

        .item-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .item-title {
          font-size: 1.125rem;
          color: white;
          margin-top: 0.25rem;
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .lightbox-content {
          position: relative;
          width: 100%;
          max-width: 1000px;
          aspect-ratio: 16/9;
          background: var(--color-card);
          border-radius: 1rem;
          overflow: hidden;
        }

        .lightbox-image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-card), #1a1a1a);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .lightbox-image-placeholder h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .lightbox-image-placeholder p {
          color: var(--color-primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          z-index: 10;
          transition: background 0.3s;
          cursor: pointer;
        }

        .close-btn:hover {
          background: var(--color-primary);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          z-index: 10;
          transition: all 0.3s;
          cursor: pointer;
        }

        .nav-btn:hover {
          background: white;
          color: var(--color-darker);
        }

        .prev { left: 1.5rem; }
        .next { right: 1.5rem; }

        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 280px; /* Consistent row height */
            gap: 1.5rem;
          }
          
          .gallery-item {
            aspect-ratio: auto; /* Let grid control height */
            height: 100%;
          }

          /* Bento Grid Layout */
          .item-0 { grid-column: span 2; grid-row: span 2; }
          .item-1 { grid-column: span 2; }
          .item-2 { grid-column: span 1; }
          .item-3 { grid-column: span 1; }
          .item-4 { grid-column: span 2; } /* Fill bottom row */
          .item-5 { grid-column: span 2; } /* Fill bottom row */
        }
      `}</style>
    </section>
  );
}

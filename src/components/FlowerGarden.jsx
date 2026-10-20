import React, { useState } from 'react';
import { ChevronRight, Sparkles, X, Heart, Flower2 } from 'lucide-react';

export default function FlowerGarden({ config, onNextChapter }) {
  const [bloomedFlowers, setBloomedFlowers] = useState({});
  const [activeFlowerMessage, setActiveFlowerMessage] = useState(null);
  const [petalsBurst, setPetalsBurst] = useState([]);

  const flowers = config.garden.flowers;
  const bloomedCount = Object.keys(bloomedFlowers).length;
  const isAllBloomed = bloomedCount === flowers.length;

  const handleFlowerClick = (flower, e) => {
    // Trigger bloomed state
    setBloomedFlowers(prev => ({ ...prev, [flower.id]: true }));
    setActiveFlowerMessage(flower);

    // Spawn burst of small petal particles around clicked flower
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const newPetals = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const distance = 45 + Math.random() * 45;
      return {
        id: Math.random(),
        x: centerX,
        y: centerY,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        color: flower.color,
        rot: Math.random() * 360
      };
    });

    setPetalsBurst(newPetals);
    setTimeout(() => setPetalsBurst([]), 1200);
  };

  return (
    <section className="chapter-wrapper garden-chapter" aria-label="Chapter 4: A Garden of Little Things">
      <div className="chapter-content">
        {/* Badge & Title */}
        <div className="text-center" style={{ marginBottom: '24px' }}>
          <div className="chapter-badge">
            <span>{config.garden.badge}</span>
          </div>
          <h2 className="serif-title garden-headline">
            {config.garden.headline}
          </h2>
          <p className="garden-subheading">
            {config.garden.subheading}
          </p>
        </div>

        {/* Garden Landscape Area */}
        <div className={`garden-bed glass-panel ${bloomedCount > 0 ? `bloom-stage-${bloomedCount}` : ''}`}>
          {/* Garden Sky Ambient Light */}
          <div className="garden-sky-glow" />

          {/* Gentle Floating Pastel Butterfly */}
          <div className="garden-butterfly b1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 12 C10 6 3 5 5 11 C6 14 12 13 12 14 C12 13 18 14 19 11 C21 5 14 6 12 12 Z" fill="#E8A2BB" opacity="0.8" />
              <line x1="12" y1="8" x2="12" y2="16" stroke="#873D60" strokeWidth="1" />
            </svg>
          </div>
          <div className="garden-butterfly b2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 12 C10 6 3 5 5 11 C6 14 12 13 12 14 C12 13 18 14 19 11 C21 5 14 6 12 12 Z" fill="#F4E4BF" opacity="0.8" />
              <line x1="12" y1="8" x2="12" y2="16" stroke="#873D60" strokeWidth="1" />
            </svg>
          </div>

          {/* 4 Flowers Grid / Row */}
          <div className="flowers-row">
            {flowers.map((fl) => {
              const isBloomed = !!bloomedFlowers[fl.id];
              return (
                <div 
                  key={fl.id}
                  className={`flower-pot ${isBloomed ? 'bloomed' : 'bud'}`}
                  onClick={(e) => handleFlowerClick(fl, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleFlowerClick(fl, e);
                    }
                  }}
                  aria-label={`${fl.name} flower: ${isBloomed ? 'Bloomed (tap to read message)' : 'Tap to bloom'}`}
                >
                  <div className="flower-svg-wrapper">
                    <svg viewBox="0 0 100 130" className="flower-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Stem */}
                      <path 
                        d="M50 120 Q 52 80 50 55" 
                        stroke="#6B8E68" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                      />
                      {/* Leaf Left */}
                      <path 
                        d="M49 92 Q 28 85 32 75 Q 45 78 49 90" 
                        fill="#88B084" 
                      />
                      {/* Leaf Right */}
                      <path 
                        d="M51 100 Q 72 95 68 83 Q 56 86 51 98" 
                        fill="#88B084" 
                      />

                      {/* Flower Head: Bud vs Bloom */}
                      {!isBloomed ? (
                        /* Closed Bud */
                        <g className="flower-bud-group">
                          <ellipse cx="50" cy="50" rx="14" ry="19" fill={fl.accent} />
                          <path d="M42 62 Q 50 32 50 32 Q 50 32 58 62 Z" fill={fl.color} />
                          <path d="M46 64 Q 50 42 54 64" stroke="#6B8E68" strokeWidth="2" fill="none" />
                        </g>
                      ) : (
                        /* Radiantly Bloomed Flower */
                        <g className="flower-bloom-group">
                          {/* Outer Petals */}
                          <circle cx="50" cy="30" r="13" fill={fl.accent} opacity="0.85" />
                          <circle cx="34" cy="42" r="13" fill={fl.accent} opacity="0.85" />
                          <circle cx="66" cy="42" r="13" fill={fl.accent} opacity="0.85" />
                          <circle cx="39" cy="60" r="13" fill={fl.accent} opacity="0.85" />
                          <circle cx="61" cy="60" r="13" fill={fl.accent} opacity="0.85" />

                          {/* Inner Petals */}
                          <circle cx="50" cy="35" r="11" fill={fl.color} />
                          <circle cx="38" cy="47" r="11" fill={fl.color} />
                          <circle cx="62" cy="47" r="11" fill={fl.color} />
                          <circle cx="50" cy="57" r="11" fill={fl.color} />

                          {/* Center Core */}
                          <circle cx="50" cy="47" r="9" fill="#FFF3D6" />
                          <circle cx="50" cy="47" r="5" fill="#F4E4BF" />
                        </g>
                      )}
                    </svg>

                    {/* Glow when bloomed */}
                    {isBloomed && <div className="flower-glow" style={{ backgroundColor: fl.color }} />}
                  </div>

                  <div className="flower-tag">
                    <span className="flower-name">{fl.name}</span>
                    <span className="flower-status">{isBloomed ? '🌸 Open' : '✨ Tap'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grass & Soil Base */}
          <div className="garden-ground">
            <div className="grass-tuft t1" />
            <div className="grass-tuft t2" />
            <div className="grass-tuft t3" />
          </div>
        </div>

        {/* Completion Message when all 4 are bloomed */}
        {isAllBloomed && (
          <div className="garden-completion-banner glass-panel fade-in">
            <Sparkles size={20} className="sparkle-icon" />
            <p className="completion-text serif-title">
              {config.garden.completionText}
            </p>
          </div>
        )}

        {/* Next Chapter CTA */}
        <div className="cta-container text-center" style={{ marginTop: '36px' }}>
          <button 
            className="btn-primary"
            onClick={onNextChapter}
          >
            <span>{config.garden.cta}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Floating Card Modal with Flower's Message */}
      {activeFlowerMessage && (
        <div className="modal-overlay" onClick={() => setActiveFlowerMessage(null)}>
          <div className="flower-modal-sheet glass-panel" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveFlowerMessage(null)}
              aria-label="Close message"
            >
              <X size={18} />
            </button>

            <div className="flower-modal-icon" style={{ backgroundColor: activeFlowerMessage.accent }}>
              <Flower2 size={28} color={activeFlowerMessage.color} />
            </div>

            <span className="flower-modal-name">{activeFlowerMessage.name}</span>
            <blockquote className="flower-modal-quote serif-title">
              “{activeFlowerMessage.message}”
            </blockquote>
            <p className="flower-modal-detail">
              {activeFlowerMessage.detail}
            </p>

            <button 
              className="btn-secondary"
              onClick={() => setActiveFlowerMessage(null)}
              style={{ marginTop: '18px' }}
            >
              Keep Exploring 🌸
            </button>
          </div>
        </div>
      )}

      {/* Particle Petals Burst Rendering */}
      {petalsBurst.map(p => (
        <div 
          key={p.id}
          className="petal-particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            backgroundColor: p.color,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--rot': `${p.rot}deg`
          }}
        />
      ))}
    </section>
  );
}

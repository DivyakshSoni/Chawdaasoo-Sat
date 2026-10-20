import React, { useState } from 'react';
import { ChevronRight, Eye, EyeOff, ZoomIn, X, Calendar, Sparkles } from 'lucide-react';

export default function MemoryGallery({ config, onNextChapter, isHidden, onToggleHide }) {
  const [activeMemory, setActiveMemory] = useState(null);

  // SVG Illustrated Vignettes for Polaroid cards
  const renderArt = (type) => {
    switch (type) {
      case 'sitaramam':
        return (
          <svg viewBox="0 0 200 160" className="memory-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="160" fill="#FCF2F4" rx="8" />
            <circle cx="100" cy="80" r="58" fill="#F8DEE5" />
            {/* Film Strip Border Accents */}
            <rect x="25" y="24" width="150" height="112" rx="6" fill="#3D2534" />
            <rect x="33" y="32" width="134" height="96" rx="4" fill="#FFF9F3" />
            {/* Vintage Film holes */}
            <rect x="28" y="26" width="4" height="4" rx="1" fill="#FFF9F3" />
            <rect x="40" y="26" width="4" height="4" rx="1" fill="#FFF9F3" />
            <rect x="52" y="26" width="4" height="4" rx="1" fill="#FFF9F3" />
            <rect x="144" y="26" width="4" height="4" rx="1" fill="#FFF9F3" />
            <rect x="156" y="26" width="4" height="4" rx="1" fill="#FFF9F3" />
            <rect x="168" y="26" width="4" height="4" rx="1" fill="#FFF9F3" />
            {/* Romantic Love Letter Envelope (Sita Ramam theme) */}
            <path d="M60 88 L100 62 L140 88 L140 114 L60 114 Z" fill="#FDF4EB" stroke="#D4A373" strokeWidth="1.5" />
            <path d="M60 88 L100 102 L140 88" stroke="#D4A373" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="98" r="6" fill="#A8384E" />
            {/* Little heart seal */}
            <path d="M100 96 C99 94 96 94 96 96 C96 98 100 100 100 101 C100 100 104 98 104 96 C104 94 101 94 100 96 Z" fill="#FFF" />
            {/* Movie Ticket & Title */}
            <rect x="68" y="44" width="64" height="26" rx="3" fill="#E8A2BB" opacity="0.3" stroke="#E8A2BB" strokeDasharray="3 2" />
            <text x="100" y="60" textAnchor="middle" fill="#873D60" fontSize="10" fontFamily="serif" fontWeight="bold">SITA RAMAM</text>
            <circle cx="145" cy="48" r="3" fill="#F4E4BF" />
            <circle cx="55" cy="52" r="2.5" fill="#E8A2BB" />
          </svg>
        );

      case 'basketball':
        return (
          <svg viewBox="0 0 200 160" className="memory-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="160" fill="#FFF4EB" rx="8" />
            {/* Golden hour sunset sky */}
            <circle cx="100" cy="78" r="56" fill="#FDE1CE" />
            <circle cx="100" cy="78" r="38" fill="#FAD1B4" />
            {/* College court ground */}
            <path d="M30 135 C75 125, 125 125, 170 135" stroke="#D4A373" strokeWidth="3" strokeLinecap="round" />
            {/* Basketball Hoop Pole */}
            <line x1="140" y1="42" x2="140" y2="130" stroke="#873D60" strokeWidth="3.5" strokeLinecap="round" />
            {/* Backboard */}
            <rect x="120" y="40" width="38" height="26" rx="2" fill="#FFF9F3" stroke="#873D60" strokeWidth="2" />
            <rect x="128" y="47" width="16" height="12" fill="none" stroke="#E8A2BB" strokeWidth="1.5" />
            {/* Rim & Net */}
            <line x1="112" y1="59" x2="128" y2="59" stroke="#E06D53" strokeWidth="2.5" />
            <path d="M114 59 L117 72 L121 59 L125 72 L127 59" stroke="#E8A2BB" strokeWidth="1.2" fill="none" />
            {/* Basketball in flight */}
            <circle cx="85" cy="74" r="14" fill="#F28A44" stroke="#D46A2A" strokeWidth="1.5" />
            <path d="M73 74 Q85 70 97 74" stroke="#FFF" strokeWidth="1.2" fill="none" opacity="0.8" />
            <path d="M85 62 Q85 74 85 86" stroke="#FFF" strokeWidth="1.2" fill="none" opacity="0.8" />
            {/* Floating Heart & Breeze */}
            <path d="M60 55 Q70 50 80 56" stroke="#F4E4BF" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="62" cy="70" r="3" fill="#E8A2BB" opacity="0.7" />
          </svg>
        );

      case 'roopsagar':
        return (
          <svg viewBox="0 0 200 160" className="memory-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="160" fill="#F4EDF7" rx="8" />
            <circle cx="100" cy="80" r="56" fill="#E8DBEE" />
            {/* Twilight Sky Crescent Moon */}
            <path d="M142 42 C134 42 127 48 127 56 C127 64 134 70 142 70 C137 70 133 65 133 56 C133 47 137 42 142 42 Z" fill="#F4E4BF" />
            <circle cx="68" cy="46" r="2" fill="#E8A2BB" />
            <circle cx="82" cy="38" r="1.5" fill="#F4E4BF" />
            {/* Roop Sagar Road curving */}
            <path d="M40 140 C60 105, 90 95, 100 85 C108 95, 138 105, 160 140 Z" fill="#E5D6E8" />
            <path d="M100 85 L100 140" stroke="#FFF" strokeWidth="2" strokeDasharray="6 4" opacity="0.8" />
            {/* Romantic Streetlamp with glowing halo */}
            <circle cx="138" cy="86" r="18" fill="#F4E4BF" opacity="0.45" />
            <line x1="138" y1="84" x2="138" y2="135" stroke="#5C3A50" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M132 84 L144 84 L142 77 L134 77 Z" fill="#5C3A50" />
            <circle cx="138" cy="86" r="4" fill="#FFF9E6" />
            {/* Roadside flowering trees */}
            <circle cx="56" cy="98" r="16" fill="#E8A2BB" opacity="0.85" />
            <line x1="56" y1="98" x2="56" y2="130" stroke="#873D60" strokeWidth="2.5" />
            <circle cx="70" cy="92" r="10" fill="#F8DDE7" opacity="0.8" />
          </svg>
        );

      case 'maggilibrary':
      default:
        return (
          <svg viewBox="0 0 200 160" className="memory-art-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="160" fill="#FFF9ED" rx="8" />
            <circle cx="100" cy="80" r="56" fill="#FCEECC" />
            {/* Table Surface */}
            <path d="M30 134 C75 130, 125 130, 170 134" stroke="#D4A373" strokeWidth="3" strokeLinecap="round" />
            {/* CTAE Library Books Stack */}
            <rect x="42" y="112" width="52" height="12" rx="2" fill="#873D60" />
            <rect x="46" y="100" width="45" height="11" rx="2" fill="#E8A2BB" />
            <rect x="49" y="89" width="39" height="10" rx="2" fill="#6B8E68" />
            <line x1="91" y1="94" x2="98" y2="94" stroke="#F4E4BF" strokeWidth="2" /> {/* Bookmark */}
            {/* Steaming Bowl of Maggi */}
            <ellipse cx="132" cy="115" rx="28" ry="12" fill="#E08B38" />
            <path d="M104 115 C104 128, 160 128, 160 115 Z" fill="#F3A648" stroke="#D4782A" strokeWidth="1.5" />
            {/* Noodle swirls */}
            <path d="M115 113 Q122 108 128 113 Q135 118 142 113 Q148 108 152 113" stroke="#FFF3D6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Chopsticks / Fork */}
            <line x1="126" y1="88" x2="148" y2="120" stroke="#873D60" strokeWidth="2" strokeLinecap="round" />
            <line x1="133" y1="86" x2="152" y2="118" stroke="#873D60" strokeWidth="2" strokeLinecap="round" />
            {/* Heart Steam */}
            <path d="M125 100 Q122 92 128 84" stroke="#E8A2BB" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M138 98 Q144 88 138 80" stroke="#E8A2BB" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <circle cx="133" cy="76" r="3" fill="#E8A2BB" />
          </svg>
        );
    }
  };

  if (isHidden) {
    return (
      <section className="chapter-wrapper memory-chapter hidden-mode" aria-label="Chapter 3: Memories (Hidden)">
        <div className="chapter-content text-center">
          <div className="chapter-badge">
            <span>{config.memories.badge}</span>
          </div>
          <div className="glass-panel hidden-notice-box">
            <p className="hidden-notice-text">
              This chapter is kept tucked away out of respect for your space.
            </p>
            <button 
              className="btn-subtle"
              onClick={onToggleHide}
            >
              <Eye size={15} />
              <span>Show memories chapter</span>
            </button>
          </div>
          <div className="cta-container" style={{ marginTop: '24px' }}>
            <button className="btn-primary" onClick={onNextChapter}>
              <span>{config.memories.cta}</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="chapter-wrapper memory-chapter" aria-label="Chapter 3: A Little Collection of Memories">
      <div className="chapter-content">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '24px' }}>
          <div className="chapter-badge">
            <span>{config.memories.badge}</span>
          </div>
          <h2 className="serif-title memory-headline">
            {config.memories.headline}
          </h2>
          <p className="memory-subheading">
            {config.memories.subheading}
          </p>

          {/* Option to hide memories if uncomfortable */}
          <div className="hide-toggle-wrapper">
            <button 
              className="btn-subtle hide-btn"
              onClick={onToggleHide}
              title="Hide this section if revisiting memories feels uncomfortable"
              aria-label="Hide memories chapter"
            >
              <EyeOff size={14} />
              <span>Prefer to skip memories? Hide this section</span>
            </button>
          </div>
        </div>

        {/* Polaroid Scrapbook Grid / Swipe Gallery */}
        <div className="polaroid-grid">
          {config.memories.items.map((item, index) => {
            const rotDegrees = (index % 2 === 0 ? -1.8 : 1.8) * (1 + (index % 3) * 0.4);
            return (
              <div 
                key={item.id} 
                className="polaroid-card"
                style={{ transform: `rotate(${rotDegrees}deg)` }}
                onClick={() => setActiveMemory(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveMemory(item);
                  }
                }}
                aria-label={`View memory: ${item.title}`}
              >
                {/* Washi tape on top of polaroid */}
                <div className={`tape-strip tape-${index % 3}`} />

                {/* Photo frame */}
                <div className="polaroid-photo">
                  {renderArt(item.type)}
                  <span className="zoom-hint">
                    <ZoomIn size={14} />
                    <span>Tap to view</span>
                  </span>
                </div>

                {/* Handwritten label on the bottom of Polaroid */}
                <div className="polaroid-caption">
                  <p className="caption-title">{item.title}</p>
                  <p className="handwritten caption-note">“{item.subtitle}”</p>
                  <span className="caption-date">{item.date}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Chapter CTA */}
        <div className="cta-container text-center" style={{ marginTop: '36px' }}>
          <button 
            className="btn-primary"
            onClick={onNextChapter}
          >
            <span>{config.memories.cta}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Expanded Lightbox Modal */}
      {activeMemory && (
        <div className="modal-overlay" onClick={() => setActiveMemory(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveMemory(null)}
              aria-label="Close memory modal"
            >
              <X size={18} />
            </button>

            <div className="modal-photo-area">
              {renderArt(activeMemory.type)}
            </div>

            <div className="modal-info">
              <span className="modal-tag">{activeMemory.tag}</span>
              <h3 className="serif-title modal-title">{activeMemory.title}</h3>
              <div className="modal-date">
                <Calendar size={14} />
                <span>{activeMemory.date}</span>
              </div>
              <p className="modal-note handwritten">
                “{activeMemory.note}”
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

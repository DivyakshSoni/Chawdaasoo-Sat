import React, { useState } from 'react';
import { ChevronRight, RotateCw, Heart, Sparkles, BookOpen } from 'lucide-react';

export default function GrowthCards({ config, onNextChapter }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const cards = config.growthCards.cards;

  return (
    <section className="chapter-wrapper growth-chapter" aria-label="Chapter 5: Things I Am Learning About Love">
      <div className="chapter-content">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <div className="chapter-badge">
            <span>{config.growthCards.badge}</span>
          </div>
          <h2 className="serif-title growth-headline">
            {config.growthCards.headline}
          </h2>
          <p className="growth-subheading">
            {config.growthCards.subheading}
          </p>
        </div>

        {/* 5 Flip Cards Grid */}
        <div className="flip-cards-grid">
          {cards.map((card, idx) => {
            const isFlipped = !!flippedCards[card.id];
            return (
              <div 
                key={card.id}
                className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleFlip(card.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(card.id);
                  }
                }}
                aria-label={`${card.title}. ${isFlipped ? 'Back showing: ' + card.back : 'Front showing: ' + card.front + '. Click to flip.'}`}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-face flip-card-front glass-panel">
                    <div className="card-top-bar">
                      <span className="card-index">0{idx + 1}</span>
                      <span className="card-flip-prompt">
                        <RotateCw size={13} className="spin-hint" />
                        <span>Tap to turn</span>
                      </span>
                    </div>

                    <div className="card-content-area">
                      <span className="card-pill-tag">{card.title}</span>
                      <h3 className="serif-title card-front-text">
                        “{card.front}”
                      </h3>
                    </div>

                    <div className="card-bottom-bar">
                      <span className="card-hint-text">Reflecting on what this means...</span>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-face flip-card-back parchment-sheet">
                    <div className="card-top-bar">
                      <span className="card-index back-idx">0{idx + 1}</span>
                      <span className="card-flip-prompt">
                        <RotateCw size={13} />
                        <span>Flip back</span>
                      </span>
                    </div>

                    <div className="card-content-area">
                      <p className="card-back-text">
                        {card.back}
                      </p>
                    </div>

                    <div className="card-bottom-bar back-bottom">
                      <Heart size={14} color="#873D60" fill="#E8A2BB" />
                      <span className="growth-affirmation">A lesson taken to heart</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Quote Card */}
        <div className="quote-box glass-panel text-center">
          <Sparkles size={20} className="quote-icon" />
          <blockquote className="serif-title quote-text">
            “{config.growthCards.quote}”
          </blockquote>
        </div>

        {/* Next Chapter CTA */}
        <div className="cta-container text-center" style={{ marginTop: '36px' }}>
          <button 
            className="btn-primary"
            onClick={onNextChapter}
          >
            <span>{config.growthCards.cta}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

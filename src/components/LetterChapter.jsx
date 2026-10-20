import React, { useState, useEffect } from 'react';
import { ChevronRight, FastForward, Heart, Feather, Sparkles } from 'lucide-react';

export default function LetterChapter({ config, onNextChapter }) {
  const [displayedParagraphs, setDisplayedParagraphs] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const paragraphs = config.letter.paragraphs;

  // Gentle progressive reveal of paragraphs (mimicking heartfelt reading / typewriter pace)
  useEffect(() => {
    if (isTypingComplete) return;

    if (displayedParagraphs < paragraphs.length) {
      const timer = setTimeout(() => {
        setDisplayedParagraphs(prev => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedParagraphs, paragraphs.length, isTypingComplete]);

  const handleSkipTyping = () => {
    setDisplayedParagraphs(paragraphs.length);
    setIsTypingComplete(true);
  };

  return (
    <section className="chapter-wrapper letter-chapter" aria-label="Chapter 2: A Letter From My Heart">
      <div className="chapter-content">
        {/* Badge & Headline */}
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <div className="chapter-badge">
            <span>{config.letter.badge}</span>
          </div>
          <h2 className="letter-headline serif-title">
            {config.letter.headline}
          </h2>
        </div>

        {/* Parchment Letter Sheet */}
        <article className="parchment-sheet letter-sheet">
          {/* Decorative postal stamp & pressed flower in the corner */}
          <div className="letter-postmark">
            <div className="vintage-stamp">
              <span className="stamp-heart">🌸</span>
              <span className="stamp-text">SPECIAL DELIVERY</span>
              <span className="stamp-date">WITH CARE</span>
            </div>
            <div className="postmark-lines">
              <span /><span /><span />
            </div>
          </div>

          {/* Salutation */}
          <div className="letter-salutation">
            <h3 className="serif-title salutation-text">
              Dear {config.recipientName || "Mahi Ma'am"},
            </h3>
          </div>

          {/* Letter Body Paragraphs */}
          <div className="letter-body">
            {paragraphs.map((p, idx) => {
              const isVisible = idx < displayedParagraphs || isTypingComplete;
              return (
                <p 
                  key={idx} 
                  className={`letter-paragraph ${isVisible ? 'fade-in' : 'hidden'}`}
                >
                  {p}
                </p>
              );
            })}
          </div>

          {/* Signoff */}
          <div className={`letter-signoff ${displayedParagraphs >= paragraphs.length ? 'fade-in' : 'hidden'}`}>
            <p className="closing-line">{config.letter.closing}</p>
            <p className="handwritten signature-text">
              {config.senderSignature || config.letter.signoff}
            </p>
          </div>

          {/* P.S. Note taped on parchment */}
          {config.letter.postscript && (
            <div className={`postscript-card ${isTypingComplete ? 'fade-in' : 'hidden'}`}>
              <div className="washi-tape" />
              <p className="handwritten ps-text">
                {config.letter.postscript}
              </p>
            </div>
          )}

          {/* Skip typewriter button */}
          {!isTypingComplete && (
            <div className="skip-typing-bar">
              <button 
                className="btn-subtle"
                onClick={handleSkipTyping}
                aria-label="Skip typing to read full letter"
              >
                <FastForward size={14} />
                <span>Show full letter</span>
              </button>
            </div>
          )}
        </article>

        {/* Next Chapter CTA */}
        <div className="cta-container text-center" style={{ marginTop: '36px' }}>
          <button 
            className="btn-primary"
            onClick={onNextChapter}
          >
            <span>{config.letter.cta}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

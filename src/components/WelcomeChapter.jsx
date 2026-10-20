import React, { useState } from 'react';
import { Sparkles, Heart, ChevronRight, FastForward } from 'lucide-react';

export default function WelcomeChapter({ config, onNextChapter }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        onNextChapter();
      }, 900);
    }, 700);
  };

  const handleSkip = () => {
    onNextChapter();
  };

  return (
    <section className="chapter-wrapper welcome-chapter" aria-label="Chapter 1: The Little World I Made For You">
      <div className="chapter-content text-center">
        {/* Chapter Badge */}
        <div className="chapter-badge">
          <span>{config.welcome.badge}</span>
        </div>

        {/* Main Headings */}
        <h1 className="welcome-heading serif-title">
          {config.welcome.heading}
        </h1>

        <p className="welcome-supporting">
          {config.welcome.supportingText}
        </p>

        <p className="welcome-subtext">
          {config.welcome.subtext}
        </p>

        {/* Interactive 3D Romantic Envelope */}
        <div className="envelope-stage">
          <div 
            className={`envelope-card floating-anim ${isOpening ? 'opening' : ''} ${isOpened ? 'opened' : ''}`}
            onClick={handleOpenEnvelope}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpenEnvelope();
              }
            }}
            aria-label="Click to break heart seal and open letter envelope"
          >
            {/* Flap top */}
            <div className="envelope-flap" />

            {/* Letter sliding out */}
            <div className="letter-preview">
              <div className="letter-lines">
                <span className="line l1" />
                <span className="line l2" />
                <span className="line l3" />
              </div>
              <div className="letter-stamp">💌</div>
            </div>

            {/* Envelope pocket front */}
            <div className="envelope-pocket">
              <div className="pocket-left" />
              <div className="pocket-right" />
              <div className="pocket-bottom" />
            </div>

            {/* Wax Heart Seal */}
            <div className="wax-seal" title="Wax seal: Click to open">
              <div className="wax-outer">
                <Heart size={20} fill="#FFF9F3" strokeWidth={0} className="seal-heart" />
              </div>
              <span className="wax-tooltip">Tap to open</span>
            </div>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="cta-container">
          <button 
            className="btn-primary btn-large heart-beat-anim"
            onClick={handleOpenEnvelope}
            disabled={isOpening}
          >
            <span>{config.welcome.buttonText}</span>
            <ChevronRight size={18} />
          </button>

          <button 
            className="btn-subtle skip-btn"
            onClick={handleSkip}
            aria-label="Skip envelope animation directly to letter"
          >
            <FastForward size={14} />
            <span>Skip animation</span>
          </button>
        </div>

        {/* Playful Microcopy */}
        <div className="playful-box">
          <p className="handwritten playful-text">
            {config.welcome.warningText}
          </p>
        </div>
      </div>
    </section>
  );
}

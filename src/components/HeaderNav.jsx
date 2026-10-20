import React, { useState } from 'react';
import { Music, VolumeX, Sparkles, Sliders, RotateCcw, Star, Menu, X, ChevronRight } from 'lucide-react';

export default function HeaderNav({
  currentChapter,
  totalChapters,
  onSelectChapter,
  onRestart,
  isMusicPlaying,
  onToggleMusic,
  onOpenSettings,
  onOpenSecret,
  reducedMotion,
  onToggleReducedMotion
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const chapterNames = [
    "The Little World I Made For You",
    "A Letter From My Heart",
    "A Little Collection of Memories",
    "A Garden of Little Things",
    "Things I Am Learning About Love",
    "The Playful Question",
    "The Final Question"
  ];

  const progressPercent = Math.min(100, Math.round((currentChapter / totalChapters) * 100));

  return (
    <header className="header-nav">
      <div className="header-container">
        {/* Left: Title & Chapter badge */}
        <div className="header-left">
          <button 
            className="header-brand"
            onClick={() => onSelectChapter(1)}
            title="Return to start"
            aria-label="Return to cover"
          >
            <span className="brand-icon">💌</span>
            <div className="brand-text">
              <span className="brand-title">If I Could Write Us Again</span>
              <span className="chapter-label">Chapter {currentChapter} of {totalChapters}</span>
            </div>
          </button>
        </div>

        {/* Right: Quick tools & actions */}
        <div className="header-actions">
          {/* Ambient Music Button */}
          <button
            className={`tool-btn music-btn ${isMusicPlaying ? 'is-active' : ''}`}
            onClick={onToggleMusic}
            title={isMusicPlaying ? "Mute ambient music" : "Play ambient music (No autoplay)"}
            aria-label={isMusicPlaying ? "Mute ambient music" : "Play ambient melody"}
          >
            {isMusicPlaying ? (
              <>
                <Music size={17} className="pulse-icon" />
                <span className="eq-bars">
                  <span className="bar b1"></span>
                  <span className="bar b2"></span>
                  <span className="bar b3"></span>
                </span>
              </>
            ) : (
              <>
                <VolumeX size={17} />
                <span className="btn-label-desktop">Music</span>
              </>
            )}
          </button>

          {/* Secret Star Easter Egg */}
          <button
            className="tool-btn star-btn"
            onClick={onOpenSecret}
            title="A secret little note ✨"
            aria-label="Open secret note"
          >
            <Star size={17} className="star-icon" />
          </button>

          {/* Personalize / Customize Drawer Button */}
          <button
            className="tool-btn customize-btn"
            onClick={onOpenSettings}
            title="Personalize names, letter & memories"
            aria-label="Open personalization settings"
          >
            <Sliders size={17} />
            <span className="btn-label-desktop">Personalize</span>
          </button>

          {/* Chapter Quick Switcher Menu Trigger */}
          <button
            className="tool-btn menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            title="Browse Chapters"
            aria-label="Browse chapters menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Progress Bar under header */}
      <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Chapter Dropdown Sheet */}
      {menuOpen && (
        <div className="chapter-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="chapter-menu-sheet glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-header">
              <span className="sheet-title">Chapters & Navigation</span>
              <button className="sheet-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            <div className="chapter-list">
              {chapterNames.map((name, index) => {
                const chapNum = index + 1;
                const isCurrent = chapNum === currentChapter;
                return (
                  <button
                    key={chapNum}
                    className={`chapter-list-item ${isCurrent ? 'active' : ''}`}
                    onClick={() => {
                      onSelectChapter(chapNum);
                      setMenuOpen(false);
                    }}
                  >
                    <span className="item-num">0{chapNum}</span>
                    <span className="item-name">{name}</span>
                    {isCurrent && <span className="active-dot" />}
                    <ChevronRight size={14} className="item-chevron" />
                  </button>
                );
              })}
            </div>

            <div className="sheet-footer">
              <button 
                className="sheet-action-btn"
                onClick={() => {
                  onToggleReducedMotion();
                }}
              >
                <span>{reducedMotion ? "⚡ Enable Motion" : "🌿 Reduced Motion"}</span>
              </button>
              <button 
                className="sheet-action-btn restart"
                onClick={() => {
                  if (window.confirm("Start over from Chapter 1?")) {
                    onRestart();
                    setMenuOpen(false);
                  }
                }}
              >
                <RotateCcw size={14} />
                <span>Start from Cover</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

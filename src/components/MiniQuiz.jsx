import React, { useState } from 'react';
import { ChevronRight, Heart, Star, Sparkles, Smile, MessageCircle } from 'lucide-react';

export default function MiniQuiz({ config, onNextChapter }) {
  const [selectedRating, setSelectedRating] = useState(null);
  const quiz = config.playfulQuiz;

  const getResponse = (rating) => {
    if (!rating) return null;
    if (rating <= 4) return { text: quiz.responses.low, mood: '😂', tag: 'Honest Review' };
    if (rating <= 7) return { text: quiz.responses.mid, mood: '🌷', tag: 'Small Victory' };
    return { text: quiz.responses.high, mood: '💗', tag: 'Mission Accomplished' };
  };

  const currentFeedback = getResponse(selectedRating);

  return (
    <section className="chapter-wrapper quiz-chapter" aria-label="Chapter 6: The Playful Question">
      <div className="chapter-content text-center">
        {/* Badge & Headline */}
        <div className="chapter-badge">
          <span>{quiz.badge}</span>
        </div>

        <h2 className="serif-title quiz-headline">
          {quiz.headline}
        </h2>

        <p className="quiz-question">
          {quiz.question}
        </p>

        <p className="quiz-disclaimer">
          (A strictly playful review of my website design choices, not an exam on your feelings! 😉)
        </p>

        {/* 1 to 10 Rating Selector */}
        <div className="rating-scale-container glass-panel">
          <div className="rating-pills-row" role="radiogroup" aria-label="Smile rating from 1 to 10">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
              const isSelected = selectedRating === num;
              return (
                <button
                  key={num}
                  className={`rating-pill-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedRating(num)}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`Rate ${num} out of 10`}
                >
                  <span className="rating-number">{num}</span>
                  <Heart 
                    size={14} 
                    className="rating-heart-icon"
                    fill={isSelected ? '#FFF' : 'none'}
                    color={isSelected ? '#FFF' : '#873D60'} 
                  />
                </button>
              );
            })}
          </div>

          <div className="rating-labels">
            <span>A polite chuckle</span>
            <span>Uncontrollable grinning</span>
          </div>

          {/* Dynamic Playful Response Box */}
          {currentFeedback && (
            <div className="quiz-response-box fade-in">
              <span className="response-tag">{currentFeedback.tag}</span>
              <p className="response-message handwritten">
                “{currentFeedback.text}”
              </p>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="cta-container" style={{ marginTop: '36px' }}>
          <button 
            className="btn-primary"
            onClick={onNextChapter}
          >
            <span>{quiz.cta}</span>
            <ChevronRight size={18} />
          </button>

          <div>
            <button 
              className="btn-subtle"
              onClick={onNextChapter}
              style={{ marginTop: '12px' }}
            >
              <span>{quiz.skipText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

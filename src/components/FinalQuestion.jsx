import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, MessageCircle, Copy, Check, RotateCcw, Send, ExternalLink } from 'lucide-react';

export default function FinalQuestion({ config, onRestart }) {
  // stage: 'q1' | 'needTime' | 'q2' | 'talk' | 'notReady'
  const [stage, setStage] = useState('q1');
  const [copied, setCopied] = useState(false);

  const fq = config.finalQuestion;

  // Trigger celebration confetti when she chooses to talk
  useEffect(() => {
    if (stage === 'talk') {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E8A2BB', '#F8DDE7', '#873D60', '#F4E4BF', '#FFFFFF']
        });
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#E8A2BB', '#873D60', '#F4E4BF']
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#E8A2BB', '#873D60', '#F4E4BF']
          });
        }, 350);
      } catch (err) {
        console.log('Confetti effect unavailable:', err);
      }
    }
  }, [stage]);

  const handleCopyMessage = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const getWhatsAppUrl = (phone, text) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
  };

  return (
    <section className="chapter-wrapper final-chapter" aria-label="Chapter 7: The Final Question">
      <div className="chapter-content text-center">
        {/* Chapter Badge */}
        <div className="chapter-badge">
          <span>{fq.badge}</span>
        </div>

        {/* ========================================================= */}
        {/* STAGE 1: Q1 — Forgiveness */}
        {/* ========================================================= */}
        {stage === 'q1' && (
          <div className="question-stage-box glass-panel fade-in">
            <div className="heart-envelope-icon pulse-anim">
              <span className="floating-heart-emoji">💌</span>
            </div>

            <h2 className="serif-title final-headline">
              {fq.headline}
            </h2>

            <h3 className="serif-title question-text">
              {fq.q1.text}
            </h3>

            <p className="question-subtext">
              {fq.q1.subtext}
            </p>

            <div className="final-button-group">
              <button
                className="btn-primary final-btn"
                onClick={() => setStage('q2')}
                aria-label="Yes, I think I can forgive you"
              >
                <span>{fq.q1.yesBtn}</span>
              </button>

              <button
                className="btn-secondary final-btn"
                onClick={() => setStage('needTime')}
                aria-label="Not yet, I need more time"
              >
                <span>{fq.q1.noBtn}</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* BRANCH A: NEED TIME */}
        {/* ========================================================= */}
        {stage === 'needTime' && (
          <div className="ending-card glass-panel fade-in">
            <div className="ending-badge">{fq.endings.needTime.badge}</div>

            <h2 className="serif-title ending-title">
              {fq.endings.needTime.title}
            </h2>
            <h3 className="ending-subtitle">
              {fq.endings.needTime.subheading}
            </h3>

            <div className="parchment-sheet ending-message-box">
              <p className="ending-paragraph">
                {fq.endings.needTime.message}
              </p>
            </div>

            <div className="ending-actions">
              <button
                className="btn-secondary"
                onClick={() => setStage('q1')}
              >
                <RotateCcw size={16} />
                <span>Revisit question</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* STAGE 2: Q2 — Reconnection */}
        {/* ========================================================= */}
        {stage === 'q2' && (
          <div className="question-stage-box glass-panel fade-in">
            {/* Gentle acknowledgment from prompt */}
            <div className="acknowledgment-box">
              <p className="acknowledgment-text">
                🌸 {fq.q1.yesAcknowledgment}
              </p>
            </div>

            <h2 className="serif-title question-text" style={{ marginTop: '16px' }}>
              {fq.q2.text}
            </h2>

            <p className="question-subtext">
              {fq.q2.subtext}
            </p>

            <div className="final-button-group">
              <button
                className="btn-primary final-btn"
                onClick={() => setStage('talk')}
                aria-label="Yes, let's talk about it"
              >
                <span>{fq.q2.yesBtn}</span>
              </button>

              <button
                className="btn-secondary final-btn"
                onClick={() => setStage('notReady')}
                aria-label="I am not ready to try again"
              >
                <span>{fq.q2.noBtn}</span>
              </button>
            </div>

            <div>
              <button
                className="btn-subtle"
                onClick={() => setStage('q1')}
                style={{ marginTop: '16px' }}
              >
                <RotateCcw size={14} />
                <span>Go back to previous question</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* BRANCH B: CELEBRATION & TALK (POSITIVE OUTCOME) */}
        {/* ========================================================= */}
        {stage === 'talk' && (
          <div className="celebration-card glass-panel fade-in">
            <div className="celebration-banner-pill pulse-anim">
              <Sparkles size={16} />
              <span>{fq.endings.talk.banner}</span>
            </div>

            <h2 className="serif-title celebration-title">
              {fq.endings.talk.title}
            </h2>

            <div className="parchment-sheet celebration-message-box">
              {fq.endings.talk.paragraphs.map((para, i) => (
                <p key={i} className="celebration-para">
                  {para}
                </p>
              ))}
            </div>

            {/* Reconnect / WhatsApp Action */}
            <div className="reconnect-contact-box">
              {config.senderPhone && config.senderPhone.trim().length >= 7 ? (
                /* Valid configured phone number: direct WhatsApp link */
                <div>
                  <a
                    href={getWhatsAppUrl(config.senderPhone, fq.endings.talk.whatsAppPlaceholderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-large heart-beat-anim"
                    style={{ textDecoration: 'none' }}
                  >
                    <MessageCircle size={19} />
                    <span>{fq.endings.talk.ctaText}</span>
                    <ExternalLink size={16} />
                  </a>
                  <p className="whatsapp-note">
                    Opens WhatsApp with your pre-filled note to {config.senderName || 'him'}.
                  </p>
                </div>
              ) : (
                /* No phone number pre-configured: copyable gentle text */
                <div className="message-copy-card">
                  <p className="copy-card-hint">
                    Here's a gentle note you can copy and send whenever you feel like saying hello:
                  </p>
                  <div className="message-snippet-box">
                    <span className="snippet-quote">“</span>
                    <p className="snippet-text handwritten">
                      {fq.endings.talk.whatsAppPlaceholderMessage}
                    </p>
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => handleCopyMessage(fq.endings.talk.whatsAppPlaceholderMessage)}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        <span>Copied to clipboard! 💗</span>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <span>Copy this message</span>
                      </>
                    )}
                  </button>
                  <p className="config-tip">

                  </p>
                </div>
              )}
            </div>

            <div className="restart-row">
              <button className="btn-subtle" onClick={onRestart}>
                <RotateCcw size={14} />
                <span>Read from Chapter 1 again</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* BRANCH C: NOT READY TO TRY AGAIN (RESPECTFUL OUTCOME) */}
        {/* ========================================================= */}
        {stage === 'notReady' && (
          <div className="ending-card glass-panel fade-in">
            <div className="ending-badge">{fq.endings.notReady.badge}</div>

            <h2 className="serif-title ending-title">
              {fq.endings.notReady.title}
            </h2>
            <h3 className="ending-subtitle">
              {fq.endings.notReady.subheading}
            </h3>

            <div className="parchment-sheet ending-message-box">
              <p className="ending-paragraph">
                {fq.endings.notReady.message}
              </p>
            </div>

            <div className="ending-actions">
              <button
                className="btn-secondary"
                onClick={() => setStage('q2')}
              >
                <RotateCcw size={16} />
                <span>Revisit question</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

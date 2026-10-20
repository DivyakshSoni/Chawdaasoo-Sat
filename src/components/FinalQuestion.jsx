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
    let cleanPhone = (phone || '918955791968').replace(/[^0-9]/g, '');
    if (cleanPhone.length === 10) {
      cleanPhone = `91${cleanPhone}`;
    }
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

            {/* Direct WhatsApp message card for Need Time */}
            <div className="reconnect-contact-box" style={{ marginTop: '16px', marginBottom: '24px' }}>
              <div className="message-copy-card">
                <p className="copy-card-hint">
                  Here is a gentle note you can send to let him know:
                </p>
                <div className="message-snippet-box">
                  <span className="snippet-quote">“</span>
                  <p className="snippet-text handwritten">
                    {fq.endings.needTime.whatsAppPlaceholderMessage}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                  <a
                    href={getWhatsAppUrl(config.senderPhone || '918955791968', fq.endings.needTime.whatsAppPlaceholderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-large"
                    style={{
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.4)',
                      padding: '14px 28px',
                      fontSize: '1.05rem',
                      width: '100%',
                      maxWidth: '360px'
                    }}
                  >
                    <MessageCircle size={22} />
                    <span>Send on WhatsApp 🌷</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    className="btn-secondary"
                    onClick={() => handleCopyMessage(fq.endings.needTime.whatsAppPlaceholderMessage)}
                    style={{ width: '100%', maxWidth: '360px' }}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        <span>Copied to clipboard! 🌷</span>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <span>Or copy message to clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="whatsapp-note" style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                  Directly opens WhatsApp chat with <strong>+91 89557 91968</strong>.
                </p>
              </div>
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

            {/* Reconnect / Direct WhatsApp Action */}
            <div className="reconnect-contact-box">
              <div className="message-copy-card">
                <p className="copy-card-hint">
                  Here is the little note prepared for you to send:
                </p>
                <div className="message-snippet-box">
                  <span className="snippet-quote">“</span>
                  <p className="snippet-text handwritten">
                    {fq.endings.talk.whatsAppPlaceholderMessage}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                  <a
                    href={getWhatsAppUrl(config.senderPhone || '918955791968', fq.endings.talk.whatsAppPlaceholderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-large heart-beat-anim"
                    style={{
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.4)',
                      padding: '14px 28px',
                      fontSize: '1.05rem',
                      width: '100%',
                      maxWidth: '360px'
                    }}
                  >
                    <MessageCircle size={22} />
                    <span>Send on WhatsApp 💌</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    className="btn-secondary"
                    onClick={() => handleCopyMessage(fq.endings.talk.whatsAppPlaceholderMessage)}
                    style={{ width: '100%', maxWidth: '360px' }}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        <span>Copied to clipboard! 💗</span>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <span>Or copy message to clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="whatsapp-note" style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                  Directly opens WhatsApp chat with <strong>+91 89557 91968</strong>.
                </p>
              </div>
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

            {/* Direct WhatsApp message card for Not Ready */}
            <div className="reconnect-contact-box" style={{ marginTop: '16px', marginBottom: '24px' }}>
              <div className="message-copy-card">
                <p className="copy-card-hint">
                  Here is a gentle note you can send to let him know:
                </p>
                <div className="message-snippet-box">
                  <span className="snippet-quote">“</span>
                  <p className="snippet-text handwritten">
                    {fq.endings.notReady.whatsAppPlaceholderMessage}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                  <a
                    href={getWhatsAppUrl(config.senderPhone || '918955791968', fq.endings.notReady.whatsAppPlaceholderMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-large"
                    style={{
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      boxShadow: '0 8px 24px -4px rgba(37, 211, 102, 0.4)',
                      padding: '14px 28px',
                      fontSize: '1.05rem',
                      width: '100%',
                      maxWidth: '360px'
                    }}
                  >
                    <MessageCircle size={22} />
                    <span>Send on WhatsApp 🤍</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    className="btn-secondary"
                    onClick={() => handleCopyMessage(fq.endings.notReady.whatsAppPlaceholderMessage)}
                    style={{ width: '100%', maxWidth: '360px' }}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        <span>Copied to clipboard! 🤍</span>
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        <span>Or copy message to clipboard</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="whatsapp-note" style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                  Directly opens WhatsApp chat with <strong>+91 89557 91968</strong>.
                </p>
              </div>
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

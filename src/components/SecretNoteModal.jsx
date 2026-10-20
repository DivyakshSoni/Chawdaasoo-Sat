import React from 'react';
import { X, Star, Heart, Sparkles } from 'lucide-react';

export default function SecretNoteModal({ config, onClose }) {
  const secret = config.secretNote;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Secret Love Note">
      <div className="secret-note-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close secret note">
          <X size={18} />
        </button>

        <div className="secret-star-icon pulse-anim">
          <Star size={28} fill="#F4E4BF" color="#D4A373" />
        </div>

        <h3 className="serif-title secret-title">
          {secret.title}
        </h3>

        <div className="parchment-sheet secret-paper">
          <p className="secret-text handwritten">
            “{secret.content}”
          </p>
          <div className="secret-signoff">
            <span className="secret-author handwritten">{secret.author}</span>
            <Heart size={14} color="#873D60" fill="#E8A2BB" />
          </div>
        </div>

        <button className="btn-secondary" onClick={onClose} style={{ marginTop: '20px' }}>
          <span>Close with a smile 🌟</span>
        </button>
      </div>
    </div>
  );
}

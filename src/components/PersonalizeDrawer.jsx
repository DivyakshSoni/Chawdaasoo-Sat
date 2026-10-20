import React, { useState } from 'react';
import { X, Check, RotateCcw, Heart, Sliders, ShieldCheck, Phone, User, FileText, Music } from 'lucide-react';

export default function PersonalizeDrawer({ config, onSaveConfig, onResetConfig, onClose }) {
  const [formData, setFormData] = useState({
    recipientName: config.recipientName || '',
    senderName: config.senderName || '',
    senderSignature: config.senderSignature || '',
    senderPhone: config.senderPhone || '',
    showMemories: config.showMemories !== false,
    letterBody: config.letter.paragraphs.join('\n\n'),
    postscript: config.letter.postscript || ''
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Parse letter paragraphs from textarea
    const paragraphs = formData.letterBody
      .split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 0);

    const updatedConfig = {
      ...config,
      recipientName: formData.recipientName.trim() || 'you',
      senderName: formData.senderName.trim() || 'Someone who is trying to do better',
      senderSignature: formData.senderSignature.trim() || 'With sincerity,\nSomeone who is trying to do better.',
      senderPhone: formData.senderPhone.trim(),
      showMemories: formData.showMemories,
      letter: {
        ...config.letter,
        paragraphs: paragraphs.length > 0 ? paragraphs : config.letter.paragraphs,
        postscript: formData.postscript.trim()
      }
    };

    onSaveConfig(updatedConfig);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="drawer-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Personalization Drawer">
      <div className="drawer-panel glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title-group">
            <Sliders size={20} color="#873D60" />
            <h3 className="serif-title drawer-title">Personalize This Digital Gift</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close drawer">
            <X size={20} />
          </button>
        </div>

        <p className="drawer-intro">
          Customize this website before sharing it with her. All changes save to your browser's local memory.
        </p>

        <form onSubmit={handleSave} className="drawer-form">
          {/* Recipient Name */}
          <div className="form-group">
            <label className="form-label">
              <User size={15} />
              <span>Her Name / Nickname</span>
            </label>
            <input 
              type="text"
              className="form-input"
              placeholder="e.g. Maya, Emma, or 'you'"
              value={formData.recipientName}
              onChange={(e) => handleChange('recipientName', e.target.value)}
            />
            <span className="form-hint">Replaces 'you' in salutations and personal headings.</span>
          </div>

          {/* Sender Name / Signature */}
          <div className="form-group">
            <label className="form-label">
              <Heart size={15} />
              <span>Your Name or Signature</span>
            </label>
            <input 
              type="text"
              className="form-input"
              placeholder="e.g. Alex"
              value={formData.senderName}
              onChange={(e) => handleChange('senderName', e.target.value)}
            />
          </div>

          {/* WhatsApp Phone Number */}
          <div className="form-group">
            <label className="form-label">
              <Phone size={15} />
              <span>Your WhatsApp Phone Number (Optional)</span>
            </label>
            <input 
              type="tel"
              className="form-input"
              placeholder="e.g. 15551234567 (with country code)"
              value={formData.senderPhone}
              onChange={(e) => handleChange('senderPhone', e.target.value)}
            />
            <span className="form-hint">
              If left blank, the final button lets her copy a gentle message instead. No automatic messages are ever sent.
            </span>
          </div>

          {/* Show/Hide Memories Toggle */}
          <div className="form-group-toggle">
            <label className="toggle-label" htmlFor="memories-toggle">
              <div>
                <span className="toggle-title">Include Chapter 3 (Memories Scrapbook)</span>
                <span className="toggle-sub">Turn off if revisiting old moments might feel uncomfortable.</span>
              </div>
              <input 
                id="memories-toggle"
                type="checkbox"
                checked={formData.showMemories}
                onChange={(e) => handleChange('showMemories', e.target.checked)}
              />
            </label>
          </div>

          {/* Edit Letter */}
          <div className="form-group">
            <label className="form-label">
              <FileText size={15} />
              <span>The Letter Text (Separate paragraphs with double newlines)</span>
            </label>
            <textarea 
              className="form-textarea"
              rows={8}
              value={formData.letterBody}
              onChange={(e) => handleChange('letterBody', e.target.value)}
            />
          </div>

          {/* Postscript */}
          <div className="form-group">
            <label className="form-label">
              <span>Handwritten P.S. Note</span>
            </label>
            <input 
              type="text"
              className="form-input"
              value={formData.postscript}
              onChange={(e) => handleChange('postscript', e.target.value)}
            />
          </div>

          {/* Action buttons */}
          <div className="drawer-actions">
            <button 
              type="submit" 
              className="btn-primary"
              style={{ flex: 1 }}
            >
              {savedSuccess ? (
                <>
                  <Check size={18} />
                  <span>Saved! ✨</span>
                </>
              ) : (
                <>
                  <Check size={18} />
                  <span>Save Changes</span>
                </>
              )}
            </button>

            <button 
              type="button" 
              className="btn-secondary"
              onClick={() => {
                if (window.confirm("Reset all customizations back to default values?")) {
                  onResetConfig();
                  onClose();
                }
              }}
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

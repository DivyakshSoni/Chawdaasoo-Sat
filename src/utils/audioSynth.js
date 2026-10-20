// Romantic Lofi Celeste & Ambient Chime Synthesizer using Web Audio API
// Soft, dreamy, soothing tones in C Major / F Major pentatonic

class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.step = 0;
    this.masterGain = null;
    this.filter = null;
    this.customAudio = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return false;
      this.ctx = new AudioCtx();

      // Master lowpass filter for warm, dreamy "lo-fi tape" quality
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      // Master gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return true;
  }

  // Frequencies for a romantic, gentle lullaby arpeggio
  // Notes: F3, C4, E4, G4, A4, C5, D5, E5, G5
  getPattern() {
    return [
      { note: 261.63, dur: 1.8, type: 'sine' }, // C4
      { note: 329.63, dur: 1.6, type: 'triangle' }, // E4
      { note: 392.00, dur: 2.0, type: 'sine' }, // G4
      { note: 523.25, dur: 2.2, type: 'triangle' }, // C5
      { note: 440.00, dur: 1.9, type: 'sine' }, // A4
      { note: 392.00, dur: 1.6, type: 'sine' }, // G4
      { note: 349.23, dur: 2.2, type: 'triangle' }, // F4
      { note: 329.63, dur: 2.0, type: 'sine' }, // E4
      { note: 293.66, dur: 1.8, type: 'triangle' }, // D4
      { note: 261.63, dur: 2.8, type: 'sine' }, // C4
      { note: 392.00, dur: 2.0, type: 'triangle' }, // G4
      { note: 587.33, dur: 2.4, type: 'sine' }, // D5
      { note: 523.25, dur: 3.0, type: 'sine' }, // C5
      { note: 440.00, dur: 2.2, type: 'triangle' }, // A4
      { note: 349.23, dur: 2.4, type: 'sine' }, // F4
      { note: 261.63, dur: 3.2, type: 'sine' } // C4
    ];
  }

  playChime(freq, duration = 2.0, waveType = 'sine') {
    if (!this.ctx || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = waveType;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Subtle romantic vibrato
    const vibrato = this.ctx.createOscillator();
    const vibGain = this.ctx.createGain();
    vibrato.frequency.value = 4.5;
    vibGain.gain.value = 2.0;
    vibrato.connect(osc.frequency);
    vibrato.start();

    // Gentle soft attack and exponential decay like a music box or velvet piano
    const now = this.ctx.currentTime;
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.22, now + 0.12);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(noteGain);
    noteGain.connect(this.filter);

    osc.start(now);
    osc.stop(now + duration);
    vibrato.stop(now + duration);
  }

  startSequence() {
    const pattern = this.getPattern();
    const interval = 850; // ms between notes

    const tick = () => {
      if (!this.isPlaying) return;
      const item = pattern[this.step % pattern.length];
      this.playChime(item.note, item.dur, item.type);

      // Play soft bass harmony on downbeats
      if (this.step % 4 === 0) {
        this.playChime(item.note / 2, 2.5, 'sine');
      }

      this.step++;
      this.timer = setTimeout(tick, interval);
    };

    tick();
  }

  play(customUrl = null) {
    if (customUrl) {
      if (!this.customAudio) {
        this.customAudio = new Audio(customUrl);
        this.customAudio.loop = true;
      }
      this.customAudio.play().catch(e => console.log('Audio playback prevented:', e));
      this.isPlaying = true;
      return;
    }

    if (!this.init()) return;
    this.isPlaying = true;
    this.startSequence();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.customAudio) {
      this.customAudio.pause();
    }
  }

  toggle(customUrl = null) {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play(customUrl);
      return true;
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();

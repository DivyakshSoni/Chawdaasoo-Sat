import React, { useState, useEffect } from 'react';
import './App.css';
import { DEFAULT_CONFIG } from './data/config';
import { romanticAudio } from './utils/audioSynth';
import FloatingPetalsCanvas from './components/FloatingPetalsCanvas';
import HeaderNav from './components/HeaderNav';
import WelcomeChapter from './components/WelcomeChapter';
import LetterChapter from './components/LetterChapter';
import MemoryGallery from './components/MemoryGallery';
import FlowerGarden from './components/FlowerGarden';
import GrowthCards from './components/GrowthCards';
import MiniQuiz from './components/MiniQuiz';
import FinalQuestion from './components/FinalQuestion';
import SecretNoteModal from './components/SecretNoteModal';
import PersonalizeDrawer from './components/PersonalizeDrawer';

const LOCAL_STORAGE_KEY = 'if_i_could_write_us_again_config_v3';

export default function App() {
  // Load saved personalization config from localStorage if available
  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_CONFIG,
          ...parsed,
          recipientName: (!parsed.recipientName || parsed.recipientName === 'you') ? "Mahi Ma'am" : parsed.recipientName,
          memories: {
            ...DEFAULT_CONFIG.memories,
            ...(parsed.memories || {})
          },
          finalQuestion: {
            ...DEFAULT_CONFIG.finalQuestion,
            ...(parsed.finalQuestion || {})
          }
        };
      }
    } catch (e) {
      console.log('Error reading localStorage:', e);
    }
    return DEFAULT_CONFIG;
  });

  const [currentChapter, setCurrentChapter] = useState(1);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [isMemoriesHidden, setIsMemoriesHidden] = useState(false);

  // Detect user's system motion preferences
  const [reducedMotion, setReducedMotion] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const totalChapters = 7;

  // Toggle ambient music (No autoplay)
  const handleToggleMusic = () => {
    const playing = romanticAudio.toggle();
    setIsMusicPlaying(playing);
  };

  // Chapter navigation with automatic smooth scroll to top
  const handleSelectChapter = (chapterNum) => {
    setCurrentChapter(chapterNum);
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const handleNextChapter = (nextNum) => {
    handleSelectChapter(nextNum);
  };

  const handleRestart = () => {
    handleSelectChapter(1);
  };

  const handleSaveConfig = (newConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.log('Error saving to localStorage:', e);
    }
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.log('Error clearing localStorage:', e);
    }
  };

  return (
    <div className={`app-viewport ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* Drifting Petals Canvas with interactive touch hearts */}
      <FloatingPetalsCanvas reducedMotion={reducedMotion} />

      {/* Sticky Header with Progress, Music & Navigation */}
      <HeaderNav
        currentChapter={currentChapter}
        totalChapters={totalChapters}
        onSelectChapter={handleSelectChapter}
        onRestart={handleRestart}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        onOpenSettings={() => setShowSettings(true)}
        onOpenSecret={() => setShowSecret(true)}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={() => setReducedMotion(!reducedMotion)}
      />

      {/* Main Chapter Content Container */}
      <main className="main-content" id="main-content">
        {currentChapter === 1 && (
          <WelcomeChapter 
            config={config} 
            onNextChapter={() => handleNextChapter(2)} 
          />
        )}

        {currentChapter === 2 && (
          <LetterChapter 
            config={config} 
            onNextChapter={() => {
              // If memories are explicitly disabled or hidden, advance straight to chapter 4
              const next = (config.showMemories && !isMemoriesHidden) ? 3 : 4;
              handleNextChapter(next);
            }} 
          />
        )}

        {currentChapter === 3 && (
          <MemoryGallery 
            config={config} 
            onNextChapter={() => handleNextChapter(4)} 
            isHidden={isMemoriesHidden}
            onToggleHide={() => setIsMemoriesHidden(!isMemoriesHidden)}
          />
        )}

        {currentChapter === 4 && (
          <FlowerGarden 
            config={config} 
            onNextChapter={() => handleNextChapter(5)} 
          />
        )}

        {currentChapter === 5 && (
          <GrowthCards 
            config={config} 
            onNextChapter={() => handleNextChapter(6)} 
          />
        )}

        {currentChapter === 6 && (
          <MiniQuiz 
            config={config} 
            onNextChapter={() => handleNextChapter(7)} 
          />
        )}

        {currentChapter === 7 && (
          <FinalQuestion 
            config={config} 
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* Secret Note Modal (Easter Egg) */}
      {showSecret && (
        <SecretNoteModal 
          config={config} 
          onClose={() => setShowSecret(false)} 
        />
      )}

      {/* Personalization Drawer for Sender */}
      {showSettings && (
        <PersonalizeDrawer
          config={config}
          onSaveConfig={handleSaveConfig}
          onResetConfig={handleResetConfig}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

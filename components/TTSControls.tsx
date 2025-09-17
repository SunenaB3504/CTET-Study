import React, { useState, useEffect, useRef } from 'react';
import { SpeakerWaveIcon, StopIcon } from '@heroicons/react/24/solid';

interface TTSControlsProps {
  textToSpeak: string;
}

const TTSControls: React.FC<TTSControlsProps> = ({ textToSpeak }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  const intervalRef = useRef<number | null>(null);

  const stopSpeech = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (synth.speaking) {
      synth.cancel();
    }
    setIsSpeaking(false);
  };

  const handleToggleSpeech = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      if (synth.speaking) {
        synth.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      utterance.onend = () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsSpeaking(false);
      };

      utterance.onerror = event => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsSpeaking(false);
        console.error('Speech synthesis error:', event.error);
      };

      synth.speak(utterance);
      setIsSpeaking(true);

      // Workaround for long texts in some browsers (e.g., Chrome)
      intervalRef.current = window.setInterval(() => {
        if (synth.speaking) {
          synth.pause();
          synth.resume();
        } else if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }, 14000);
    }
  };

  useEffect(() => {
    // Cleanup function to stop speech when component unmounts
    return () => {
      stopSpeech();
    };
  }, [synth]); // Re-run effect if synth object ever changes (unlikely but safe)

  return (
    <div>
      <h4 className="font-semibold text-gray-700 mb-2">Listen to this section</h4>
      <button
        onClick={handleToggleSpeech}
        className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-200"
        aria-label={isSpeaking ? 'Stop text-to-speech' : 'Play text-to-speech'}
        aria-live="polite"
      >
        {isSpeaking ? (
          <>
            <StopIcon className="h-5 w-5 mr-2" />
            Stop Listening
          </>
        ) : (
          <>
            <SpeakerWaveIcon className="h-5 w-5 mr-2" />
            Listen to Notes
          </>
        )}
      </button>
    </div>
  );
};

export default TTSControls;

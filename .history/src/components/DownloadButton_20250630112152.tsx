import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  /** Direct link to the file the browser should download */
  fileLink: string;
  /** Label shown once everything resets (default: “Download”) */
  label?: string;
  /** How many seconds to count down before triggering the download */
  countdown?: number;
  /** Optional Tailwind / custom classes for the button */
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileLink,
  label = 'Download',
  countdown = 5,
  className = 'btn-secondary',
}) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [phase, setPhase] = useState<'idle' | 'counting' | 'downloading' | 'done'>(
    'idle'
  );

  // Tick every second while counting
  useEffect(() => {
    if (phase !== 'counting') return;
    if (timeLeft === 0) {
      // Trigger download
      setPhase('downloading');
      window.location.href = fileLink;
      // Simulate “file downloading…” message for 3 s
      const t = setTimeout(() => setPhase('done'), 3000);
      return () => clearTimeout(t);
    }
    const id = setTimeout(() => setTimeLeft((t) => (t !== null ? t - 1 : null)), 1000);
    return () => clearTimeout(id);
  }, [phase, timeLeft, fileLink]);

  // Handler for the initial click
  const startDownload = () => {
    if (phase === 'idle' || phase === 'done') {
      setTimeLeft(countdown);
      setPhase('counting');
    }
  };

  /** --- Dynamic text shown inside the button --- */
  let content: React.ReactNode;
  if (phase === 'counting') {
    content = (
      <>
        Your download will begin in&nbsp;
        <b>{timeLeft}</b>&nbsp;second{timeLeft !== 1 ? 's' : ''}
      </>
    );
  } else if (phase === 'downloading') {
    content = 'Your file is downloading…';
  } else if (phase === 'done') {
    content = (
      <>
        <Download className="w-4 h-4 mr-2" />
        Download&nbsp;Again
      </>
    );
  } else {
    // idle
    content = (
      <>
        <Download className="w-4 h-4 mr-2" /> {label}
      </>
    );
  }

  return (
    <button
      onClick={startDownload}
      disabled={phase === 'counting' || phase === 'downloading'}
      className={`${className} ${
        phase === 'counting' || phase === 'downloading'
          ? 'cursor-not-allowed opacity-70'
          : ''
      } flex items-center justify-center`}
    >
      {content}
    </button>
  );
};

export default DownloadButton;

// import React, { useState, useEffect } from 'react';
// import { Download } from 'lucide-react';

// interface DownloadButtonProps {
//   /** Direct link to the file the browser should download / open */
//   fileLink: string;
//   /** Label shown when idle (default: “Download”) */
//   label?: string;
//   /** Seconds to count down before the action starts (default: 5) */
//   countdown?: number;
//   /** Extra Tailwind / custom classes */
//   className?: string;
//   /**
//    * `true`  → force a “Save as…” download
//    * `false` → just open the PDF in a new tab
//    * (default: false – matches the requirement “open in external tab”)
//    */
//   forceDownload?: boolean;
// }

// const DownloadButton: React.FC<DownloadButtonProps> = ({
//   fileLink,
//   label = 'Download',
//   countdown = 5,
//   className = 'btn-secondary',
//   forceDownload = false,
// }) => {
//   const [timeLeft, setTimeLeft] = useState<number | null>(null);
//   const [phase, setPhase] = useState<'idle' | 'counting' | 'working' | 'done'>(
//     'idle'
//   );

//   /* ───────────────────────── Countdown ───────────────────────── */
//   useEffect(() => {
//     if (phase !== 'counting') return;

//     if (timeLeft === 0) {
//       setPhase('working');

//       /* Decide what “download” means */
//       if (forceDownload) {
//         /* Create a hidden <a download> to trigger the save‑dialog */
//         const a = document.createElement('a');
//         a.href = fileLink;
//         a.download = fileLink.split('/').pop() || 'file';
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//       } else {
//         /* Open the PDF in a **new** tab */
//         window.open(fileLink, '_blank', 'noopener,noreferrer');
//       }

//       /* Show “working…” for 3 s, then reset to done */
//       const t = setTimeout(() => setPhase('done'), 3_000);
//       return () => clearTimeout(t);
//     }

//     const id = setTimeout(
//       () => setTimeLeft((t) => (t !== null ? t - 1 : null)),
//       1_000
//     );
//     return () => clearTimeout(id);
//   }, [phase, timeLeft, fileLink, forceDownload]);

//   /* ───────────────────────── Click handler ───────────────────── */
//   const begin = () => {
//     if (phase === 'idle' || phase === 'done') {
//       setTimeLeft(countdown);
//       setPhase('counting');
//     }
//   };

//   /* ───────────────────────── Button label ────────────────────── */
//   const renderLabel = () => {
//     switch (phase) {
//       case 'counting':
//         return (
//           <>
//             Starting&nbsp;in&nbsp;<b>{timeLeft}</b>&nbsp;sec
//           </>
//         );
//       case 'working':
//         return 'Working…';
//       case 'done':
//         return (
//           <>
//             <Download className="w-4 h-4 mr-2" />
//             Download&nbsp;Again
//           </>
//         );
//       default:
//         return (
//           <>
//             <Download className="w-4 h-4 mr-2" />
//             {label}
//           </>
//         );
//     }
//   };

//   const disabled = phase === 'counting' || phase === 'working';

//   return (
//     <button
//       onClick={begin}
//       disabled={disabled}
//       className={`${className} ${
//         disabled ? 'cursor-not-allowed opacity-70' : ''
//       } flex items-center justify-center`}
//     >
//       {renderLabel()}
//     </button>
//   );
// };

// export default DownloadButton;
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  fileLink: string;
  label?: string; // like "Prospectus"
  countdown?: number;
  className?: string;
  forceDownload?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileLink,
  label = 'Download',
  countdown = 5,
  className = 'btn-secondary',
  forceDownload = false,
}) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [phase, setPhase] = useState<'idle' | 'counting' | 'working'>('idle');

  useEffect(() => {
    if (phase === 'counting') {
      if (timeLeft === 0) {
        setPhase('working');

        if (forceDownload) {
          const a = document.createElement('a');
          a.href = fileLink;
          a.download = fileLink.split('/').pop() || 'file';
          document.body.appendChild(a);
          a.click();
          a.remove();
        } else {
          window.open(fileLink, '_blank', 'noopener,noreferrer');
        }

        // Reset after delay
        const reset = setTimeout(() => {
          setPhase('idle');
          setTimeLeft(null);
        }, 2000); // Show “Working…” for 2s

        return () => clearTimeout(reset);
      }

      const tick = setTimeout(() => {
        setTimeLeft((t) => (t !== null ? t - 1 : null));
      }, 1000);

      return () => clearTimeout(tick);
    }
  }, [phase, timeLeft, fileLink, forceDownload]);

  const begin = () => {
    if (phase === 'idle') {
      setTimeLeft(countdown);
      setPhase('counting');
    }
  };

  const renderLabel = () => {
    if (phase === 'counting') {
      return (
        <>
          Starting in <b>{timeLeft}</b> sec…
        </>
      );
    }
    if (phase === 'working') {
      return 'Working…';
    }
    return (
      <>
        <Download className="w-4 h-4 mr-2" />
        {label}
      </>
    );
  };

  const disabled = phase === 'counting' || phase === 'working';

  return (
    <button
      onClick={begin}
      disabled={disabled}
      className={`${className} ${
        disabled ? 'cursor-not-allowed opacity-70' : ''
      } flex items-center justify-center`}
    >
      {renderLabel()}
    </button>
  );
};

export default DownloadButton;

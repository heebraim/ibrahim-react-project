// import { useRef, useState } from 'react';
// import { toPng } from 'html-to-image';

// interface ShareCardProps {
//   dilemma: string;
//   feedback: string;
//   choice: string;
// }

// const ShareCard = ({ dilemma, feedback, choice }: ShareCardProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isPreparing, setIsPreparing] = useState(false);

//   const handleDownload = async () => {
//     if (!ref.current) return;
    
//     setIsPreparing(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 300));
      
//       const dataUrl = await toPng(ref.current, {
//         quality: 0.95,
//         pixelRatio: 3,
//         skipFonts: true,
//         cacheBust: true
//       });

//       // Mobile handling
//       if (window.matchMedia("(max-width: 768px)").matches) {
//         // Open image in new tab for mobile users
//         const newWindow = window.open();
//         if (newWindow) {
//           newWindow.document.write(`<img src="${dataUrl}" />`);
//           newWindow.document.close();
//           alert('Press and hold the image to save it!');
//         }
//       } else {
//         // Desktop download
//         const link = document.createElement('a');
//         link.download = 'dilemma-card.png';
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     } catch (error) {
//       console.error('Download failed:', error);
//       alert('Download failed. Please try again!');
//     } finally {
//       setIsPreparing(false);
//     }
//   };

//   return (
//     <div className="space-y-4">
//       <div ref={ref} className="p-6 text-white bg-gray-900 border-2 border-purple-600 rounded-xl">
//         <h2 className="mb-4 text-xl font-bold">🔥 Absurd Choice</h2>
//         <p className="mb-4 text-gray-300">{dilemma}</p>
//         <div className="px-4 py-2 mb-4 rounded-lg bg-purple-600/20">
//           You chose: <span className="font-medium">{choice}</span>
//         </div>
//         <p className="text-yellow-400">{feedback}</p>
//         <div className="mt-4 text-sm text-gray-500">absurd.dilemmas.fun</div>
//       </div>
      
//       <button
//         onClick={handleDownload}
//         onTouchEnd={handleDownload}
//         disabled={isPreparing}
//         className="w-full px-4 py-2 font-medium text-white transition-colors bg-green-600 rounded-lg hover:bg-green-500 disabled:opacity-50"
//       >
//         {isPreparing ? 'Preparing...' : 'Download Card 📸'}
//       </button>
//     </div>
//   );
// };

// export default ShareCard;

// import { useRef, useState } from 'react';
// import { toPng } from 'html-to-image';
// import { useIsMobile } from 'react-use'; // Install react-use: npm install react-use

// interface ShareCardProps {
//   dilemma: string;
//   feedback: string;
//   choice: string;
// }

// const ShareCard = ({ dilemma, feedback, choice }: ShareCardProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isPreparing, setIsPreparing] = useState(false);
//   const [mobilePreview, setMobilePreview] = useState<string | null>(null);
//   const isMobile = useIsMobile();

//   const handleDownload = async () => {
//     if (!ref.current) return;
    
//     setIsPreparing(true);
//     try {
//       const dataUrl = await toPng(ref.current, {
//         quality: 0.95,
//         pixelRatio: 3,
//         skipFonts: true,
//         cacheBust: true
//       });

//       if (isMobile) {
//         // Show preview for mobile users
//         setMobilePreview(dataUrl);
//       } else {
//         // Desktop download
//         const link = document.createElement('a');
//         link.download = 'dilemma-card.png';
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     } catch (error) {
//       console.error('Download failed:', error);
//       alert('Failed to generate image. Please try again!');
//     } finally {
//       setIsPreparing(false);
//     }
//   };

//   const copyToClipboard = async () => {
//     if (!mobilePreview) return;
//     try {
//       const blob = await fetch(mobilePreview).then(r => r.blob());
//       await navigator.clipboard.write([
//         new ClipboardItem({ [blob.type]: blob })
//       ]);
//       alert('Image copied to clipboard!');
//     } catch (error) {
//       console.error('Copy failed:', error);
//       alert('Could not copy image. Please save manually.');
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* Card Preview */}
//       <div ref={ref} className="p-6 text-white bg-gray-900 border-2 border-purple-600 rounded-xl">
//         <h2 className="mb-4 text-xl font-bold">🔥 Absurd Choice</h2>
//         <p className="mb-4 text-gray-300">{dilemma}</p>
//         <div className="px-4 py-2 mb-4 rounded-lg bg-purple-600/20">
//           You chose: <span className="font-medium">{choice}</span>
//         </div>
//         <p className="text-yellow-400">{feedback}</p>
//         <div className="mt-4 text-sm text-gray-500">absurd.dilemmas.fun</div>
//       </div>

//       {/* Mobile Preview Modal */}
//       {mobilePreview && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
//           <div className="p-4 bg-gray-800 rounded-lg max-w-[90vw]">
//             <img 
//               src={mobilePreview} 
//               alt="Generated Card" 
//               className="border-2 border-purple-600 rounded-lg"
//             />
//             <div className="flex gap-2 mt-4">
//               <button
//                 onClick={() => setMobilePreview(null)}
//                 className="flex-1 px-4 py-2 bg-red-600 rounded-lg"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={copyToClipboard}
//                 className="flex-1 px-4 py-2 bg-purple-600 rounded-lg"
//               >
//                 Copy
//               </button>
//             </div>
//             <p className="mt-2 text-sm text-center text-gray-400">
//               Press and hold the image to save it
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Download Button */}
//       <button
//         onClick={handleDownload}
//         disabled={isPreparing}
//         className="w-full px-4 py-2 font-medium text-white transition-colors bg-green-600 rounded-lg hover:bg-green-500 disabled:opacity-50"
//       >
//         {isPreparing ? 'Preparing...' : 'Download Card 📸'}
//       </button>
//     </div>
//   );
// };

// export default ShareCard;



// import { useRef, useState } from 'react';
// import { toPng } from 'html-to-image';

// interface ShareCardProps {
//   dilemma: string;
//   feedback: string;
//   choice: string;
// }

// const ShareCard = ({ dilemma, feedback, choice }: ShareCardProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [isPreparing, setIsPreparing] = useState(false);
//   const [mobilePreview, setMobilePreview] = useState<string | null>(null);

//   const handleDownload = async () => {
//     if (!ref.current) return;
    
//     setIsPreparing(true);
//     try {
//       const dataUrl = await toPng(ref.current, {
//         quality: 0.95,
//         pixelRatio: 3,
//         skipFonts: true,
//         cacheBust: true
//       });

//       // For mobile devices
//       if (window.matchMedia("(max-width: 768px)").matches) {
//         // Mobile handling with direct user interaction
//         const link = document.createElement('a');
//         link.href = dataUrl;
//         link.target = '_blank';
//         link.rel = 'noopener noreferrer';
//         link.click();
//         setMobilePreview(dataUrl);
//       } else {
//         // Desktop handling with direct download
//         const link = document.createElement('a');
//         link.download = 'dilemma-card.png';
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       }
//     } catch (error) {
//       console.error('Download failed:', error);
//       alert('Failed to save image. Please try again!');
//     } finally {
//       setIsPreparing(false);
//     }
//   };

//   return (
//     <div className="space-y-4">
//       {/* Card Preview */}
//       <div ref={ref} className="p-6 text-white bg-gray-900 border-2 border-purple-600 rounded-xl">
//         <h2 className="mb-4 text-xl font-bold">🔥 Absurd Choice</h2>
//         <p className="mb-4 text-gray-300">{dilemma}</p>
//         <div className="px-4 py-2 mb-4 rounded-lg bg-purple-600/20">
//           You chose: <span className="font-medium">{choice}</span>
//         </div>
//         <p className="text-yellow-400">{feedback}</p>
//         <div className="mt-4 text-sm text-gray-500">absurd.dilemmas.fun</div>
//       </div>

//       {/* Mobile Preview Modal */}
//       {mobilePreview && (
//         <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm">
//           <div className="max-w-[90vw] p-4 bg-gray-800 rounded-lg">
//             <img 
//               src={mobilePreview} 
//               alt="Generated Card" 
//               className="border-2 border-purple-600 rounded-lg"
//             />
//             <div className="mt-4 space-y-2">
//               <p className="text-sm text-center text-gray-300">
//                 Press and hold the image to save it
//               </p>
//               <button
//                 onClick={() => setMobilePreview(null)}
//                 className="w-full px-4 py-2 bg-red-600 rounded-lg"
//               >
//                 Close Preview
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Download Button */}
//       <button
//         onClick={handleDownload}
//         onTouchEnd={handleDownload}
//         disabled={isPreparing}
//         className="w-full px-4 py-2 font-medium text-white transition-colors bg-green-600 rounded-lg hover:bg-green-500 disabled:opacity-50"
//       >
//         {isPreparing ? 'Generating...' : 'Download Card 📸'}
//       </button>
//     </div>
//   );
// };

// export default ShareCard;


import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';

interface ShareCardProps {
  dilemma: string;
  feedback: string;
  choice: string;
}

const ShareCard = ({ dilemma, feedback, choice }: ShareCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPreparing, setIsPreparing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);

  const generateImage = async () => {
    if (!ref.current) return;
    
    setIsPreparing(true);
    try {
      const dataUrl = await toPng(ref.current, {
        quality: 0.95,
        pixelRatio: 3,
        skipFonts: true,
        cacheBust: true
      });
      
      setImageData(dataUrl);
      setShowPreview(true);
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Failed to generate image. Please try again!');
    } finally {
      setIsPreparing(false);
    }
  };

  const handleDownload = () => {
    if (!imageData) return;

    const link = document.createElement('a');
    link.download = 'dilemma-card.png';
    link.href = imageData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4">
      {/* Card Preview */}
      <div ref={ref} className="p-6 text-white bg-gray-900 border-2 border-purple-600 rounded-xl">
        <h2 className="mb-4 text-xl font-bold">🔥 Absurd Choice</h2>
        <p className="mb-4 text-gray-300">{dilemma}</p>
        <div className="px-4 py-2 mb-4 rounded-lg bg-purple-600/20">
          You chose: <span className="font-medium">{choice}</span>
        </div>
        <p className="text-yellow-400">{feedback}</p>
        <div className="mt-4 text-sm text-gray-500">absurd.dilemmas.fun</div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateImage}
        disabled={isPreparing}
        className="w-full px-4 py-2 font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-500 disabled:opacity-50"
      >
        {isPreparing ? 'Generating...' : 'Preview & Save'}
      </button>

      {/* Preview Modal */}
      {showPreview && imageData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="p-4 bg-gray-800 rounded-lg max-w-[95vw] mx-4">
            <img 
              src={imageData} 
              alt="Generated Card" 
              className="h-auto max-w-full mb-4 border-2 border-purple-600 rounded-lg"
            />
            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                className="flex-1 px-4 py-2 font-medium text-white bg-green-600 rounded-lg hover:bg-green-500"
              >
                Save Image
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-500"
              >
                Close
              </button>
            </div>
            {window.matchMedia("(max-width: 768px)").matches && (
              <p className="mt-2 text-sm text-center text-gray-300">
                Tap "Save Image" again if download doesn't start
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareCard;
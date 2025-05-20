// import { useState } from 'react';
// import Modal from 'react-modal';
// import CategorySelector from './components/CategorySelector';
// import DilemmaCard from './components/DilemmaCard';
// import FeedbackModal from './components/FeedbackModal';

// type Category = "Gross" | "Sci-Fi" | "Philosophical" | "Random";

// // Predefined dilemmas for each category
// const DILEMMA_DATA = {
//   "Gross": [
//     "Would you rather eat a live cockroach or drink a cup of sweaty sock juice?",
//     "Would you rather have permanent onion breath or smell like rotten eggs?",
//   ],
//   "Sci-Fi": [
//     "Would you rather fight Darth Vader with a lightsaber or the Xenomorph with a flamethrower?",
//     "Would you rather live on the Matrix's blue pill or fight Agent Smith daily?",
//   ],
//   "Philosophical": [
//     "Would you rather know the meaning of life but forget it instantly, or never know but always wonder?",
//     "Would you rather be right all the time but lonely, or wrong often but loved?",
//   ],
//   "Random": [
//     "Would you rather have a pet dragon that breathes glitter or a unicorn that farts rainbows?",
//     "Would you rather speak only in rhymes or communicate via interpretive dance?",
//   ]
// };

// // Predefined feedback explanations
// const FEEDBACK_RESPONSES = {
//   "Gross": {
//     good: ["💩 Bold choice! You'll never need pest control!", "🤢 Your immune system just leveled up!"],
//     bad: ["🚽 Why would anyone pick this?", "🤮 Even flies would avoid you!"]
//   },
//   "Sci-Fi": {
//     good: ["🚀 Future you approves this decision!", "👽 Perfect choice for intergalactic domination!"],
//     bad: ["💥 You'll be space dust in 3...2...1...", "🤖 The robots will remember this..."]
//   },
//   "Philosophical": {
//     good: ["🧠 Deep thinking! Socrates would approve!", "💡 Enlightenment achieved!"],
//     bad: ["🤯 This choice breaks the space-time continuum!", "🌀 You've created a paradox!"]
//   },
//   "Random": {
//     good: ["🎉 Chaos achieved! World gets more interesting!", "🌈 Magical choice!"],
//     bad: ["🤡 Clown college awaits!", "🌀 Reality just glitched!"]
//   }
// };

// Modal.setAppElement('#root');

// function App() {
//   const [category, setCategory] = useState<Category | null>(null);
//   const [dilemma, setDilemma] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedChoice, setSelectedChoice] = useState("");

//   const handleGenerateDilemma = () => {
//     if (!category) return;
//     const dilemmas = DILEMMA_DATA[category];
//     const randomIndex = Math.floor(Math.random() * dilemmas.length);
//     setDilemma(dilemmas[randomIndex]);
//   };

//   const handleChoice = (choice: "Option A" | "Option B") => {
//     if (!category) return;
    
//     // Randomly pick good/bad feedback
//     const isGood = Math.random() > 0.5;
//     const responses = isGood 
//       ? FEEDBACK_RESPONSES[category].good
//       : FEEDBACK_RESPONSES[category].bad;

//     const randomFeedback = responses[Math.floor(Math.random() * responses.length)];
//     setFeedback(`${choice}? ${randomFeedback}`);
//     setSelectedChoice(choice);
//     setShowModal(true);
//   };

//   return (
//     <div className="min-h-screen p-8 text-white bg-gray-900">
//       <h1 className="mb-12 text-4xl font-bold text-center">🤔 Absurd Dilemma Generator</h1>

//       {!category ? (
//         <CategorySelector onSelect={setCategory} />
//       ) : (
//         <div className="max-w-2xl mx-auto">
//           <button
//             onClick={handleGenerateDilemma}
//             className="w-full px-6 py-3 mb-8 font-medium transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
//           >
//             Generate New Dilemma
//           </button>

//           {dilemma && (
//             <DilemmaCard
//               dilemma={dilemma}
//               onChoice={handleChoice}
//             />
//           )}
//         </div>
//       )}

//       <FeedbackModal
//         isOpen={showModal}
//         onClose={() => setShowModal(false)}
//         feedback={feedback}
//         dilemma={dilemma}
//         choice={selectedChoice}
//       />
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import Modal from 'react-modal';
import CategorySelector from './components/CategorySelector';
import DilemmaCard from './components/DilemmaCard';
import FeedbackModal from './components/FeedbackModal';
import { DILEMMAS, EXPLANATIONS, Category } from './data';

Modal.setAppElement('#root');

function App() {
  const [category, setCategory] = useState<Category | null>(null);
  const [dilemma, setDilemma] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState("");

  const getRandomItem = (arr: string[]) => 
    arr[Math.floor(Math.random() * arr.length)];

  const handleGenerateDilemma = () => {
    if (!category) return;
    setDilemma(getRandomItem(DILEMMAS[category]));
  };

  const handleChoice = (choice: "Option A" | "Option B") => {
    if (!category) return;
    setFeedback(getRandomItem(EXPLANATIONS[category]));
    setSelectedChoice(choice);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">

             <h1 className="mb-12 text-4xl font-bold text-center">🤔 Absurd Dilemma Generator</h1>

      {!category ? (
        <CategorySelector onSelect={setCategory} />
      ) : (
        <div className="max-w-2xl mx-auto">
          <button
            onClick={handleGenerateDilemma}
            className="w-full px-6 py-3 mb-8 font-medium transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Generate New Dilemma
          </button>

          {dilemma && (
            <DilemmaCard
              dilemma={dilemma}
              onChoice={handleChoice}
            />
          )}
        </div>
      )}

      <FeedbackModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        feedback={feedback}
        dilemma={dilemma}
        choice={selectedChoice}
      />
      
      
    </div>

    

    
  );
}

export default App;
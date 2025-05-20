


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

   const [isLoading, setIsLoading] = useState(false);

  const getRandomItem = (arr: string[]) => 
    arr[Math.floor(Math.random() * arr.length)];

  // const handleGenerateDilemma = () => {
  //   if (!category) return;
  //   setDilemma(getRandomItem(DILEMMAS[category]));
  // };

    const handleGenerateDilemma = () => {
    if (!category) return;
    setIsLoading(true);
    setTimeout(() => {
      setDilemma(getRandomItem(DILEMMAS[category]));
      setIsLoading(false);
    }, 500); // Simulate loading delay
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
              isLoading={isLoading}
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
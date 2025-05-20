// FeedbackModal.tsx
import Modal from 'react-modal';
import ShareCard from './ShareCard'; // Remove curly braces

type FeedbackModalProps = {
  isOpen: boolean;
  onClose: () => void;
  feedback: string;
  dilemma: string;
  choice: string;
};

const FeedbackModal = ({ isOpen, onClose, feedback, dilemma, choice }: FeedbackModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="max-w-md p-8 mx-auto mt-20 bg-gray-800 rounded-xl"
      overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm"
    >
      <div className="space-y-6 text-white">
        <h3 className="text-2xl font-bold text-purple-400">💀 Brutal Verdict</h3>
        <p className="text-lg">{feedback}</p>
        <ShareCard dilemma={dilemma} choice={choice} feedback={feedback} />
        <button
          onClick={onClose}
          className="w-full px-4 py-2 transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default FeedbackModal;
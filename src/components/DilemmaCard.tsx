type DilemmaCardProps = {
  dilemma: string;
  isLoading: boolean;
  onChoice: (choice: string) => void;
};

function DilemmaCard({ dilemma, isLoading, onChoice }: DilemmaCardProps) {
  return (
    <div className="p-6 mb-6 space-y-6 bg-gray-800 rounded-xl">
      <h2 className="text-xl text-center text-gray-100">{dilemma}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onChoice("Option A")}
          disabled={isLoading}
          className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Option A
        </button>
        <button
          onClick={() => onChoice("Option B")}
          disabled={isLoading}
          className="px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50"
        >
          Option B
        </button>
      </div>
    </div>
  );
}

export default DilemmaCard;
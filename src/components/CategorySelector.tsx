// type Category = "Gross" | "Sci-Fi" | "Philosophical" | "Random";

// type Props = {
//   onSelect: (category: Category) => void;
// };

// const categories: Category[] = ["Gross", "Sci-Fi", "Philosophical", "Random"];

//  function CategorySelector({ onSelect }: Props) {
//   return (
//     <div className="grid max-w-md grid-cols-2 gap-4 mx-auto">
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => onSelect(category)}
//           className="p-4 text-lg font-medium transition-colors bg-gray-800 hover:bg-gray-700 rounded-xl"
//         >
//           {category} 🔥
//         </button>
//       ))}
//     </div>
//   );
// }


// export default CategorySelector;

// components/CategorySelector.tsx
type Category = "Gross" | "Sci-Fi" | "Philosophical" | "Random" | "Fantasy" |
  "Technology" | "Sports" | "Motherhood" | "Lifestyle" | "Music" |
  "Movies" | "Decision" | "Intimacy" | "Relationship" | "Marriage";

const categories: Category[] = [
  "Gross", "Sci-Fi", "Philosophical", "Random", "Fantasy",
  "Technology", "Sports", "Motherhood", "Lifestyle", "Music",
  "Movies", "Decision", "Intimacy", "Relationship", "Marriage"
];

const CATEGORY_EMOJIS: Record<Category, string> = {
  "Gross": "🤢",
  "Sci-Fi": "🚀",
  "Philosophical": "🤔",
  "Random": "🎲",
  "Fantasy": "🐉",
  "Technology": "💻",
  "Sports": "🏈",
  "Motherhood": "👶",
  "Lifestyle": "👠",
  "Music": "🎵",
  "Movies": "🎬",
  "Decision": "⚖️",
  "Intimacy": "💋",
  "Relationship": "💑",
  "Marriage": "💍"
};

function CategorySelector({ onSelect }: Props) {
  return (
    <div className="grid max-w-4xl grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-3 lg:grid-cols-5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className="p-3 text-sm md:text-base font-medium transition-colors bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center gap-2 min-h-[80px]"
        >
          <span className="text-2xl">{CATEGORY_EMOJIS[category]}</span>
          {category}
        </button>
      ))}
    </div>
  );
}


export default CategorySelector;
import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import { IoMdArrowRoundBack } from "react-icons/io";

// 1. Add setActiveSub to props
export default function ProductModal({ isOpen, onClose, setActiveSub }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  const categoryNames = Object.keys(categories);

  // 2. Create a handler to set the category and close the modal
  const handleItemClick = (label) => {
    if (setActiveSub) {
      setActiveSub(label); // Updates the "Showing: English Willow" section
    }
    onClose(); // Closes the modal so the user sees the filtered results
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 bg-black/80">
      {/* ... CLOSE BUTTON (No change) ... */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-white bg-pink-600 hover:bg-pink-500 px-5 py-2 rounded-full shadow-lg font-bold transition-all hover:scale-110 z-50"
      >
        Close ✕
      </button>

      <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-linear-to-br from-purple-900 via-black to-pink-900 border border-white/10 shadow-[0_0_80px_rgba(236,72,153,0.3)] flex items-center justify-center overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* ORBITING BUTTONS (Existing functionality untouched) */}
        {!selectedCat && (
          <div className="relative w-full h-full">
            {categoryNames.map((cat, i) => {
              const angle = (i / categoryNames.length) * 2 * Math.PI;
              const radius = screenWidth < 768 ? 110 : 200;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className="absolute w-24 h-24 md:w-28 md:h-28 bg-linear-to-br from-[#1a1a1a] to-purple-900/40 rounded-full text-white font-bold text-xs md:text-sm border border-pink-500/30 shadow-lg hover:scale-125 hover:border-pink-500 transition-all duration-300 flex items-center justify-center text-center p-2"
                  style={{
                    left: `calc(50% + ${x}px - 50px)`,
                    top: `calc(50% + ${y}px - 50px)`,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* INNER CONTENT WHEN CATEGORY SELECTED */}
        {selectedCat && (
          <div className="flex flex-col items-center w-[85%] h-[70%] text-white">
            <h2 className="text-2xl md:text-3xl font-black mb-2 bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {selectedCat}
            </h2>

            <button
              onClick={() => setSelectedCat(null)}
              className="text-pink-400 hover:text-white mb-6 flex items-center gap-2 transition-all"
            >
              <IoMdArrowRoundBack /> Back
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full overflow-y-auto pr-2">
              {categories[selectedCat].items.map(([id, label]) => (
                <button
                  key={id}
                  // 3. Update onClick to use our new handler
                  onClick={() => handleItemClick(label)}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500 transition-all text-sm font-semibold"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState, useMemo } from "react";
import { categories } from "../data/categories";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";

export default function ProductModal({ isOpen, onClose, setActiveSub }) {
  const [selectedCat, setSelectedCat] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      // Random starting positions
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      // Large random travel distances to cover the whole circle
      moveX: (Math.random() - 0.5) * 400,
      moveY: (Math.random() - 0.5) * 400,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -20, // Negative delay so they are already moving
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  const categoryNames = Object.keys(categories);

  const handleItemClick = (label) => {
    if (setActiveSub) setActiveSub(label);
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 bg-black/80">
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-white bg-pink-600 hover:bg-pink-500 px-5 py-2 rounded-full shadow-lg font-bold transition-all hover:scale-110 z-50 cursor-pointer"
      >
        Close ✕
      </button>

      {/* MAIN CIRCLE */}
      <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-linear-to-br from-purple-900 via-black to-pink-900 border border-white/10 shadow-[0_0_80px_rgba(236,72,153,0.3)] flex items-center justify-center overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* --- DYNAMIC FLOATING PARTICLES WITH SHADOWS --- */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-gray-500 rounded-full"
              style={{
                width: "12px", // 2mm approx
                height: "12px",
                left: `${p.startX}%`,
                top: `${p.startY}%`,
                // Combined Blur, Glow (box-shadow), and Shadow (drop-shadow)
                filter: "blur(0.3px) drop-shadow(4px 4px 6px rgba(0,0,0,0.8))",
                boxShadow: "0 0 12px rgba(255, 255, 255, 0.9)",
              }}
              animate={{
                // Traveling across the circle
                x: [0, p.moveX, 0],
                y: [0, p.moveY, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [p.scale, p.scale * 1.5, p.scale],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear",
                delay: p.delay,
              }}
            />
          ))}
        </div>

        {/* ORBITING BUTTONS */}
        {!selectedCat && (
          <div className="relative w-full h-full z-10">
            {categoryNames.map((cat, i) => {
              const angle = (i / categoryNames.length) * 2 * Math.PI;
              const radius = screenWidth < 768 ? 110 : 200;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className="absolute w-24 h-24 md:w-28 md:h-28 bg-black/70 backdrop-blur-md rounded-full text-white font-bold text-xs md:text-sm border border-pink-500/40 shadow-xl hover:scale-125 hover:border-pink-500 transition-all duration-300 flex items-center justify-center text-center p-2 cursor-pointer"
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

        {/* CATEGORY ITEMS LIST */}
        {selectedCat && (
          <div className="flex flex-col items-center w-[85%] h-[70%] text-white z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-2 bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {selectedCat}
            </h2>

            <button
              onClick={() => setSelectedCat(null)}
              className="text-pink-400 hover:text-white mb-6 flex items-center gap-2 transition-all cursor-pointer"
            >
              <IoMdArrowRoundBack /> Back
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full overflow-y-auto pr-2 scrollbar-hide">
              {categories[selectedCat].items.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => handleItemClick(label)}
                  className="p-4 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 hover:bg-pink-500/20 hover:border-pink-500 transition-all text-sm font-semibold cursor-pointer"
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

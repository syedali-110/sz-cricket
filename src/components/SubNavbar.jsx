import { motion } from "framer-motion";

export default function SubNavbar({
  categories,
  activeCategory,
  onCategoryClick,
}) {
  // Helper to map display names to URL-friendly slugs
  const getSlug = (name) => {
    const map = {
      "Cricket Bats": "bats",
      "Leather Balls": "leather-balls",
      Protection: "protection",
      Accessories: "accessories",
    };
    return map[name] || name.toLowerCase();
  };

  return (
    <div className="w-full bg-[#003d7a] border-b border-white/10 sticky top-[64px] z-40 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-2 md:gap-8 px-4 py-3 whitespace-nowrap">
        {categories.map((category) => {
          const slug = getSlug(category);
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => onCategoryClick(category, slug)}
              className="relative px-3 py-1 text-sm font-bold uppercase tracking-wider transition-colors outline-none"
            >
              <span
                className={
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }
              >
                {category}
              </span>

              {/* Animated underline like the reference image */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[13px] left-0 right-0 h-1 bg-white"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

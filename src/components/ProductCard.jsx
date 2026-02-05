import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Optional: adding an icon

export default function ProductCard({ product }) {
  const [currentImg, setCurrentImg] = useState(0);

  const images = product.images || [product.image] || [
      "https://via.placeholder.com/400",
    ];

  // --- WHATSAPP LOGIC START ---
  const handleWhatsAppClick = () => {
    const phoneNumber = "8979997715";
    const message =
      `Hi! I'm interested in the *${product.name}*.\n\n` +
      `*Category:* ${product.category}\n` +
      `*Sub-Category:* ${product.subCategory}\n` +
      `Please share more details regarding customization.`;

    // Encode the message to be URL friendly
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };
  // --- WHATSAPP LOGIC END ---

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-pink-500/50">
      <div className="relative aspect-square w-full overflow-hidden bg-[#1a1a1a]">
        <img
          src={images[currentImg]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500"
        />

        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-1 rounded-full bg-black/50 text-white hover:bg-pink-500 transition-colors cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="p-1 rounded-full bg-black/50 text-white hover:bg-pink-500 transition-colors cursor-pointer"
            >
              →
            </button>
          </div>
        )}

        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImg ? "w-4 bg-pink-500" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-4 line-clamp-1">
          {product.name}
        </h3>

        {/* Updated Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-xl transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <FaWhatsapp size={18} />
          Inquire on WhatsApp
        </button>
      </div>
    </div>
  );
}

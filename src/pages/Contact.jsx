export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white px-6 py-12">
      <h1 className="text-4xl mt-10 flex justify-center font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-purple-600">
        Contact SZ Cricket
      </h1>

      <div className="space-y-4  mt-15 text-gray-300">
        <p>📍 Near Nauchandi Police Station, Shastri Nagar, Meerut</p>
        <p>
          📞{" "}
          <a href="tel:9045904083" className="text-pink-400">
            9045904083
          </a>
        </p>
        <p>💬 WhatsApp orders available</p>
      </div>

      <button
        onClick={() =>
          window.open(
            "https://wa.me/919045904083?text=Hello%20SZ%20Cricket%2C%20I%20want%20to%20place%20an%20order",
            "_blank",
          )
        }
        className="mt-8 px-8 py-3 bg-linear-to-r from-pink-500 to-purple-600 rounded-full shadow-lg"
      >
        Order on WhatsApp
      </button>
    </div>
  );
}

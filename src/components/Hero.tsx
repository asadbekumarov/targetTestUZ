import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-motion flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-12 font-[Poppins]">
        <div className="text-center mt-14 pt-10 sm:pt-20">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Bilimingizni sinab ko‘ring!
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Yo‘nalishingizni tanlang, testdan o‘ting va natijangizni bilib
            oling! Ingliz tili, rus tili va dasturlash bo‘yicha bilim
            darajangizni aniqlang.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {/* Ingliz tili */}
          <div
            className="group bg-white shadow-xl rounded-3xl p-8 w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:-translate-y-2 relative overflow-hidden"
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-300 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500 blur-2xl"></div>

            <img
              src="https://play-lh.googleusercontent.com/g4-pW2NoxcVEGSC5ukjGeZEUDz-Vbf1MzSnRo_Dki8ijgaVKdJWKQwyl40rrkiTyZMEA=w240-h480-rw"
              alt="Ingliz Tili"
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover rounded-full mx-auto mb-4 border-4 border-purple-400 group-hover:rotate-[6deg] transition-transform duration-500"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Ingliz Tili
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 transition-colors duration-300">
              Ingliz tili bo‘yicha bilimlaringizni sinab ko‘ring va darajangizni
              aniqlang! Testni boshlash uchun kartani bosing.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTelegram className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>

          {/* Rus tili */}
          <div
            className="group bg-white shadow-xl rounded-3xl p-8 w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:-translate-y-2 relative overflow-hidden"
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-300 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500 blur-2xl"></div>

            <img
              src="https://img.utdstc.com/icon/8f5/f94/8f5f94ffa848df0e48f144414027fe03eb6e6d5ba54490072a5c3ff50bdb6615:200"
              alt="Rus Tili"
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover rounded-full mx-auto mb-4 border-4 border-purple-400 group-hover:rotate-[6deg] transition-transform duration-500"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Rus Tili
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 transition-colors duration-300">
              Rus tili bo‘yicha bilimlaringizni sinab ko‘ring va darajangizni
              aniqlang! Testni boshlash uchun kartani bosing.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTelegram className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>

          {/* Dasturlash */}
          <div
            className="group bg-white shadow-xl rounded-3xl p-8 w-full max-w-sm text-center transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:-translate-y-2 relative overflow-hidden"
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-300 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500 blur-2xl"></div>

            <img
              src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
              alt="Dasturlash"
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-cover rounded-full mx-auto mb-4 border-4 border-purple-400 group-hover:rotate-[6deg] transition-transform duration-500"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Dasturlash
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 transition-colors duration-300">
              Dasturlash bilimlaringizni sinab ko‘ring va darajangizni aniqlang!
              Testni boshlash uchun kartani bosing.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTelegram className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white w-7 h-7 sm:w-8 sm:h-8" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="w-7 h-7 sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

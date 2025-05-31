// import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
// function Hero() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="max-w-[1460px] m-auto m-0 p-0  p-5 font-[Poppins]">
//         <div>
//           <h1 className="text-[2.2rem] font-bold text-[#222] ">
//             Bilimingizni sinab ko‘ring!
//           </h1>
//           <p className="text-[1.1rem] text-[#555] font-normal mb-8">
//             Yo‘nalishingizni tanlang, testdan o‘ting va natijangizni bilib
//             oling! Ingliz tili, rus tili va dasturlash bo‘yicha bilim
//             darajangizni aniqlang.
//           </p>
//         </div>
//         <div className="flex flex-wrap gap-20 mt-36 justify-between">
//           <div className="flex flex-col items-center shadow-lg rounded-3xl p-10 max-w-sm w-[90vw] md:w-[350px] bg-white text-white border border-blue-600 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
//             <img
//               src="https://play-lh.googleusercontent.com/g4-pW2NoxcVEGSC5ukjGeZEUDz-Vbf1MzSnRo_Dki8ijgaVKdJWKQwyl40rrkiTyZMEA=w240-h480-rw"
//               alt="Profile"
//               className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-cover rounded-full mb-4 border-2 border-black"
//             />
//             <div className="text-center">
//               <h2 className="font-sans text-2xl text-black font-semibold mb-2">
//                 Ingliz Tili
//               </h2>
//               <p className="font-sans text-base text-black opacity-50 mb-4">
//                 Ingliz tili bo‘yicha bilimlaringizni sinab ko‘ring va
//                 darajangizni aniqlang! Testni boshlash uchun kartani bosing.
//               </p>
//               <div className="flex gap-8 mt-8 justify-center">
//                 <button className="relative border-1 rounded-full p-0 cursor-pointer">
//                   <FaTelegram className="text-xl w-10 h-10 rounded-full text-blue-500  transition-transform transform hover:scale-110" />
//                 </button>
//                 <button className="relative border-1 rounded-full p-0 cursor-pointer bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]">
//                   <FaInstagram className="text-xl w-10 h-10 rounded-full text-white transition-transform transform hover:scale-110" />
//                 </button>

//                 <button className="relative border-1 rounded-full p-0 cursor-pointer">
//                   <FaYoutube className="text-xl w-10 h-10 text-red-600 rounded-full   transition-transform transform hover:scale-110" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center shadow-lg rounded-3xl p-10 max-w-sm w-[90vw] md:w-[350px] bg-white text-white border border-blue-600 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
//             <img
//               src="https://img.utdstc.com/icon/8f5/f94/8f5f94ffa848df0e48f144414027fe03eb6e6d5ba54490072a5c3ff50bdb6615:200"
//               alt="Profile"
//               className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-cover rounded-full mb-4 border-2 border-black"
//             />
//             <div className="text-center">
//               <h2 className="font-sans text-2xl text-black font-semibold mb-2">
//                 Rus Tili
//               </h2>
//               <p className="font-sans text-base text-black opacity-50 mb-4">
//                 Rus tili bo‘yicha bilimlaringizni sinab ko‘ring va darajangizni
//                 aniqlang! Testni boshlash uchun kartani bosing.
//               </p>
//               <div className="flex gap-8 mt-8 justify-center">
//                 <button className="relative border-1 rounded-full p-0 cursor-pointer">
//                   <FaTelegram className="text-xl w-10 h-10 rounded-full text-blue-500  transition-transform transform hover:scale-110" />
//                 </button>
//                 <button className="relative border-1 rounded-full p-0 cursor-pointer bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]">
//                   <FaInstagram className="text-xl w-10 h-10 rounded-full text-white transition-transform transform hover:scale-110" />
//                 </button>

//                 <button className="relative border-1 rounded-full p-0 cursor-pointer">
//                   <FaYoutube className="text-xl w-10 h-10 text-red-600 rounded-full   transition-transform transform hover:scale-110" />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center shadow-lg rounded-3xl p-10 max-w-sm w-[90vw] md:w-[350px] bg-white text-white border border-blue-600 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
//               alt="Profile"
//               className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-cover rounded-full mb-4 border-2 border-black"
//             />
//             <div className="text-center">
//               <h2 className="font-sans text-2xl text-black font-semibold mb-2">
//                 Dasturlash
//               </h2>
//               <p className="font-sans text-base text-black opacity-50 mb-4">
//                 Dasturlash bilimlaringizni sinab ko‘ring va darajangizni
//                 aniqlang! Testni boshlash uchun kartani bosing.
//               </p>
//               <div className="flex gap-8 mt-8 justify-center">
//                 <button className="relative border-1 rounded-full p-0 cursor-pointer">
//                   <FaTelegram className="text-xl w-10 h-10 rounded-full text-blue-500  transition-transform transform hover:scale-110" />
//                 </button>
//                 <button className="relative border-1 rounded-full p-0 cursor-pointer bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]">
//                   <FaInstagram className="text-xl w-10 h-10 rounded-full text-white transition-transform transform hover:scale-110" />
//                 </button>

//                 <button className="relative border-1 rounded-full p-0 cursor-pointer">
//                   <FaYoutube className="text-xl w-10 h-10 text-red-600 rounded-full   transition-transform transform hover:scale-110" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";

function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-motion flex">
      <div className="max-w-7xl w-full mx-auto px-6 py-12 font-[Poppins]">
        <div className="text-center pt-20">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Bilimingizni sinab ko‘ring!
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90 mb-12">
            Yo‘nalishingizni tanlang, testdan o‘ting va natijangizni bilib
            oling! Ingliz tili, rus tili va dasturlash bo‘yicha bilim
            darajangizni aniqlang.
          </p>
        </div>

        <div className="flex  gap-12 justify-between">
          {/* Ingliz Tili */}
          <div
            className="group bg-white shadow-xl rounded-3xl p-8 w-[90vw] max-w-sm text-center transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:-translate-y-2 relative overflow-hidden"
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            {/* Hoverda nur tarqash effekti */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-300 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500 blur-2xl"></div>

            {/* Rasm */}
            <img
              src="https://play-lh.googleusercontent.com/g4-pW2NoxcVEGSC5ukjGeZEUDz-Vbf1MzSnRo_Dki8ijgaVKdJWKQwyl40rrkiTyZMEA=w240-h480-rw"
              alt="Ingliz tili"
              className="w-[150px]  h-[150px] sm:w-[180px] sm:h-[180px] object-cover rounded-full mx-auto mb-4 border-4 border-purple-400 group-hover:rotate-[6deg] transition-transform duration-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Ingliz Tili
            </h2>
            <p className="text-gray-600 text-base mb-6  transition-colors duration-300">
              Ingliz tili bo‘yicha bilimlaringizni sinab ko‘ring va darajangizni
              aniqlang! Testni boshlash uchun kartani bosing.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTelegram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Rus Tili */}
          <div
            className="group bg-white shadow-xl rounded-3xl p-8 w-[90vw] max-w-sm text-center transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:-translate-y-2 relative overflow-hidden"
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            {/* Hoverda nur tarqash effekti */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-300 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500 blur-2xl"></div>

            {/* Rasm */}
            <img
              src="https://img.utdstc.com/icon/8f5/f94/8f5f94ffa848df0e48f144414027fe03eb6e6d5ba54490072a5c3ff50bdb6615:200"
              alt="Rus tili"
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-cover rounded-full mx-auto mb-4 border-4 border-purple-400 group-hover:rotate-[6deg] transition-transform duration-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Rus Tili
            </h2>
            <p className="text-gray-600 text-base mb-6  transition-colors duration-300">
              Rus tili bo‘yicha bilimlaringizni sinab ko‘ring va darajangizni
              aniqlang! Testni boshlash uchun kartani bosing.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTelegram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Dasturlash */}
          <div
            className="group bg-white shadow-xl rounded-3xl p-8 w-[90vw] max-w-sm text-center transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:-translate-y-2 relative overflow-hidden"
            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
          >
            {/* Hoverda nur tarqash effekti */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-300 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500 blur-2xl"></div>

            {/* Ichki kontent */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
              alt="Dasturlash"
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] object-cover rounded-full mx-auto mb-4 border-4 border-purple-400 group-hover:rotate-[6deg] transition-transform duration-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
              Dasturlash
            </h2>
            <p className="text-gray-600 text-base mb-6 transition-colors duration-300">
              Dasturlash bilimlaringizni sinab ko‘ring va darajangizni aniqlang!
              Testni boshlash uchun kartani bosing.
            </p>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-blue-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTelegram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] p-2 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-white w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-red-600 hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

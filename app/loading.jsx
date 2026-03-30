// "use client";

// import { motion } from "framer-motion";

// export default function Loader() {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
//       {/* Spinning circles */}
//       <motion.div
//         className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
//       ></motion.div>

//       <motion.p
//         className="mt-6 text-purple-700 dark:text-purple-400 font-semibold text-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         Loading...
//       </motion.p>
//     </div>
//   );
// }







"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center 
    bg-white dark:bg-black z-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 
      blur-[120px] rounded-full"></div>

      {/* Animated Ring */}
      <motion.div
        className="w-24 h-24 border-4 border-purple-500/40 border-t-purple-600 
        rounded-full relative"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      />

      {/* Inner Pulse Dot */}
      <motion.div
        className="absolute w-6 h-6 bg-purple-600 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      {/* Loading Text */}
      <motion.p
        className="mt-10 text-lg font-semibold tracking-wide 
        text-purple-700 dark:text-purple-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Egrif Experience...
      </motion.p>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-purple-500 rounded-full"
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
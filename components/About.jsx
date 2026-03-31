// "use client";

// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// export default function About() {
//   const stats = [
//     { number: 50, label: "Projects Completed" },
//     { number: 30, label: "Happy Clients" },
//     { number: 5, label: "Years Experience" },
//   ];

//   const team = [
//     {
//       name: "Ali Khan",
//       role: "Full Stack Dev",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Sara Ahmed",
//       role: "UI/UX Designer",
//       img: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Usman Tariq",
//       role: "SEO Expert",
//       img: "https://randomuser.me/api/portraits/men/65.jpg",
//     },
//   ];

//   return (
//     <section id="about" className="py-32 px-6 max-w-7xl mx-auto">

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center mb-24"
//       >
//         <h2 className="text-5xl md:text-7xl font-bold mb-6">
//           About{" "}
//           <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
//             Egrif
//           </span>
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           We craft high-performance digital experiences that scale businesses globally.
//         </p>
//       </motion.div>

//       {/* Main Section */}
//       <div className="grid md:grid-cols-2 gap-20 items-center">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="space-y-6"
//         >
//           <h3 className="text-3xl font-semibold">
//             We don’t just build apps — we build{" "}
//             <span className="text-purple-600 dark:text-purple-400">
//               digital empires
//             </span>
//           </h3>

//           <p className="text-gray-600 dark:text-gray-300">
//             At Egrif, we merge design, development, and strategy to deliver
//             scalable and user-focused solutions. Every product we build is
//             optimized for performance, conversions, and growth.
//           </p>

//           {/* Stats with animation */}
//           <div className="flex gap-10 pt-6">
//             {stats.map((item, i) => (
//               <div key={i}>
//                 <h4 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
//                   <CountUp end={item.number} duration={2} />+
//                 </h4>
//                 <p className="text-sm text-gray-500">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="relative"
//         >
//           <div className="absolute -z-10 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full"></div>

//           <motion.div
//             whileHover={{ rotate: 2, scale: 1.05 }}
//             className="rounded-2xl overflow-hidden shadow-2xl"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               className="w-full h-[450px] object-cover"
//             />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* TEAM SECTION */}
//       <div className="mt-32 text-center">
//         <h3 className="text-4xl font-bold mb-16">Meet Our Team</h3>

//         <div className="grid md:grid-cols-3 gap-10">
//           {team.map((member, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10, scale: 1.05 }}
//               className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl"
//             >
//               <img
//                 src={member.img}
//                 className="w-24 h-24 rounded-full mx-auto mb-4"
//               />
//               <h4 className="text-xl font-bold">{member.name}</h4>
//               <p className="text-gray-500">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="mt-32 text-center"
//       >
//         <h3 className="text-4xl font-bold mb-6">
//           Let’s Build Something Amazing 🚀
//         </h3>

//         <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-110 transition">
//           Start Your Project
//         </button>
//       </motion.div>

//     </section>
//   );
// }






// "use client";

// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// export default function About() {
//   const stats = [
//     { number: 50, label: "Projects Completed" },
//     { number: 30, label: "Happy Clients" },
//     { number: 5, label: "Years Experience" },
//   ];

//   const team = [
//     {
//       name: "Ali Khan",
//       role: "Full Stack Dev",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Sara Ahmed",
//       role: "UI/UX Designer",
//       img: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Usman Tariq",
//       role: "SEO Expert",
//       img: "https://randomuser.me/api/portraits/men/65.jpg",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       className="py-32 px-6 mx-auto
//       bg-gradient-to-b from-purple-50 via-white to-white
//       dark:from-purple-950 dark:via-black dark:to-black
//       transition-colors duration-500"
//     >

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center mb-24"
//       >
//         <h2 className="text-5xl md:text-7xl font-bold mb-6
//         text-purple-900 dark:text-purple-100">
//           About{" "}
//           <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
//             Egrif
//           </span>
//         </h2>

//         <p className="text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">
//           We craft high-performance digital experiences that scale businesses globally.
//         </p>
//       </motion.div>

//       {/* Main Section */}
//       <div className="grid md:grid-cols-2 gap-20 items-center">

//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="space-y-6"
//         >
//           <h3 className="text-3xl font-semibold text-purple-900 dark:text-purple-100">
//             We don’t just build apps — we build{" "}
//             <span className="text-purple-600 dark:text-purple-400">
//               digital empires
//             </span>
//           </h3>

//           <p className="text-purple-700 dark:text-purple-300">
//             At Egrif, we merge design, development, and strategy to deliver
//             scalable and user-focused solutions.
//           </p>

//           {/* Stats */}
//           <div className="flex gap-10 pt-6">
//             {stats.map((item, i) => (
//               <div key={i}>
//                 <h4 className="text-4xl font-bold text-purple-600 dark:text-purple-400">
//                   <CountUp end={item.number} duration={2} />+
//                 </h4>
//                 <p className="text-sm text-purple-500 dark:text-purple-300">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="relative"
//         >
//           <div className="absolute -z-10 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full"></div>

//           <motion.div
//             whileHover={{ rotate: 2, scale: 1.05 }}
//             className="rounded-2xl overflow-hidden shadow-2xl border border-purple-200 dark:border-purple-800"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//               className="w-full h-[450px] object-cover"
//             />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* TEAM */}
//       <div className="mt-32 text-center">
//         <h3 className="text-4xl font-bold mb-16 text-purple-900 dark:text-purple-100">
//           Meet Our Team
//         </h3>

//         <div className="grid md:grid-cols-3 gap-10">
//           {team.map((member, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10, scale: 1.05 }}
//               className="p-6 rounded-xl 
//               bg-white/70 dark:bg-white/5 backdrop-blur-xl
//               border border-purple-200 dark:border-purple-800
//               shadow-lg hover:shadow-purple-500/20 transition"
//             >
//               <img
//                 src={member.img}
//                 className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-300 dark:border-purple-600"
//               />
//               <h4 className="text-xl font-bold text-purple-900 dark:text-white">
//                 {member.name}
//               </h4>
//               <p className="text-purple-600 dark:text-purple-400">
//                 {member.role}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="mt-32 text-center"
//       >
//         <h3 className="text-4xl font-bold mb-6 text-purple-900 dark:text-purple-100">
//           Let’s Build Something Amazing 🚀
//         </h3>

//         <button className="bg-gradient-to-r from-purple-600 to-purple-400 
//         dark:from-purple-700 dark:to-purple-500
//         text-white px-8 py-4 rounded-full text-lg font-semibold 
//         shadow-lg hover:scale-110 hover:shadow-purple-500/40 transition">
//           Start Your Project
//         </button>
//       </motion.div>

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

export default function About() {
  const stats = [
    { number: 50, label: "Projects Completed" },
    { number: 30, label: "Happy Clients" },
    { number: 5, label: "Years Experience" },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden
      bg-gradient-to-b from-purple-50 via-white to-white
      dark:from-purple-950 dark:via-black dark:to-black
      transition-colors duration-500"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 space-y-6"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight
          text-purple-900 dark:text-purple-100">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Egrif
            </span>
          </h2>

          <p className="text-purple-700 dark:text-purple-300 max-w-2xl mx-auto text-lg">
            We craft high-performance digital experiences that scale businesses globally with cutting-edge technology and design.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </motion.div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100">
              We build{" "}
              <span className="text-purple-600 dark:text-purple-400">
                scalable digital products
              </span>{" "}
              that grow your business 🚀
            </h3>

            <p className="text-purple-800 dark:text-purple-300 leading-relaxed">
              At Egrif, we merge design, development, and strategy to deliver
              high-performance solutions. Our focus is not just building apps —
              but creating digital ecosystems that convert, scale, and dominate.
            </p>

            {/* 🔥 Stats */}
            <div className="flex gap-10 pt-6 flex-wrap">
              {stats.map((item, i) => (
                <div key={i}>
                  <h4 className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">
                    <CountUp end={item.number} duration={2} />+
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-6 px-8 py-4 rounded-2xl font-semibold text-black dark:text-purple-100
            bg-gradient-to-r from-purple-600 to-purple-400
            dark:from-purple-600 dark:to-purple-800
            hover:scale-105 hover:shadow-xl
            transition duration-300">
              Learn More →
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-purple-400/30 blur-3xl rounded-full"></div>

            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/about.jpg"
                alt="About Egrif"
                width={800}
                height={500}
                className="object-cover w-full h-[450px]"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* ===== EXTRA FEATURE STRIP (ULTRA TOUCH) ===== */}
        <div className="mt-32 grid md:grid-cols-3 gap-10">

          {[
            "High Performance Apps ⚡",
            "SEO Optimized Growth 📈",
            "Modern UI/UX Design 🎨",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 rounded-xl text-center
              bg-white/70 dark:bg-white/5 backdrop-blur-xl
              border border-purple-200 dark:border-purple-800
              shadow-lg hover:shadow-purple-500/30
              transition"
            >
              <p className="font-semibold text-purple-900 dark:text-purple-100">
                {item}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
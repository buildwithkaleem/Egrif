// "use client";

// import Image from "next/image";
// import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

// export default function Team() {
//   const team = [
//     {
//       name: "Muhammad Aslam",
//       role: "Founder & CEO",
//       expertise: "Full Stack Development, Business Strategy",
//       image: "/founder.jpg",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Ali Raza",
//       role: "Co-Founder",
//       expertise: "UI/UX Design, Branding & Marketing",
//       image: "/cofounder.jpg",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         github: "#",
//       },
//     },
//   ];

//   return (
//     <section
//       id="team"
//       className="py-24 px-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-black transition-colors duration-500"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100">
//             Meet Our Leadership
//           </h2>
//           <p className="text-purple-700 dark:text-purple-300 mt-4">
//             The minds behind Egrif’s innovation and growth
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="group bg-white/70 dark:bg-purple-900/60 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
//             >
//               {/* Image */}
//               <div className="relative w-40 h-40 mx-auto mb-6">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover rounded-full border-4 border-purple-300 dark:border-purple-700 group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Info */}
//               <div className="text-center space-y-3">
//                 <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">
//                   {member.name}
//                 </h3>

//                 <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
//                   {member.role}
//                 </p>

//                 <p className="text-sm text-purple-800 dark:text-purple-300">
//                   {member.expertise}
//                 </p>
//               </div>

//               {/* Social Icons */}
//               <div className="flex justify-center gap-4 mt-6">
//                 <a
//                   href={member.socials.linkedin}
//                   target="_blank"
//                   className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white hover:scale-110 transition"
//                 >
//                   <FaLinkedinIn size={14} />
//                 </a>

//                 <a
//                   href={member.socials.twitter}
//                   target="_blank"
//                   className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white hover:scale-110 transition"
//                 >
//                   <FaTwitter size={14} />
//                 </a>

//                 <a
//                   href={member.socials.github}
//                   target="_blank"
//                   className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white hover:scale-110 transition"
//                 >
//                   <FaGithub size={14} />
//                 </a>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }













// "use client";

// import Image from "next/image";
// import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

// export default function Team() {
//   const team = [
//     {
//       name: "Muhammad Aslam",
//       role: "Founder & CEO",
//       expertise: "Full Stack Development, Business Strategy",
//       image: "/founder.jpg",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         github: "#",
//       },
//     },
//     {
//       name: "Ali Raza",
//       role: "Co-Founder",
//       expertise: "UI/UX Design, Branding & Marketing",
//       image: "/cofounder.jpg",
//       socials: {
//         linkedin: "#",
//         twitter: "#",
//         github: "#",
//       },
//     },
//   ];

//   return (
//     <section
//       id="team"
//       className="py-24 px-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-black transition-colors duration-500"
//     >
//       <div className="max-w-7xl mx-auto space-y-24">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100">
//             Meet Our Leadership
//           </h2>
//           <p className="text-purple-700 dark:text-purple-300 mt-4">
//             The people behind Egrif’s success
//           </p>
//         </div>

//         {/* Members */}
//         {team.map((member, index) => (
//           <div
//             key={index}
//             className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
//               }`}
//           >
//             {/* Image */}
//             <div className="md:w-1/2 relative">
//               <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Glow effect */}
//               <div className="absolute -z-10 top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-purple-400/20 blur-2xl rounded-full"></div>
//             </div>

//             {/* Content */}
//             <div className="md:w-1/2 space-y-5 text-center md:text-left">
//               <h3 className="text-3xl font-bold text-purple-900 dark:text-purple-100">
//                 {member.name}
//               </h3>

//               <p className="text-purple-600 dark:text-purple-400 font-semibold">
//                 {member.role}
//               </p>

//               <p className="text-purple-800 dark:text-purple-300 leading-relaxed">
//                 {member.expertise}
//               </p>

//               {/* Social Icons */}
//               <div className="flex justify-center md:justify-start gap-4 pt-2">
//                 <a
//                   href={member.socials.linkedin}
//                   target="_blank"
//                   className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white hover:scale-110 transition"
//                 >
//                   <FaLinkedinIn size={14} />
//                 </a>

//                 <a
//                   href={member.socials.twitter}
//                   target="_blank"
//                   className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white hover:scale-110 transition"
//                 >
//                   <FaTwitter size={14} />
//                 </a>

//                 <a
//                   href={member.socials.github}
//                   target="_blank"
//                   className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white hover:scale-110 transition"
//                 >
//                   <FaGithub size={14} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }





// "use client";

// import Image from "next/image";
// import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

// export default function Team() {
//   return (
//     <section className="py-24 px-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-black">

//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-purple-900 dark:text-purple-100">
//             Meet Our Leadership
//           </h2>
//           <p className="text-purple-700 dark:text-purple-300 mt-4">
//             The minds behind Egrif
//           </p>
//         </div>

//         {/* 2 Column Layout */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">

//           {/* Founder (LEFT) */}
//           <div className="flex flex-col md:flex-row gap-6 items-center">

//             {/* Image */}
//             <div className="relative w-40 h-40">
//               <Image
//                 src="/founder.jpg"
//                 alt="Founder"
//                 fill
//                 className="object-cover rounded-xl shadow-lg"
//               />
//             </div>

//             {/* Content */}
//             <div className="space-y-2 text-center md:text-left">
//               <h3 className="text-2xl font-bold text-purple-900 dark:text-white">
//                 Muhammad Aslam
//               </h3>
//               <p className="text-purple-600 dark:text-purple-400 font-semibold">
//                 Founder & CEO
//               </p>
//               <p className="text-sm text-purple-800 dark:text-purple-300">
//                 Full Stack Development, Business Strategy
//               </p>

//               {/* Social */}
//               <div className="flex gap-3 justify-center md:justify-start pt-2">
//                 <FaLinkedinIn />
//                 <FaTwitter />
//                 <FaGithub />
//               </div>
//             </div>
//           </div>

//           {/* Co-Founder (RIGHT) */}
//           <div className="flex flex-col md:flex-row gap-6 items-center md:justify-end">

//             {/* Image */}
//             <div className="relative w-40 h-40">
//               <Image
//                 src="/cofounder.jpg"
//                 alt="Co-Founder"
//                 fill
//                 className="object-cover rounded-xl shadow-lg"
//               />
//             </div>

//             {/* Content */}
//             <div className="space-y-2 text-center md:text-left">
//               <h3 className="text-2xl font-bold text-purple-900 dark:text-white">
//                 Ali Raza
//               </h3>
//               <p className="text-purple-600 dark:text-purple-400 font-semibold">
//                 Co-Founder
//               </p>
//               <p className="text-sm text-purple-800 dark:text-purple-300">
//                 UI/UX Design, Branding & Marketing
//               </p>

//               {/* Social */}
//               <div className="flex gap-3 justify-center md:justify-start pt-2">
//                 <FaLinkedinIn />
//                 <FaTwitter />
//                 <FaGithub />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }





// final code
// "use client";

// import Image from "next/image";
// import { FaLinkedinIn, FaTwitter, FaGithub, FaRedditAlien } from "react-icons/fa";

// export default function Team() {

//   const socialIcons = [FaLinkedinIn, FaTwitter, FaGithub, FaRedditAlien]

//   const teamData = [
//     {
//       name:"Rana Kaleem",
//       role:"Founder & CEO",
//       image:"",
//       des:" Full Stack Developer & Visionary leader building scalable digital platforms."
//     },
//     {
//       name:"Rana Kaleem",
//       role:"Founder & CEO",
//       image:"",
//       des:" Full Stack Developer & Visionary leader building scalable digital platforms."
//     },
//   ]

//   return (
//     <section className="relative py-28 px-6 overflow-hidden 
//     bg-gradient-to-b from-purple-50 via-white to-white 
//     dark:from-purple-950 dark:via-black dark:to-black">

//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-400/20 blur-[120px] rounded-full -z-10"></div>

//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-20 space-y-4">
//           <h2 className="text-5xl font-extrabold tracking-tight 
//           text-purple-900 dark:text-purple-100">
//             Meet Our Leadership
//           </h2>

//           <p className="text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
//             The creative minds and engineers behind Egrif’s innovation and growth
//           </p>

//           <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* Founder */}
//           <div className="group relative flex flex-col md:flex-row gap-8 items-center">

//             {/* Card Glow */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-300/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

//             {/* Card */}
//             <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl 
//             bg-white/60 dark:bg-white/5 backdrop-blur-xl 
//             border border-purple-200 dark:border-purple-800
//             shadow-lg hover:shadow-purple-500/40 transition duration-500">

//               {/* Image */}
//               <div className="relative w-44 h-44 shrink-0">
//                 <Image
//                   src="/founder.jpg"
//                   alt="Founder"
//                   fill
//                   className="object-cover rounded-xl group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="space-y-3 text-center md:text-left">
//                 <h3 className="text-2xl font-bold text-purple-900 dark:text-white">
//                   Muhammad Aslam
//                 </h3>

//                 <p className="text-purple-600 dark:text-purple-400 font-semibold">
//                   Founder & CEO
//                 </p>

//                 <p className="text-sm text-purple-800 dark:text-purple-300 leading-relaxed">
//                   Full Stack Developer & Visionary leader building scalable digital platforms.
//                 </p>

//                 {/* Social */}
//                 <div className="flex gap-3 justify-center md:justify-start pt-2">
//                   {socialIcons.map((Icon, i) => (
//                     <div
//                       key={i}
//                       className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 
//                       text-purple-700 dark:text-white 
//                       hover:scale-110 hover:bg-purple-300 dark:hover:bg-purple-600 
//                       transition"
//                     >
//                       <Icon size={14} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Co-Founder */}
//           <div className="group relative flex flex-col md:flex-row gap-8 items-center md:justify-end">

//             {/* Card Glow */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-300/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

//             {/* Card */}
//             <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl 
//             bg-white/60 dark:bg-white/5 backdrop-blur-xl 
//             border border-purple-200 dark:border-purple-800
//             shadow-lg hover:shadow-purple-500/20 transition duration-500">

//               {/* Image */}
//               <div className="relative w-44 h-44 shrink-0">
//                 <Image
//                   src="/cofounder.jpg"
//                   alt="Co-Founder"
//                   fill
//                   className="object-cover rounded-xl group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="space-y-3 text-center md:text-left">
//                 <h3 className="text-2xl font-bold text-purple-900 dark:text-white">
//                   Ali Raza
//                 </h3>

//                 <p className="text-purple-600 dark:text-purple-400 font-semibold">
//                   Co-Founder
//                 </p>

//                 <p className="text-sm text-purple-800 dark:text-purple-300 leading-relaxed">
//                   UI/UX expert crafting beautiful and conversion-focused digital experiences.
//                 </p>

//                 {/* Social */}
//                 <div className="flex gap-3 justify-center md:justify-start pt-2">
//                   {socialIcons.map((Icon, i) => (
//                     <div
//                       key={i}
//                       className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 
//                       text-purple-700 dark:text-white 
//                       hover:scale-110 hover:bg-purple-300 dark:hover:bg-purple-600 
//                       transition"
//                     >
//                       <Icon size={14} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaGithub, FaRedditAlien } from "react-icons/fa";

export default function Team() {

  const socialIcons = [FaLinkedinIn, FaTwitter, FaGithub, FaRedditAlien];

  const teamData = [
    {
      name: "Muhammad Kaleem",
      role: "Founder & CEO",
      image: "/Rana_Kaleem-Founder&CEO-of-Egrif.png",
      des: "Full Stack Developer & Visionary leader building scalable digital platforms.",
    },
    {
      name: "Abdul Qadeer",
      role: "Co-Founder",
      image: "/abdul-qadeer-co-founder-of-egrif.png",
      // des: "Area of Expertise:",
      des: "WordPress & Laravel Website Developer & UI/UX Designer",
    },
  ];

  return (
    <section className=" relative py-28 px-6 overflow-hidden 
    bg-gradient-to-b from-purple-50 via-white to-white 
    dark:from-purple-950 dark:via-black dark:to-black">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-400/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tight 
          text-purple-900 dark:text-purple-100">
            Meet Our Leadership
          </h2>

          <p className="text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
            The creative minds and engineers behind Egrif’s innovation and growth
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {teamData.map((member, index) => (
            <div
              key={index}
              className={`group relative flex flex-col md:flex-row gap-8 items-center 
              ${index === 1 ? "md:justify-end" : ""}`}
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-300/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Card */}
              <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl 
              bg-white/60 dark:bg-white/5 backdrop-blur-xl 
              border border-purple-200 dark:border-purple-800
              shadow-lg hover:shadow-purple-500/40 transition duration-500">

                {/* Image */}
                <div className="relative w-44 h-64 shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-purple-900 dark:text-white">
                    {member.name}
                  </h3>

                  <p className="text-purple-600 dark:text-purple-400 font-semibold">
                    {member.role}
                  </p>

                  <p className="text-sm text-purple-800 dark:text-purple-300 leading-relaxed">
                    {member.des}
                  </p>

                  {/* Social */}
                  <div className="flex gap-3 justify-center md:justify-start pt-2">
                    {socialIcons.map((Icon, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-full bg-purple-200 dark:bg-purple-700 
                        text-purple-700 dark:text-white 
                        hover:scale-110 hover:bg-purple-300 dark:hover:bg-purple-600 
                        transition"
                      >
                        <Icon size={14} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
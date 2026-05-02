// "use client"

// import Image from "next/image";

// export default function Projects() {
//   const logos = [
//     [
//       { img: "abbeyroad.jpg", url: "https://abbeyroad.com" },
//       { img: "abbeyroad.jpg", url: "https://alibaba.com" },
//       // { img: "abbeyroad.jpg", url: "https://bmw.com" },
//       // { img: "abbeyroad.jpg", url: "https://bytedance.com" },
//     ],
//     [
//       // { img: "abbeyroad.jpg", url: "https://capitalone.com" },
//       // { img: "abbeyroad.jpg", url: "https://dream11.com" },
//       // { img: "abbeyroad.jpg", url: "https://ebay.com" },
//     ],
//     [
//       // { img: "abbeyroad.jpg", url: "https://emaar.com" },
//       // { img: "abbeyroad.jpg", url: "https://grab.com" },
//     ],
//     [
//       { img: "egrif.webp", url: "/" }, // 👈 text logo
//     ],
//     [
//       // { img: "abbeyroad.jpg", url: "https://groupon.com" },
//       // { img: "abbeyroad.jpg", url: "https://toyota.com" },
//     ],
//     [
//       // { img: "abbeyroad.jpg", url: "https://mgm.com" },
//       // { img: "abbeyroad.jpg", url: "https://nubank.com" },
//       // { img: "abbeyroad.jpg", url: "https://nytimes.com" },
//     ],
//     [
//       // { img: "abbeyroad.jpg", url: "https://philips.com" },
//       // { img: "abbeyroad.jpg", url: "https://sonos.com" },
//       // { img: "abbeyroad.jpg", url: "https://squareup.com" },
//       // { img: "abbeyroad.jpg", url: "https://tencent.com" },
//     ],
//   ];

//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-4
//     bg-gradient-to-b from-purple-50 to-white 
//     dark:from-purple-950 dark:to-black">

//       <div className="w-full max-w-6xl mx-auto">

//         {/* 🔥 HEADING */}
//         <div className="text-center mb-16 mt-8">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             Our <span className="text-purple-600 dark:text-purple-400">Projects</span>
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 mt-4">
//             Brands and platforms we’ve worked with
//           </p>
//         </div>

//         <div className="grid grid-cols-3 md:grid-cols-7 gap-8">

//           {logos.map((col, i) => (
//             <div key={i} className="flex flex-col gap-6 items-center">

//               {col.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.url}
//                   target="_blank"   // ✅ new tab
//                   rel="noopener noreferrer" // ✅ security
//                   className="group"
//                 >
//                   {/* TEXT LOGO */}
//                   {item.text ? (
//                     <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">
//                       {item.text}
//                     </span>
//                   ) : (
//                     <Image
//                       src={`/${item.img}`}
//                       alt="logo"
//                       width={120}
//                       height={50}
//                       className={`
//                         object-contain
//                         opacity-60 group-hover:opacity-100
//                         transition duration-300 group-hover:scale-110
//                         ${i === 3 ? "scale-125 opacity-100" : ""}
//                       `}
//                     />
//                   )}
//                 </a>
//               ))}

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }







"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Earnify Blog",
      logo: "/projects/earnify/earnify-blog1.jpg",
      url: "https://earnify.egrif.online/",
    },
    {
      name: "Pocket Money",
      // logo: "/projects/earnify/earnify-blog1.jpg",
      logo: "/projects/pocketmoney/pocketmoney-logo.png",
      url: "https://pocketmoney-final.vercel.app",
    },
    // {
    //   name: "Portfolio",
    //   logo: "/projects/portfolio.png",
    //   url: "https://portfolio.com",
    // },
    // {
    //   name: "Ecommerce",
    //   logo: "/projects/ecommerce.jpg",
    //   url: "https://shop.com",
    // },
    // {
    //   name: "Blog",
    //   logo: "/projects/blog.png",
    //   url: "https://blog.com",
    // },
    // {
    //   name: "Dashboard",
    //   logo: "/projects/dashboard.png",
    //   url: "https://dashboard.com",
    // },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-b 
      from-purple-50 via-white to-white 
      dark:from-purple-950 dark:via-black dark:to-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-purple-900 dark:text-purple-100">
            Our Projects
          </h2>
          <p className="mt-4 text-purple-700 dark:text-purple-300 max-w-xl mx-auto">
            Explore some of the powerful digital products built by Egrif
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">

          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center py-2 rounded-2xl
              bg-white/60 dark:bg-white/5 backdrop-blur-xl
              border border-purple-200 dark:border-purple-800
              shadow-lg hover:shadow-purple-500/30
              transition duration-500 hover:-translate-y-2"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl 
              bg-gradient-to-r from-purple-500/20 to-purple-300/20 
              opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Logo */}
              <div className="relative w-40 h-16">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition duration-300"
                />
             </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
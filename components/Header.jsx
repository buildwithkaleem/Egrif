
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import WhatsAppButton from "./WhatsAppButton";
// import ScrollButton from "./ScrollButton";
// import DarkLight from "./DarkLight";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const menuText = [
//     // { text: "Home", id: "hero" },
//     { text: "About", id: "about" },
//     { text: "Services", id: "services" },
//     { text: "Portfolio", id: "projects" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-50 
//     bg-white/70 dark:bg-purple-950/70 
//     backdrop-blur-2xl 
//     shadow-[0_20px_50px_rgba(53,39,78,0.06)] 
//     transition-colors duration-500">

//       <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">

//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-tighter text-[#35274e] dark:text-[#e0d7ff]">
//           <Link href='/' >
//             Egrif
//           </Link>
//         </div>

//         {/* ===== DESKTOP MENU ===== */}

//         <div className="hidden md:flex items-center gap-12 text-sm font-medium">

//           <Link
//             href="/"
//             className="text-purple-700 dark:text-purple-300 hover:text-purple-500"
//           >
//             Home
//           </Link>

//           {menuText.map((item, index) => (
//             <ScrollButton
//               key={index}
//               targetId={item.id}
//               className="text-purple-700 dark:text-purple-300 hover:text-purple-500"
//             >
//               {item.text}
//             </ScrollButton>
//           ))}

//           <Link
//             href="https://earnify.egrif.online"
//             target="_blank"
//             className="text-purple-700 dark:text-purple-300 hover:text-purple-500"
//           >
//             Blog
//           </Link>
//         </div>

//         {/* ===== RIGHT SIDE ===== */}
//         <div className="flex items-center gap-3">

//           {/* Dark Mode */}
//           <div className="hidden md:block fixed top-4 right-4">
//             <DarkLight />
//           </div>

//           {/* CTA */}
//           <div className="hidden md:block mx-6">
//             <WhatsAppButton
//               phoneNumber="+923144275078"
//               className="px-6 py-2.5 rounded-full text-sm font-semibold text-white
//               bg-gradient-to-r from-purple-600 to-purple-400
//               hover:scale-105 hover:shadow-xl transition duration-300"
//             >
//               Start Your Project 🚀
//             </WhatsAppButton>
//           </div>

//           {/* ===== MOBILE MENU BUTTON ===== */}
//           <div className="flex items-center gap-5" >

//             {/* Mobile Dark Mode */}
//             <div className="md:hidden pt-2">
//               <DarkLight />
//             </div>
//           </div>

//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden p-2 rounded-lg bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-white"
//             >
//               {open ? <FaTimes /> : <FaBars />}
//             </button>


//         </div>
//       </div>

//       {/* ===== MOBILE MENU ===== */}
//       {open && (
//         <div className="md:hidden px-6 pb-6 space-y-4 
//         bg-white dark:bg-purple-950 
//         border-t border-purple-200 dark:border-purple-800">

//           {menuText.map((item, index) => (
//             <div key={index} onClick={() => setOpen(false)} >

//               <Link
//                 href="/"
//                 className="block py-2 text-purple-700 dark:text-purple-300 hover:text-purple-500"

//               >
//                 Home
//               </Link>

//             <ScrollButton
//               targetId={item.id}
//                 className=" block w-full text-left py-2 text-purple-700 dark:text-purple-300 hover:text-purple-500"
//             >
//               {item.text}
//             </ScrollButton>
//             </div>
//           ))}

//           <Link
//             href="https://earnify.egrif.online"
//             target="_blank"
//             className="block py-2 text-purple-700 dark:text-purple-300 hover:text-purple-500"

//           >
//             Blog
//           </Link>



//           {/* Mobile CTA */}
//           <WhatsAppButton
//             phoneNumber="+923144275078"
//             className="w-full text-center px-6 py-3 rounded-full font-semibold text-white
//             bg-gradient-to-r from-purple-600 to-purple-400"
//           >
//             Start Your Project 🚀
//           </WhatsAppButton>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;






"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import ScrollButton from "./ScrollButton";
import DarkLight from "./DarkLight";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const menuText = [
    { text: "Services", id: "services" },
    { text: "About", id: "about" },
    { text: "Portfolio", id: "projects" },
  ];

  // 🔥 SCROLL SPY (auto active change)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "projects"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎯 Common Nav Class
  const navClass = (id) =>
    `relative cursor-pointer 
    ${active === id
      ? "text-purple-600 dark:text-purple-400 after:w-full"
      : "text-purple-700 dark:text-purple-300"} 
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
    after:w-0 after:bg-purple-500 after:transition-all after:duration-300 
    hover:after:w-full`;

  return (
    <nav className="fixed top-0 w-full z-50 
    bg-white/70 dark:bg-purple-950/70 backdrop-blur-2xl 
    shadow-[0_20px_50px_rgba(53,39,78,0.06)] transition-colors duration-500">

      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">

        {/* Logo */}

        <div className="text-2xl font-bold tracking-tighter text-[#35274e] dark:text-[#e0d7ff]">
        <Link href="/">

          {/* Image */}
          {/* <div className="relative  shrink-0">
            <Image
              src={"/egrif.png"}
              alt={'Egrif'}
              width={"120"}
              height={"60"}
              // fill
              className="object-cover rounded-xl group-hover:scale-105 transition duration-500"
            />
          </div> */}
          Egrif
        </Link>
        </div>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden md:flex items-center gap-12 text-sm font-medium">

          {/* <ScrollButton targetId="hero" className={navClass("hero")}> */}
          <a
            href="/"
            className={`${navClass("hero")} relative text-purple-700 dark:text-purple-300 
            hover:text-purple-500 after:absolute after:left-0 after:-bottom-1 
            after:h-[2px] after:w-0 after:bg-purple-500 
            after:transition-all after:duration-300 hover:after:w-full`}
          >
            Home
          </a>
          {/* </ScrollButton> */}

          {/* <Link
            href="/"
            className={`${navClass("hero")} relative text-purple-700 dark:text-purple-300 
            hover:text-purple-500 after:absolute after:left-0 after:-bottom-1 
            after:h-[2px] after:w-0 after:bg-purple-500 
            after:transition-all after:duration-300 hover:after:w-full`}
          >
            Home
          </Link> */}

          {menuText.map((item, index) => (
            <ScrollButton
              key={index}
              targetId={item.id}
              className={`hover:text-purple-500 ${navClass(item.id)}`}
            >
              {item.text}
            </ScrollButton>
          ))}

          <Link
            href="https://earnify.egrif.online"
            target="_blank"
            className="relative text-purple-700 dark:text-purple-300 
            hover:text-purple-500 after:absolute after:left-0 after:-bottom-1 
            after:h-[2px] after:w-0 after:bg-purple-500 
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* <div className="md:hidden pt-2 mb-2">
            <DarkLight />
          </div> */}

          <div className=" md:fixed top-3 right-4">
            <DarkLight />
          </div>



          <div className="hidden md:block mr-8">
            <WhatsAppButton
              phoneNumber="+923144275078"
              className="px-6 py-2.5 rounded-2xl text-sm font-semibold  text-white dark:text-purple-100
              bg-gradient-to-r from-purple-600 to-purple-400
              dark:from-purple-600 dark:to-purple-800
              hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Start Your Project 🚀
            </WhatsAppButton>
          </div>

          {/* Mobile */}




          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-white"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 
        bg-white dark:bg-purple-950 border-t border-purple-200 dark:border-purple-800">



          <div onClick={() => setOpen(false)}>
            <ScrollButton targetId="hero" className={navClass("hero")}>
              {/* <Link
           
            href="/"
            className={` block py-2 text-purple-700 dark:text-purple-300`}
          > */}
              Home
              {/* <Link> */}
            </ScrollButton>

          </div>

          {menuText.map((item, index) => (

            <div key={index} onClick={() => setOpen(false)} >


              <ScrollButton
                // key={index}
                targetId={item.id}
                className={navClass(item.id)}
              >
                {item.text}
              </ScrollButton>
            </div>
          ))}

          <Link
            href="https://earnify.egrif.online"
            target="_blank"
            className="block py-2 text-purple-700 dark:text-purple-300"
          >
            Blog
          </Link>

          {/* </div> */}

          <WhatsAppButton
            phoneNumber="+923144275078"
            className="w-full text-center px-6 py-3 rounded-2xl font-semibold text-white
            bg-gradient-to-r from-purple-600 to-purple-400"
          >
            Start Your Project 🚀
          </WhatsAppButton>
        </div>
      )}
    </nav>
  );
};

export default Header;
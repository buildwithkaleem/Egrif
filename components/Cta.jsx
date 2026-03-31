"use client"

import ScrollButton from "./ScrollButton";
import WhatsAppButton from "./WhatsAppButton";

export default function CTA() {


  // const scrollToProjects = () => {
  //   const element = document.getElementById("projects");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 
        bg-gradient-to-br 
        from-purple-100 via-white to-purple-200
        dark:from-purple-950 dark:via-black dark:to-purple-900
      " />

      {/* GLOW EFFECT */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] 
        bg-purple-400/30 dark:bg-purple-700/30 
        blur-[120px] rounded-full"
      />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-4xl dark:text-purple-100 md:text-5xl font-bold leading-tight mb-6">
          Ready to build your next project with{" "}
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Egrif
          </span>
          ?
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Let’s turn your vision into a scalable, high-performance digital reality.
          Our experts are ready to start.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* PRIMARY BUTTON */}
          
          <WhatsAppButton
            phoneNumber="+923144275078"
            className="px-8 py-3 rounded-2xl font-semibold text-white dark:text-purple-100
            bg-gradient-to-r from-purple-600 to-purple-400
            dark:from-purple-600 dark:to-purple-800
            hover:scale-105 hover:shadow-xl
            transition duration-300"
          >
            Start Your Project 🚀
          </WhatsAppButton>

          {/* SECONDARY BUTTON */}
          {/* <a
            onClick={scrollToProjects}
            href="#projects"
            className="px-8 py-3 rounded-full font-semibold
            border border-purple-500 text-purple-600
            dark:text-purple-300 dark:border-purple-400
            hover:bg-purple-100 dark:hover:bg-purple-800/30
            transition duration-300"
          >
            View Our Work →
          </a> */}

          <ScrollButton
            targetId="projects"
            className=" shadow-lg hover:scale-105 px-8 py-3 rounded-2xl font-semibold
            border border-purple-500 text-purple-600
            dark:text-purple-200 dark:border-purple-400
            hover:bg-purple-100 dark:hover:bg-purple-800/30
            transition duration-300 cursor-pointer"
          >
            View Our Work →
          </ScrollButton>

          {/* <button
            onClick={scrollToProjects} // ✅ call parent scroll fu
            className="px-8 py-3 rounded-full font-semibold
            border border-purple-500 text-purple-600
            dark:text-purple-300 dark:border-purple-400
            hover:bg-purple-100 dark:hover:bg-purple-800/30
            transition duration-300 cursor-pointer"
          >
            View Our Work →
          </button> */}

        </div>
      </div>
    </section>
  );
}
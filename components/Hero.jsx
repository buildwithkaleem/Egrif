// import Image from 'next/image'
// import React from 'react'
// import WhatsAppButton from './WhatsAppButton'

// const Hero = () => {
//   return (
//     <section id='hero' className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

//       {/* Left Content */}
//       <div className="md:w-1/2 space-y-8">

//         <div className="inline-block px-4 py-1.5 rounded-full bg-purple-200 text-purple-800 text-xs font-medium tracking-widest uppercase">
//           Digital Excellence Redefined
//         </div>

//         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
//           We Build Powerful{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5c38e1] to-[#a391ff]">
//             Digital Solutions
//           </span>{" "}
//           for Modern Businesses
//         </h1>

//         <p className="text-lg leading-relaxed max-w-lg">
//           From WordPress to MERN Stack, SEO to UI/UX — Egrif helps you scale online with precision-engineered software.
//         </p>

//         <div className="flex flex-wrap gap-6 pt-4">

//           {/* Button */}
//            <WhatsAppButton
//                       phoneNumber="+923144275078"
//                       className="px-8 pb-3 pt-4 rounded-full font-semibold text-white
//                       bg-gradient-to-r from-purple-600 to-purple-400
//                       hover:scale-105 hover:shadow-xl
//                       transition duration-300"
//                     >
//                       Start Your Project 🚀
//                     </WhatsAppButton>

//           <button className="bg-gray-200 cursor-pointer text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition">
//             View Portfolio
//           </button>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="md:w-1/2 relative">

//         <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>

//         <div className="bg-white/70 backdrop-blur-xl p-4 rounded-xl shadow-2xl overflow-hidden">

//           <Image
//             src="/hero2.jpg"
//             alt="SaaS Dashboard"
//             width={800}
//             height={500}
//             className="rounded-lg object-cover w-full h-auto"
//           />

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero














import Image from 'next/image'
import React from 'react'
import WhatsAppButton from './WhatsAppButton'
import ScrollButton from './ScrollButton'

const Hero = () => {
  return (
    <section
      id='hero'
      className="pt-40 pb-20 px-6 mx-auto flex flex-col md:flex-row items-center gap-16
                 bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 transition-colors duration-500"
    >

      {/* Left Content */}
      <div className="md:w-1/2 space-y-8">

        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs font-medium tracking-widest uppercase">
          Digital Excellence Redefined
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] text-black dark:text-purple-100">
          We Build Powerful{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-600">
            Digital Solutions
          </span>{" "}
          for Modern Businesses
        </h1>

        <p className="text-lg leading-relaxed max-w-lg text-purple-800 dark:text-purple-200">
          From WordPress to MERN Stack, SEO to UI/UX — Egrif helps you scale online with precision-engineered software.
        </p>

        <div className="flex flex-wrap gap-6 pt-4">

          {/* WhatsApp Button */}
          <WhatsAppButton
            phoneNumber="+923144275078"
            className="px-8 pb-3 pt-4 rounded-full font-semibold text-white
                       bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-500 dark:to-purple-700
                       hover:scale-105 hover:shadow-xl transition duration-300"
          >
            Start Your Project 🚀
          </WhatsAppButton>

          {/* Portfolio Button */}
          <ScrollButton
            targetId="projects"
            className="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-purple-100
                             cursor-pointer px-8 py-4 rounded-full font-semibold
                             hover:bg-purple-300 dark:hover:bg-purple-600 transition duration-300"
          >
            View Portfolio
          </ScrollButton>
          {/* <button className="bg-purple-200 dark:bg-purple-700 text-purple-900 dark:text-purple-100
                             cursor-pointer px-8 py-4 rounded-full font-semibold
                             hover:bg-purple-300 dark:hover:bg-purple-600 transition duration-300">
            View Portfolio
          </button> */}
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative">

        {/* Purple blur background */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80
                        bg-purple-400/20 dark:bg-purple-700/30 rounded-full blur-3xl transition-colors duration-500"></div>

        <div className="bg-white/70 dark:bg-purple-900/70 backdrop-blur-xl p-4 rounded-xl shadow-2xl overflow-hidden transition-colors duration-500">

          <Image
            src="/hero2.jpg"
            alt="SaaS Dashboard"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />

        </div>
      </div>
    </section>
  )
}

export default Hero
// export default function Services() {
//   const services = [
//     {
//       icon: "web",
//       title: "WordPress",
//       desc: "High-performance custom themes and enterprise WordPress solutions.",
//     },
//     {
//       icon: "layers",
//       title: "MERN Stack",
//       desc: "Scalable full-stack applications built with Mongo, Express, React, and Node.",
//     },
//     {
//       icon: "search_insights",
//       title: "SEO",
//       desc: "Technical SEO and content strategy to dominate search engine results.",
//     },
//     {
//       icon: "terminal",
//       title: "Python/Django",
//       desc: "Robust backend architecture and data-driven web platforms.",
//     },
//     {
//       icon: "campaign",
//       title: "Social Media",
//       desc: "Strategic growth and community engagement across all platforms.",
//     },
//     {
//       icon: "auto_awesome",
//       title: "UI/UX Design",
//       desc: "Human-centric interfaces that blend aesthetics with seamless functionality.",
//     },
//     {
//       icon: "code_blocks",
//       title: "Frontend",
//       desc: "Clean, responsive, and interactive user experiences with modern CSS.",
//     },
//     {
//       icon: "speed",
//       title: "Next.js",
//       desc: "Lightning-fast React frameworks for optimized performance and SEO.",
//     },
//   ];

//   return (
//     <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
//       <div className="text-center mb-20 space-y-4">
//         <h2 className="font-headline text-4xl font-bold">Our Expertise</h2>
//         <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="border bg-amber-500 dark:bg-black p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300"
//           >
//             <span className="material-symbols-outlined text-primary text-4xl mb-6">
//               {service.icon}
//             </span>
//             <h3 className="font-headline text-xl font-bold mb-3">
//               {service.title}
//             </h3>
//             <p className="text-on-surface-variant text-sm leading-relaxed">
//               {service.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }













export default function Services() {
  const services = [
    {
      icon: "web",
      title: "WordPress",
      desc: "High-performance custom themes and enterprise WordPress solutions.",
    },
    {
      icon: "layers",
      title: "MERN Stack",
      desc: "Scalable full-stack applications built with Mongo, Express, React, and Node.",
    },
    {
      icon: "search_insights",
      title: "SEO",
      desc: "Technical SEO and content strategy to dominate search engine results.",
    },
    {
      icon: "terminal",
      title: "Python/Django",
      desc: "Robust backend architecture and data-driven web platforms.",
    },
    {
      icon: "campaign",
      title: "Social Media",
      desc: "Strategic growth and community engagement across all platforms.",
    },
    {
      icon: "auto_awesome",
      title: "UI/UX Design",
      desc: "Human-centric interfaces that blend aesthetics with seamless functionality.",
    },
    {
      icon: "code_blocks",
      title: "Frontend",
      desc: "Clean, responsive, and interactive user experiences with modern CSS.",
    },
    {
      icon: "speed",
      title: "Next.js",
      desc: "Lightning-fast React frameworks for optimized performance and SEO.",
    },
    {
      icon: "analytics",
      title: "Data Analytics",
      desc: "Transform raw data into actionable insights with advanced analytics, dashboards, and business intelligence solutions.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 mx-auto bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 transition-colors duration-500"
    >
      {/* Section Title */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-headline text-4xl font-bold text-purple-900 dark:text-purple-100">
          Our Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-purple-700 p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
          >
            <span className="material-symbols-outlined text-purple-600 dark:text-purple-100 text-4xl mb-6">
              {service.icon}
            </span>
            <h3 className="font-headline text-xl font-bold mb-3 text-purple-900 dark:text-purple-100">
              {service.title}
            </h3>
            <p className="text-purple-800 dark:text-purple-200 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
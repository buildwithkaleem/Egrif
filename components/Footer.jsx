"use client";

import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub, FaRedditAlien } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";
import ScrollButton from "./ScrollButton";

export default function Footer() {

  const navLinks = [
    { text: "Home", id: "hero" },
    { text: "About", id: "about" },
    { text: "Services", id: "services" },
    { text: "Portfolio", id: "projects" },
  ];

  const socials = [
    { icon: FaLinkedinIn, link: "#" },
    { icon: FaTwitter, link: "#" },
    { icon: FaGithub, link: "#" },
    { icon: FaRedditAlien, link: "#" },
  ];

  const policy= [
    {text:"Privacy",url:"/privacy"},
    { text:"Terms",url:"/terms"}
  ]

  return (
    <footer className="relative pt-24 pb-10 px-6 overflow-hidden
    bg-gradient-to-b from-white to-purple-50
    dark:from-black dark:to-purple-950
    transition-colors duration-500">

      {/* 🔥 Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Logo + About */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100">
              Egrif
            </h2>

            <p className="text-purple-700 dark:text-purple-300 text-sm leading-relaxed">
              We build high-performance digital solutions that help businesses grow, scale, and dominate online.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-3">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    className="p-2 rounded-full bg-purple-200 dark:bg-purple-800 
                    text-purple-700 dark:text-white 
                    hover:scale-110 hover:bg-purple-300 dark:hover:bg-purple-700 transition"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="">
            <h3 className="text-lg font-semibold mb-4 text-purple-900 dark:text-purple-100">
              Navigation
            </h3>

            <div className="flex flex-col gap-3 w-0">
              {navLinks.map((item, i) => (
                <ScrollButton
                  key={i}
                  targetId={item.id}
                  className="text-purple-700 dark:text-purple-300 hover:text-purple-500"
                >
                  {item.text}
                </ScrollButton>
              ))}

              <Link
                href="https://earnify.egrif.online"
                target="_blank"
                className="text-purple-700 dark:text-purple-300 hover:text-purple-500"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100">
              Start a Project 🚀
            </h3>

            <p className="text-purple-700 dark:text-purple-300 text-sm">
              Let’s turn your idea into a scalable digital product.
            </p>

            <WhatsAppButton
              phoneNumber="+923144275078"
              className="inline-block px-6 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-purple-600 to-purple-400
              hover:scale-105 hover:shadow-xl transition duration-300"
            >
              Start Your Project
            </WhatsAppButton>
          </div>

        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="border-t border-purple-200 dark:border-purple-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-purple-700 dark:text-purple-300">
            Copyright © 2025-{new Date().getFullYear()} Egrif Tech Agency. All rights reserved.
          </p>

          <div className="flex gap-6">
            {policy.map((item,i)=>(
              <Link key={i} href={item.url} className="text-purple-700 dark:text-purple-300 hover:text-purple-500">
                {item.text}
              </Link>
            ))}
          
          </div>

        </div>

      </div>
      
    </footer>
  );
}
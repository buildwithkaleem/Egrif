"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp({ phoneNumber = "+923144275078", message = "Hi! I want to contact you." }) {

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex items-center justify-center
                 w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-400
                 shadow-lg hover:scale-110 hover:shadow-2xl transition-transform
                 dark:from-green-700 dark:to-green-600 text-white text-xl"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
"use client";

export default function WhatsAppButton({ phoneNumber, message, className, children }) {
  const encodedMessage = encodeURIComponent(message || "Hi! I want to start a project with Egrif.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block  ${className || "px-6 py-3 bg-green-500 text-white rounded-full hover:scale-105 transition duration-300"}`}
    >
      {children || "Start Your Project 🚀"}
    </a>
  );
}
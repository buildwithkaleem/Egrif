export const metadata = {
  title: "Terms & Conditions | Egrif",
};

export default function Terms() {
  return (
    <section className="min-h-screen py-32 px-6 
    bg-gradient-to-b from-white to-purple-50 
    dark:from-black dark:to-purple-950
    transition-colors duration-500">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 
        text-purple-900 dark:text-purple-100">
          Terms & Conditions
        </h1>

        <p className="text-purple-700 dark:text-purple-300 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* Content */}
        <div className="space-y-8 text-purple-800 dark:text-purple-300 leading-relaxed">

          <p>
            Welcome to Egrif. By accessing and using our website and services, you agree to comply with and be bound by the following Terms & Conditions.
          </p>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              1. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in a way that does not violate any applicable laws or regulations.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              2. Intellectual Property
            </h2>
            <p>
              All content, design, and code on this website are the property of Egrif and may not be copied or reused without permission.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              3. User Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your interactions and ensuring that any information you provide is accurate.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              4. Limitation of Liability
            </h2>
            <p>
              Egrif will not be held liable for any damages arising from the use or inability to use our services.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their content or practices.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              6. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend access to our services without prior notice if terms are violated.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              7. Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions at any time. Continued use of the site means you accept the updated terms.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, feel free to contact us.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
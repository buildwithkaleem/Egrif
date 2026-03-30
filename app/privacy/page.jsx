export const metadata = {
  title: "Privacy Policy | Egrif",
};

export default function Privacy() {
  return (
    <section className="min-h-screen py-32 px-6 
    bg-gradient-to-b from-white to-purple-50 
    dark:from-black dark:to-purple-950
    transition-colors duration-500">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 
        text-purple-900 dark:text-purple-100">
          Privacy Policy
        </h1>

        <p className="text-purple-700 dark:text-purple-300 mb-10">
          Last updated: {new Date().getFullYear()}
        </p>

        {/* Content */}
        <div className="space-y-8 text-purple-800 dark:text-purple-300 leading-relaxed">

          <p>
            At Egrif, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email address, and contact details when you interact with our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used to improve our services, respond to inquiries, and provide better user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              3. Cookies
            </h2>
            <p>
              We may use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              4. Data Protection
            </h2>
            <p>
              We take appropriate measures to protect your data from unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party services that collect, monitor, and analyze user data to improve functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-900 dark:text-purple-100">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
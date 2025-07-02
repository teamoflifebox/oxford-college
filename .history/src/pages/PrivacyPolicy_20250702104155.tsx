import React from "react";
import NavBar from "../components/NavBar";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-slate-700">
        <h1 className="text-3xl font-bold mb-6 text-primary-600">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At <strong>Oxford College</strong>, we are committed to protecting
          your privacy and ensuring transparency in how we collect, use, and
          safeguard your information. This Privacy Policy explains what data we
          collect, why we collect it, and how you can exercise your rights.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you voluntarily provide to us,
          including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name, email address, phone number, and postal address</li>
          <li>Details submitted via our online forms (e.g., inquiries, registrations)</li>
          <li>Login credentials if you create an account</li>
          <li>Usage data (such as pages visited, download actions)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We may use your information to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide academic services and support</li>
          <li>Send important updates, newsletters, or marketing communications (with your consent)</li>
          <li>Respond to your inquiries and requests</li>
          <li>Improve our website and user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell your personal data. We may share information with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service providers who help us operate the website and deliver services</li>
          <li>Law enforcement or regulatory authorities if required by law</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your browsing
          experience. You can adjust your browser settings to disable cookies,
          but this may limit some features of the website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your
          data. However, no system is completely secure, and we cannot guarantee
          absolute protection.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have rights to access, correct,
          delete, or restrict the use of your personal information. To exercise
          these rights, please contact us at the email below.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the updated policy on this
          page.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
        <p className="mb-8">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
          <br />
          <strong>Email:</strong> privacy@oxfordcollege.edu
        </p>

        <p className="text-sm text-gray-500">
          Last updated: July 2, 2025
        </p>
      </main>
      <footer className="border-t border-gray-200 mt-12 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Oxford College. All rights reserved.
      </footer>
    </>
  );
};

export default PrivacyPolicy;

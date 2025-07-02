import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // You can replace this with navigation or other logic
    alert("Thank you for accepting the Terms and Conditions.");
    // Example: navigate("/dashboard");
  };

  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto px-4 py-12 mt-16 text-slate-700">
        <h1 className="text-3xl font-bold mb-6 text-primary-600">
          Terms and Conditions
        </h1>

        <p className="mb-4">
          Welcome to <strong>Oxford College</strong>. These Terms and Conditions govern your use of our website, services, and digital materials. By accessing or using our website, you agree to comply with these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Website</h2>
        <p className="mb-4">
          You may use our website for lawful purposes only. You must not use our website in any way that violates applicable laws or regulations.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, trademarks, logos, and materials on this website are the intellectual property of Oxford College or our licensors. You may not reproduce, distribute, or create derivative works without our express permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Course Information</h2>
        <p className="mb-4">
          While we strive to provide accurate and up-to-date course details, we do not guarantee the completeness or accuracy of the information. Oxford College reserves the right to modify courses, fees, or schedules at any time without notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. User Accounts</h2>
        <p className="mb-4">
          If you create an account on our website, you are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Oxford College shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or reliance on any information provided.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party sites. We are not responsible for the content, privacy policies, or practices of those sites.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to Terms</h2>
        <p className="mb-4">
          We may update these Terms from time to time. Changes will be posted on this page, and your continued use of the website constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
        <p className="mb-4">
          These Terms are governed by the laws of your country or state of operation, without regard to its conflict of law principles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact Us</h2>
        <p className="mb-8">
          If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
          <br />
          <strong>Email:</strong> legal@oxfordcollege.edu
        </p>

        <p className="text-sm text-gray-500 mb-8">Last updated: July 2, 2025</p>

        <div className="text-center">
          <button
            onClick={handleAccept}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-md"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Accept Terms and Conditions</span>
          </button>
        </div>
      </main>
      <footer className="border-t border-gray-200 mt-12 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Oxford College. All rights reserved.
      </footer>
    </>
  );
};

export default TermsAndConditions;

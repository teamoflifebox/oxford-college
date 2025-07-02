import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  LogIn
} from "lucide-react";
import DownloadButton from "../components/DownloadButton";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-primary-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-forest p-2 rounded-xl shadow-nature">
              {/* You can swap this for your logo */}
              <span className="text-white font-bold">Logo</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gradient">Oxford College</span>
              <p className="text-xs text-sage-600 -mt-1">Technology Excellence</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sage-600 hover:text-primary-600 transition-colors">
                Programs
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block z-50">
                <a href="#ug" className="block px-4 py-2 hover:bg-gray-100">UG</a>
                <a href="#pg" className="block px-4 py-2 hover:bg-gray-100">PG</a>
                <a href="#certification" className="block px-4 py-2 hover:bg-gray-100">Certification</a>
              </div>
            </div>
            <a href="#lab" className="text-sage-600 hover:text-primary-600 transition-colors">Innovation Lab</a>
            <a href="#careers" className="text-sage-600 hover:text-primary-600 transition-colors">Careers</a>
            <a href="#gallery" className="text-sage-600 hover:text-primary-600 transition-colors">Campus Gallery</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <DownloadButton
              fileLink="/files/Oxford_Brochure_Placeholder.pdf"
              label="Prospectus"
              countdown={5}
              className="btn-secondary"
              forceDownload={true}
            />
            <button
              onClick={() => navigate("/login")}
              className="btn-primary flex items-center gap-1"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sage-600 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-white p-4 rounded-lg shadow-md">
            <div className="space-y-1">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sage-600 hover:text-primary-600">
                  <span>Programs</span>
                  <ChevronDown className="w-4 h-4 transform group-open:rotate-180 transition" />
                </summary>
                <div className="ml-4 mt-2 space-y-1">
                  <a href="#ug" className="block hover:text-primary-500">UG</a>
                  <a href="#pg" className="block hover:text-primary-500">PG</a>
                  <a href="#certification" className="block hover:text-primary-500">Certification</a>
                </div>
              </details>
              <a href="#lab" className="block hover:text-primary-600">Innovation Lab</a>
              <a href="#careers" className="block hover:text-primary-600">Careers</a>
              <a href="#gallery" className="block hover:text-primary-600">Campus Gallery</a>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <DownloadButton
                fileLink="/files/Oxford_Brochure_Placeholder.pdf"
                label="Prospectus"
                countdown={5}
                className="btn-secondary w-full text-center"
                forceDownload={true}
              />
              <button
                onClick={() => navigate("/login")}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

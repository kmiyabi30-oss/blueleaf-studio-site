import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-blue-600">BlueLeaf Studio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            私たちについて
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            サービス
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            お問い合わせ
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left hover:text-blue-600 transition-colors duration-200"
              >
                私たちについて
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left hover:text-blue-600 transition-colors duration-200"
              >
                サービス
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left hover:text-blue-600 transition-colors duration-200"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left hover:text-blue-600 transition-colors duration-200"
              >
                お問い合わせ
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Navigation Bar Component
 * Provides navigation links and authentication options
 * Responsive design with mobile menu support
 */
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePortalClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      router.push('/login');
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-judicial-navy text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-judicial-gold hover:text-yellow-400 transition-colors">
              Project Nemesis
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/about" 
              className="text-white hover:text-judicial-gold transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/news" 
              className="text-white hover:text-judicial-gold transition-colors duration-200 font-medium"
            >
              News
            </Link>
            <Link 
              href="/resources" 
              className="text-white hover:text-judicial-gold transition-colors duration-200 font-medium"
            >
              Resources
            </Link>
            
            {/* Authentication Buttons */}
            <div className="flex space-x-4 ml-4 items-center">
              {isAuthenticated ? (
                <>
                  <span className="text-judicial-gold text-sm">
                    Welcome, {user?.name}
                  </span>
                  <Link 
                    href="/portal"
                    className="px-4 py-2 bg-judicial-gold text-judicial-navy hover:bg-yellow-500 transition-all duration-200 rounded-md font-medium shadow-md"
                  >
                    Access Portal
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 border border-judicial-gold text-judicial-gold hover:bg-judicial-gold hover:text-judicial-navy transition-all duration-200 rounded-md font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    href="/login"
                    className="px-4 py-2 border border-judicial-gold text-judicial-gold hover:bg-judicial-gold hover:text-judicial-navy transition-all duration-200 rounded-md font-medium"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/portal"
                    onClick={handlePortalClick}
                    className="px-4 py-2 bg-judicial-gold text-judicial-navy hover:bg-yellow-500 transition-all duration-200 rounded-md font-medium shadow-md"
                  >
                    Access Portal
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-judicial-gold focus:outline-none focus:ring-2 focus:ring-judicial-gold p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-judicial-navy border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 hover:text-judicial-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 hover:text-judicial-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-700 hover:text-judicial-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-700 space-y-2">
              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 text-judicial-gold text-sm">
                    Welcome, {user?.name}
                  </div>
                  <Link
                    href="/portal"
                    className="block px-3 py-2 rounded-md bg-judicial-gold text-judicial-navy hover:bg-yellow-500 transition-all text-center font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Access Portal
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-3 py-2 rounded-md border border-judicial-gold text-judicial-gold hover:bg-judicial-gold hover:text-judicial-navy transition-all text-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-3 py-2 rounded-md border border-judicial-gold text-judicial-gold hover:bg-judicial-gold hover:text-judicial-navy transition-all text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/portal"
                    onClick={(e) => {
                      handlePortalClick(e);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md bg-judicial-gold text-judicial-navy hover:bg-yellow-500 transition-all text-center font-medium"
                  >
                    Access Portal
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

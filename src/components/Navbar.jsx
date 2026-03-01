import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const pages = [
    { to: '/about', label: 'Обо мне' },
    { to: '/portfolio', label: 'Портфолио' },
    { to: '/contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-3 bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center space-x-2 text-gray-800 font-semibold">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl animate-pulse"></div>
      </button>

      {/* 🔥 ВЫПАДАЮЩЕЕ МЕНЮ */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 animate-slide-down">
          <div className="py-3 px-1">
            {pages.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className={`flex items-center px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 mx-1 hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 hover:text-indigo-700 hover:shadow-lg transform hover:-translate-x-1 ${
                  location.pathname === page.to
                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-700 shadow-lg border border-indigo-200/50 font-bold'
                    : 'text-gray-800 hover:text-indigo-700'
                }`}
                onClick={() => setIsOpen(false)}>
                <span className="w-2 h-2 mr-4 rounded-full bg-current opacity-60"></span>
                {page.to === '/about' && '👤'}
                {page.to === '/portfolio' && '💼'}
                {page.to === '/contacts' && '✉️'}
                <span className="ml-2">{page.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

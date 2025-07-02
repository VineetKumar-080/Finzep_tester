import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold text-indigo-600">FinZep</h1>
        <nav className="space-x-6 hidden md:flex text-gray-700 dark:text-gray-300">
          <a href="#payments" className="hover:text-indigo-500 transition">Payments</a>
          <a href="#why-choose" className="hover:text-indigo-500 transition">Why Choose FinZep?</a>
        </nav>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

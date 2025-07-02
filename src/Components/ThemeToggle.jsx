import React from "react";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

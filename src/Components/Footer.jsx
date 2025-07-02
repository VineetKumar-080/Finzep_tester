import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} FinZep. All rights reserved.
      </div>
    </footer>
  );
}

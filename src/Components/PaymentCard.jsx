import React from "react";

export default function PaymentCard({ title, description }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </article>
  );
}

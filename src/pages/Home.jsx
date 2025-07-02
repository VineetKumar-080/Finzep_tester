import React from "react";
import PaymentCard from "../Components/PaymentCard";

const payments = [
  {
    title: "Payouts",
    description: "Payouts provide financial compensation for goods or services."
  },
  {
    title: "IMPS | NEFT",
    description: "IMPS and NEFT enable fast electronic money transfers."
  },
  {
    title: "Aadhaar Pay",
    description: "AadhaarPay facilitates payments using biometric authentication securely."
  },
  {
    title: "Credit Card Bill Payment",
    description: "Credit card bill payment ensures timely debt management."
  },
  {
    title: "Utility Bill Payment",
    description: "BBPS simplifies bill payments through a unified platform."
  }
];

export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Why Choose FinZep?</h2>
      <section id="payments" aria-label="Payments offered by FinZep" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {payments.map(({ title, description }) => (
          <PaymentCard key={title} title={title} description={description} />
        ))}
      </section>
    </section>
  );
}

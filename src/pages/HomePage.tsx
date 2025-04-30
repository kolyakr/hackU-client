import Hero from "@/components/pages/HomePage/Hero";
import News from "@/components/pages/HomePage/News";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center px-4 pb-16">
      <Hero />
      <CTA />
      <About />
      <Features />
      <News />
    </div>
  );
};

const CTA = () => (
  <div className="relative overflow-hidden group w-full max-w-3xl transition-all duration-500 hover:max-w-none rounded-3xl">
    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0"></div>

    <div className="relative z-10 bg-gray-600 text-white px-6 py-10 rounded-3xl text-center shadow-xl transition-transform duration-500 group-hover:scale-[1.01]">
      <h3 className="text-3xl font-bold mb-4">Готовий до виклику?</h3>
      <p className="text-lg mb-6">
        Приєднуйся до нас і покажи, на що ти здатен!
      </p>
      <Link
        to="/hackatons"
        className="bg-white cursor-pointer text-gray-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
      >
        Стати учасником
      </Link>
    </div>
  </div>
);

const About = () => (
  <section className="max-w-4xl text-center space-y-4">
    <h2 className="text-4xl font-bold">Про нас</h2>
    <p className="text-lg text-gray-700 font-[600]">
      Ми — спільнота, яка об’єднує таланти для участі в хакатонах. Наша мета —
      допомогти кожному реалізувати свої ідеї через командну роботу та
      інновації.
    </p>
  </section>
);

const Features = () => (
  <section className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
    {[
      {
        title: "Онлайн і офлайн хакатони",
        description:
          "Участь з будь-якої точки світу або наживо — вибір за тобою!",
      },
      {
        title: "Менторська підтримка",
        description: "Наші експерти допоможуть зробити твою ідею реальністю.",
      },
      {
        title: "Круті призи",
        description: "Стань переможцем і отримай цінні винагороди.",
      },
    ].map((feat, idx) => (
      <div
        key={idx}
        className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition"
      >
        <h3 className="text-xl mb-2 font-[600] text-black">{feat.title}</h3>
        <p className="text-gray-600">{feat.description}</p>
      </div>
    ))}
  </section>
);

export default HomePage;

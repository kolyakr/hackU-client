import { motion } from "framer-motion";
import Hero from "@/components/pages/HomePage/Hero";
import News from "@/components/pages/HomePage/News";
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
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ width: "100%" }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className="relative overflow-hidden group w-full max-w-3xl rounded-3xl"
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0"
      layout
    />

    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 bg-gray-600 text-white px-6 py-10 rounded-3xl text-center shadow-xl"
    >
      <motion.h3
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Готовий до виклику?
      </motion.h3>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Приєднуйся до нас і покажи, на що ти здатен!
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          to="/hackatons"
          className="bg-white cursor-pointer text-gray-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Стати учасником
        </Link>
      </motion.div>
    </motion.div>
  </motion.div>
);

const About = () => (
  <motion.section
    className="max-w-4xl text-center space-y-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold">Про нас</h2>
    <p className="text-lg text-gray-700 font-[600]">
      Ми — спільнота, яка об’єднує таланти для участі в хакатонах. Наша мета —
      допомогти кожному реалізувати свої ідеї через командну роботу та
      інновації.
    </p>
  </motion.section>
);

const Features = () => (
  <motion.section
    className="grid md:grid-cols-3 gap-10 max-w-6xl w-full"
    initial="hidden"
    whileInView="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    viewport={{ once: true }}
  >
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
      <motion.div
        key={idx}
        className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl mb-2 font-[600] text-black">{feat.title}</h3>
        <p className="text-gray-600">{feat.description}</p>
      </motion.div>
    ))}
  </motion.section>
);

export default HomePage;

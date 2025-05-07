import { motion } from "framer-motion";
import HeroImage from "../../../../public/images/main-hero.png";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex justify-center max-w-[500px] items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <img src={HeroImage} alt="hero image" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-[40px] font-bold text-center">
          <span>hackU</span> - сайт для хакатонів та трохи більше
        </h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Приєднуйся до спільноти розробників, дизайнерів та інноваторів, які
          створюють майбутнє. Змагайся в хакатонах, прокачуй свої навички та
          здобувай круті нагороди.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

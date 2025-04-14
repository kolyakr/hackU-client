import HeroImage from "../../../../public/images/main-hero.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex justify-center max-w-[500px] items-center">
        <img src={HeroImage} alt="hero image" />
      </div>
      <div className=" flex flex-col items-center">
        <h2 className="text-[40px] font-bold  text-center">
          <span>hackU</span> - сайт для хакатонів та трохи більше
        </h2>
        <p className="text-lg mb-8">
          Приєднуйся до спільноти розробників, дизайнерів та інноваторів, які
          створюють майбутнє. Змагайся в хакатонах, прокачуй свої навички та
          здобувай круті нагороди.
        </p>
      </div>
    </div>
  );
};

export default Hero;

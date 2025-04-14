import { NAV_LINKS } from "@/constants";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="border-[3px] rounded-[15px] px-6 py-2 flex gap-7 text-xl flex-col items-center md:flex-row font-[700]">
      {NAV_LINKS.map((link) => (
        <Link to={link.href} key={link.title}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

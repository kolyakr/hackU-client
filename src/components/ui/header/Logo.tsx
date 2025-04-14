import { APP_NAME } from "@/constants";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="text-4xl">{APP_NAME}</h1>
    </Link>
  );
};

export default Logo;

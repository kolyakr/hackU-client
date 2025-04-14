import AuthForm from "@/components/forms/AuthForm";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  console.log(location);
  const type = location.pathname === "/auth/register" ? "register" : "login";

  return (
    <div className="flex justify-center items-center h-screen wrapper">
      <AuthForm type={type} />
    </div>
  );
};

export default AuthPage;

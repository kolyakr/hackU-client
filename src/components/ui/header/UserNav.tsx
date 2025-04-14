import { useAuth } from "@/hooks/useAuth";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

const UserNav = () => {
  const user = useAuth();

  return (
    <div>
      {user ? (
        <div className="flex gap-2">
          <User />
          <p>{user.user?.displayName}</p>
        </div>
      ) : (
        <Link to="/auth/login">Login</Link>
      )}
    </div>
  );
};

export default UserNav;

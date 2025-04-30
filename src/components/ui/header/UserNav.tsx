import { useAuth } from "@/hooks/useAuth";
import { User as UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const UserNav = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <UserIcon />
            <p>{user.displayName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 cursor-pointer text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/auth/login"
          className="border px-4 py-2 rounded-[10px] hover:underline transition"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default UserNav;

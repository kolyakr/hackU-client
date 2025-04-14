import {
  loginUserSchema,
  LoginUserType,
} from "@/validations/loginUserValidation";
import { registerUserSchema } from "@/validations/registerUserSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../shadcn/input";
import { Button } from "../shadcn/button";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "@/firebase";

type AuthType = LoginUserType & { name?: string };

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const authSchema = type === "login" ? loginUserSchema : registerUserSchema;
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthType>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthType) => {
    const auth = getAuth(app);

    try {
      if (type === "login") {
        await signInWithEmailAndPassword(auth, data.email, data.password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );

        if (data.name) {
          await updateProfile(userCredential.user, {
            displayName: data.name,
          });
        }
      }
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-7 max-w-[500px] w-full p-[30px] border rounded-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {type === "register" && (
        <div className="relative">
          <Input {...register("name")} placeholder="Enter name" />
          {errors.name && (
            <p className="absolute text-sm text-red-700 font-bold top-[40px]">
              {errors.name.message}
            </p>
          )}
        </div>
      )}
      <div className="relative">
        <Input {...register("email")} placeholder="Enter email" />
        {errors.email && (
          <p className="absolute text-sm text-red-700 font-bold top-[40px]">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <Input
          type="password"
          {...register("password")}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="absolute text-sm text-red-700 font-bold top-[40px]">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Button type="submit" className="max-w-[100px]">
          {type === "register" ? "Register" : "Login"}
        </Button>
        <Link to={`/auth/${type === "register" ? "login" : "register"}`}>
          {type === "register"
            ? "Already have an account? Login"
            : "Don’t have an account? Register"}
        </Link>
      </div>
    </form>
  );
};

export default AuthForm;

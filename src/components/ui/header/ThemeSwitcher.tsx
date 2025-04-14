import { useTheme } from "@/components/shadcn/theme-provider";
import { SunMoon } from "lucide-react";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunMoon />
    </div>
  );
};

export default ThemeSwitcher;

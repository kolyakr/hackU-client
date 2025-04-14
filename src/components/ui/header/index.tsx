import Navigation from "./Navigation";
import Logo from "./Logo";
import SheetMenu from "./SheetMenu";
import UserNav from "./UserNav";

const Header = () => {
  return (
    <header className="w-full wrapper flex justify-between border-b-2 gap-[100px] items-center">
      <Logo />
      <div className="hidden md:flex justify-between flex-1">
        <Navigation />
        <div className="flex gap-4">
          <UserNav />
        </div>
      </div>
      <SheetMenu />
    </header>
  );
};

export default Header;

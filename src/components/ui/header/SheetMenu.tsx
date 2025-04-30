import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/sheet";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";
import UserNav from "./UserNav";

const SheetMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-9 items-center">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <Navigation />
          <div className="flex gap-2">
            <UserNav />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetMenu;

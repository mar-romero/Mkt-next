import { NavItem } from "@/domain/models/interfaces/NavItem";
import Link from "next/link";

export const DesktopMenu = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="hidden md:flex space-x-4">
      {items.map((item) => (
        <Link key={item.name} href={item.href} className="text-white hover:text-gray-200 transition-colors">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

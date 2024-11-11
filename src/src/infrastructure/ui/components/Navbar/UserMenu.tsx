// infrastructure/ui/components/Navbar/components/UserMenu.tsx
import Link from 'next/link';
import { User, ChevronDown } from 'lucide-react';
import { type User as UserType } from '@/domain/models/interfaces/User';

interface UserMenuProps {
  user: UserType;
  onLogout: () => void;
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: (isOpen: boolean) => void;
}

export const UserMenu = ({ user, onLogout, isUserMenuOpen, setIsUserMenuOpen }: UserMenuProps) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center text-white hover:text-gray-200 transition-colors"
        aria-expanded={isUserMenuOpen}
        aria-haspopup="true"
      >
        <User className="mr-2" size={20} />
        <span>{user.name}</span>
        <ChevronDown className="ml-1" size={16} />
      </button>

      {isUserMenuOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <Link href="/mis-cursos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Mis Cursos
          </Link>
          <Link href="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Mi Perfil
          </Link>
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

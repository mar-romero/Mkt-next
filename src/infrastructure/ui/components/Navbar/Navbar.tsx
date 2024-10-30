// infrastructure/ui/components/Navbar/Navbar.tsx
import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { IMAGES } from '@/shared/const/images';
import { NAVIGATION_CONFIG } from '@/shared/const/navigation';
import { DesktopMenu } from './DesktopMenu';
import { UserMenu } from './UserMenu';
import { MobileMenu } from './MobileMenu';
import { NavItem } from '@/domain/models/interfaces/NavItem';
import { useAuth } from '@/infrastructure/adapters/ui/hooks/useAuth';
import { useNavbar } from '@/infrastructure/adapters/ui/useNavbar';

export const Navbar: FC = () => {
  const { isOpen, isUserMenuOpen, setIsOpen, setIsUserMenuOpen } = useNavbar();
  const { user, logout, isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setIsUserMenuOpen(false);
      // Aquí podrías agregar redirección si es necesario
    } catch (error) {
      console.error('Error during logout:', error);
      // Aquí podrías mostrar una notificación de error
    }
  };

  if (isLoading) {
    return <div className="h-16 bg-[#7044f775]" />; // Skeleton loader simple
  }

  return (
    <nav className="bg-[#7044f775] p-4 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={IMAGES.HOME.HERO.GROUP3} alt="Logo" width={40} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <DesktopMenu items={NAVIGATION_CONFIG.navItems} />

        {/* User Section */}
        <div className="hidden md:block">
          {user ? (
            <UserMenu
              user={user}
              onLogout={handleLogout}
              isUserMenuOpen={isUserMenuOpen}
              setIsUserMenuOpen={setIsUserMenuOpen}
            />
          ) : (
            <Link href="/login" className="text-white hover:text-gray-200 transition-colors">
              Iniciar Sesión/Registrarse
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <DesktopMenu items={NAVIGATION_CONFIG.navItems as NavItem[]} />
      <MobileMenu
        isOpen={isOpen}
        items={NAVIGATION_CONFIG.navItems as NavItem[]}
        user={user}
        onLogout={handleLogout}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  );
};

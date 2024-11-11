// infrastructure/ui/components/Navbar/components/MobileMenu.tsx
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { type NavItem } from '@/domain/models/interfaces/NavItem';
import { type User } from '@/domain/models/interfaces/User';

 interface MobileMenuProps {
  isOpen: boolean;
  items: readonly NavItem[];
  user: User | null;
  onLogout: () => void;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, items, user, onLogout, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-4"
        >
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-white hover:text-gray-200 py-2 transition-colors"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <>
              <Link
                href="/mis-cursos"
                className="block text-white hover:text-gray-200 py-2 transition-colors"
                onClick={onClose}
              >
                Mis Cursos
              </Link>
              <Link
                href="/perfil"
                className="block text-white hover:text-gray-200 py-2 transition-colors"
                onClick={onClose}
              >
                Mi Perfil
              </Link>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="block w-full text-left text-white hover:text-gray-200 py-2 transition-colors"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block text-white hover:text-gray-200 py-2 transition-colors"
              onClick={onClose}
            >
              Iniciar Sesión/Registrarse
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

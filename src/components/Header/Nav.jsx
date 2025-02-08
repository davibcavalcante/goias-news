import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ChevronRight, Instagram } from "lucide-react";
import { getNavLinks } from "../../utils/navigation/links";

const Nav = ({ isMenuOpen }) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const navLinks = getNavLinks();

  return (
    <motion.nav
      className="absolute bg-white top-full h-[calc(100vh-72px)] w-3/4 flex flex-col md:static md:bg-transparent md:h-auto"
      initial={{ left: '-100%' }}
      animate={{ left: isMenuOpen ? '0%' : '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <section className="p-4 flex-1 flex flex-col gap-4 md:flex-none md:flex-row">
        <h2 className="text-xl font-semibold pb-2 border-b border-opaque md:hidden">Notícias</h2>
        <ul className="border-b border-opaque flex flex-col gap-4 pb-4 md:flex-row md:border-0 md:items-center md:pb-0 md:gap-6">
          {navLinks.map((link, index) =>
            <li className="flex items-center justify-between" key={index}>
              <section className="flex items-center gap-2">
                <link.Icon className="text-main md:hidden" />
                <Link to={link.path} className="font-semibold text-secondary md:text-white md:font-normal md:hover:text-opaque duration-300">{link.label}</Link>
              </section>
              <ChevronRight className="text-secondary md:hidden" />
            </li>
          )}
        </ul>
      </section>
      <section className="h-10 bg-opaque flex justify-center items-center md:hidden">
        <p className="font-light flex items-center justify-center gap-2">
          Nos siga no <Link to='https://www.instagram.com/goiasnews24h/' target="_blank" rel="noopener noreferrer" className="text-main font-normal">Instagram</Link>
          <Instagram color='black' size={15} />
        </p>
      </section>
    </motion.nav>
  );
};

export default Nav;
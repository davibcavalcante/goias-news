import { createContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
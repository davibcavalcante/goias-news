import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import MenuContext from "../../contexts/MenuContext";
import MenuBtn from "./MenuBtn";
import Nav from "./Nav";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <header className="bg-main">
      <section className="p-4 flex items-center relative lg:w-5xl lg:m-auto 2xl:w-7xl">
        <section className="flex items-center gap-4 flex-1 md:border-r md:border-white pr-4 md:flex-none">
          <Link to={'/'}>
            <img src={logo} alt="Goiás News" className="w-10" />
          </Link>
          <span className="text-white text-xl">Goiás News 24H</span>
        </section>
        <Nav isMenuOpen={isMenuOpen} />
        <MenuBtn handleFunction={toggleMenu} isMenuOpen={isMenuOpen} />
      </section>
    </header>
  );
};

export default Header;
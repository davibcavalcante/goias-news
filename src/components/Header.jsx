import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ChevronRight, Coins, Gavel, Home, Instagram, LibraryBig, Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const links = {
    nav: [
      { name: 'Últimas Notícias', path: '/ultimasnoticias', icon: <Zap size={15} /> },
      { name: 'Direitos Humanos', path: '/direitoshumanos', icon: <Gavel size={15} /> },
      { name: 'Economia', path: '/economia', icon: <Coins size={15} /> },
      { name: 'Educação', path: '/educacao', icon: <LibraryBig size={15} /> },
    ],

    instagram: 'https://www.instagram.com/goiasnews24h/'
  };

  const handleChangeStatusMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="bg-main shadow-sm p-4 flex items-center justify-between w-full relative lg:w-auto lg:gap-4 2xl:gap-6">
      <section className='flex items-center justify-between w-full md:w-60 2xl:w-64'>
        <div className='rounded-full shadow-sm'>
          <img src={logo} alt="Goiás News" className='w-12' />
        </div>
        <span className=' text-xl text-white font-bold m-auto md:m-0'>Goiás News 24 H</span>
        <div className='bg-white w-0.5 h-8 hidden md:block'></div>
      </section>
      <nav className={`absolute bg-white flex flex-col top-20 right-0 w-[70%] h-menu duration-500 transform ${activeMenu ? 'translate-x-0' : 'translate-x-full'} md:block md:static md:bg-transparent md:text-white md:max-h-fit lg:flex-1`}>
        <span className='text-xl pl-4 pt-4 border-b md:hidden'>Notícias</span>
        <ul className='flex flex-col flex-1 w-full gap-3 p-4 text text-lg font-semibold md:flex-row md:font-normal'>
          {links.nav.map((link, index) =>
            <li key={index} className='flex items-center gap-4 p-1'>
              <div className='bg-main p-2 border-2 text-white border-light rounded-full md:hidden'>
                {link.icon}
              </div>
              <div className='flex items-center justify-between flex-1'>
                <Link to={link.path}>{link.name}</Link>
                <ChevronRight className='text-main'/>
              </div>
            </li>
          )}
        </ul>
        <section className='bg-gray-300 w-full text-center p-2 flex items-center justify-center gap-2 md:hidden'>
          <p className='font-light'>Visite nosso <Link to={links.instagram} target='_blank' rel="noopener noreferrer" className='text-main font-normal underline'>Instagram</Link></p>
          <Instagram className='text-main' size={20} />
        </section>
      </nav>
      <section className='md:hidden'>
        <Menu className={`text-white ${activeMenu ? 'hidden' : ''}`} size={35} onClick={handleChangeStatusMenu} />
        <X className={`text-white ${activeMenu ? '' : 'hidden'}`} size={35} onClick={handleChangeStatusMenu} />
      </section>
      <section className='hidden lg:block'>
        <Link to={links.instagram} target='_blank' rel="noopener noreferrer" className='bg-white block rounded-full p-1.5 shadow-xl'>
          <Instagram size={30} className='text-main'/>
        </Link>
      </section>
    </header>
  );
};

export default Header;
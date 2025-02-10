import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { getNavLinks } from '../../utils/navigation/links';
import logo from '../../assets/images/logo.png';
import MailContact from './MailContact';

const Footer = () => {
  const navLinks = getNavLinks();

  return (
    <footer className="bg-main lg:flex lg:flex-col lg:items-center">
      <section className='flex flex-col gap-4 p-8 xl:gap-8 lg:w-5xl'>
        <section className='flex items-center'>
          <Link to={'/'} className='w-fit'>
            <img src={logo} alt="Goiás News" className="w-12" />
          </Link>
          <span className='pl-2 text-white text-2xl font-semibold'>
            Goias News 24H
          </span>
        </section>
        <section className='flex flex-col gap-4 md:flex-row md:justify-between'>
          <section className='flex flex-col gap-2'>
            <span className='text-white text-xl font-semibold'>Notícias</span>
            <section>
              <ul>
                {navLinks.map((link, index) =>
                  <li className="flex items-center justify-between" key={index}>
                    <Link
                      to={link.path}
                      className="font-light text-white text-lg md:hover:text-opaque duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                )}
              </ul>
            </section>
          </section>
          <div className='h-auto w-[1px] bg-opaque'></div>
          <section className='flex flex-col gap-4 lg:m-0'>
            <span className='text-white text-xl font-semibold'>Termos</span>
            <section className='flex flex-col gap-2'>
              <Link
                to='/termosuso'
                className="text-white font-light text-lg underline"
              >
                Termos de uso
              </Link>
              <Link
                to='/politicaprivacidade'
                className="text-white font-light text-lg underline"
              >
                Política de privacidade
              </Link>
            </section>
            <section className='flex flex-col gap-2'>
              <span className='text-white text-xl font-semibold'>Redes sociais</span>
              <section className='flex flex-col gap-2'>
                <Link
                  to='https://www.instagram.com/goiasnews24h/'
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-white font-light text-lg underline flex  items-center gap-2"
                >
                  <Instagram/> @goiasnews
                </Link>
              </section>
            </section>
          </section>
          <div className='h-auto w-[1px] bg-opaque'></div>
          <section className='md:w-5/12'>
            <MailContact />
          </section>
        </section>
      </section>
      <section className='bg-opaque p-2 w-full'>
        <p className='text-center'>&copy; Goiás News 2025, Todos os direitos reservados</p>
      </section>
    </footer>
  );
};

export default Footer;
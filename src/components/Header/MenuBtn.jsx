import { motion } from 'framer-motion';

const MenuBtn = ({ handleFunction, isMenuOpen }) => {
  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };

  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  return (
    <button onClick={handleFunction} className='bg-transparent border-0 p-0 outline-0 md:hidden'>
      <svg width="30" height="30" viewBox="0 0 30 30">
        <motion.rect
          x="5"
          y="7"
          width="20"
          height="3"
          fill="#FFF"
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={topVariants}
          transition={{ duration: 0.3 }}
        />
        
        <motion.rect
          x="5"
          y="14"
          width="20"
          height="3"
          fill="#FFF"
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={middleVariants}
          transition={{ duration: 0.3 }}
        />
        
        <motion.rect
          x="5"
          y="21"
          width="20"
          height="3"
          fill="#FFF"
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={bottomVariants}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default MenuBtn;
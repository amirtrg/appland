import Button from '../../Ui/Button/Button';
import NavbarItem from './NabarItem';
import Modal from './../../Ui/Modal/Modal';
import { useState } from 'react';
import MenuModal from './MenuModal';
import Container from '../../Ui/Container/Container';

const Navbar = ({transparent}) => {
  const[isMenuOpen,setIsMenuOpen]=useState(false)
  return (
  <header className={`absolute dark:fixed top-0 left-0 right-0 z-10 mx-auto ${transparent? "bg-transparent": "bg-gradient-to-b from-indigo-700 to-indigo-500 dark:from-black dark:to-transparent dark:backdrop-blur-md"} }`}>

    {isMenuOpen&&<MenuModal onExit={()=>{setIsMenuOpen(false)}} />}
      
<Container className="flex items-center gap-4 sm:justify-start py-4 px-4 ">
  
<Button className=" sm:hidden py-0 px-1 flex flex-col gap-1 dark:bg-black" type="secondary" onClick={()=>{setIsMenuOpen(true)}}>
      <span className='w-6 h-0.5 block rounded-sm bg-black dark:bg-white'></span>
      <span className='w-6 h-0.5 block rounded-sm bg-black/70 dark:bg-white/70'></span>
      <span className='w-6 h-0.5 block rounded-sm bg-black/50 dark:bg-white/50'></span>
    </Button>
      <h1 className="pl-4 text-2xl font-bold dark:text-white" style={{fontFamily:"lalezar"}}>
        اپلند
      </h1>

    <nav className="hidden sm:flex items-center ">
      <NavbarItem href="/" title="صفحه اصلی" />
      <NavbarItem href="/products" title="محصولات" />
      <NavbarItem href="/about-us" title="درباره ما" />
    </nav>

</Container>
  </header>
  );
};

export default Navbar;

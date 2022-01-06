import Button from '../../Ui/Button/Button';
import NavbarItem from './NabarItem';
import Modal from './../../Ui/Modal/Modal';
import { useState } from 'react';
import MenuModal from './MenuModal';

const Navbar = () => {
  const[isMenuOpen,setIsMenuOpen]=useState(false)
  return (
  <header className='absolute top-0 left-0 right-0 z-10 flex items-center gap-4 sm:justify-start py-2 px-4 lg:w-4/5 mx-auto'>

    {isMenuOpen&&<MenuModal onExit={()=>{setIsMenuOpen(false)}} />}
      

    <Button className="sm:hidden py-0 px-1" type="secondary" onClick={()=>{setIsMenuOpen(true)}}>
      <span className='w-6 my-0.5 h-0.5 block rounded-sm bg-black '></span>
      <span className='w-6 my-0.5 h-0.5 block rounded-sm bg-black/70 '></span>
      <span className='w-6 my-0.5 h-0.5 block rounded-sm bg-black/50 '></span>
    </Button>
      <h1 className="pl-4 text-2xl font-bold" style={{fontFamily:"lalezar"}}>
        اپلند
      </h1>

    <nav className="hidden sm:flex items-center ">
      <NavbarItem href="/" title="صفحه اصلی" />
      <NavbarItem href="/products" title="محصولات" />
      <NavbarItem href="/about-us" title="درباره ما" />
    </nav>

  </header>
  );
};

export default Navbar;

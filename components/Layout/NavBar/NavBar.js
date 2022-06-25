import Button from "../../Ui/Button/Button";
import NavbarItem from "./NabarItem";
import Modal from "./../../Ui/Modal/Modal";
import { useState } from "react";
import MenuModal from "./MenuModal";
import Container from "../../Ui/Container/Container";

const Navbar = ({ transparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className={`sticky top-0 left-0 right-0 z-10 mx-auto ${
        transparent
          ? "bg-transparent"
          : "dark:bg-gradient-to-b shadow-xl shadow-black/5 bg-white dark:bg-transparent dark:from-black dark:shadow-none dark:to-black/0 dark:backdrop-blur-md"
      } }`}
    >
      {/* {isMenuOpen && ( */}
      <MenuModal
        isShown={isMenuOpen}
        onExit={() => {
          setIsMenuOpen(false);
        }}
      />
      {/* )} */}

      <Container className="flex items-center gap-2 sm:justify-start py-4 px-4 ">
        <Button
          className=" sm:hidden py-0 px-0 dark:bg- dark:text-white"
          type=""
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <line
              x1="5%"
              y1="25%"
              x2="95%"
              y2="25%"
              strokeWidth={2}
              strokeLinecap="round"
              stroke="currentColor"
            >
                {!isMenuOpen&&<animate attributeName="x1" values="5%;50%;5%" dur="6s" repeatCount="indefinite" />}
            </line>
            <line
              x1="5%"
              y1="50%"
              x2="95%"
              y2="50%"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
            >
            {isMenuOpen&&<>
              <animate attributeName="x1" values="5%;50%;150%" dur="1s" repeatCount="indefinite" />
               <animate attributeName="x2" values="95%;50%;150%" dur="1s" repeatCount="indefinite" />
            </>}
            </line>
            <line
              x1="5%"
              y1="75%"
              x2="95%"
              y2="75%"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="currentColor"
            >
               {!isMenuOpen&&<animate attributeName="x1" values="5%;50%;5%" dur="6s" repeatCount="indefinite" />}
            </line>
          </svg>
        </Button>
        <h1
          className="pl-4 text-2xl font-bold  dark:text-white"
          style={{ fontFamily: "lalezar" }}
        >
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

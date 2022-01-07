import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./../../Ui/Button/Button";

const NavbarItem = ({ href, title }) => {
    const router = useRouter();
    return (
      <Link href={href}>
        <a className="m-1">
          <Button
            className={`w-full py-0.5 px-1.5 m-0 active:ring-2 ring-offset-2 ring-indigo-700 transition-all ease-linear duration-150 hover:animate-pulse ${
              router.pathname == href &&
              "bg-gradient-to-tr from-black to-indigo-700 text-white hover:animate-none"
            }`}
          >
            {title}
          </Button>
        </a>
      </Link>
    );
  };
  export default NavbarItem
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./../../Ui/Button/Button";

const NavbarItem = ({ href, title }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className="m-0">
        <Button
          className={`w-full py-0 px-1.5 m-0 active:ring-2 ring-offset-2 ring-indigo-700 transition-all ease-linear duration-150 hover:animate-pulse text-blue-500/50 dark:text-white/50 ring-offset-[#121212] ${
            router.isReady&& router.pathname == href &&
            "text-blue-500/100 dark:text-white/100 hover:animate-none"
          }`}
        >
          {title}
        </Button>
      </a>
    </Link>
  );
};
export default NavbarItem;

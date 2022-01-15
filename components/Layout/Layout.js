import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { motion } from "framer-motion";
const Layout = ({ children, footer=true, header=true }) => {
  return (
    <div className="relative dark:bg-[#121212]">
      {header && <Navbar />}
      <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75,when:"beforeChildren",staggerChildren:5}} className={`
      ${footer?"pb-96":""}
       ${header?"pt-16":""}
       px-2
        sm:pb-60 min-h-screen bg-[#fefefe] dark:bg-[#121212]`}>
        {children}
      </motion.main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;

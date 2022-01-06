import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { motion } from "framer-motion";
const Layout = ({ children, footer=true, header=true }) => {
  return (
    <div className="relative">
      {header && <Navbar />}
      <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,when:"beforeChildren",staggerChildren:5}} className={`
      ${footer?"pb-96":""}
       ${header?"pt-14":""}
       px-2
        sm:pb-52 min-h-screen bg-[#fefefe]`}>
        {children}
      </motion.main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;

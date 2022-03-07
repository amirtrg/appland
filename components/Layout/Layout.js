import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { motion } from "framer-motion";
const Layout = ({ children, footer=true, header=true ,headerTransparent}) => {
  return (
    <div className={`relative dark:bg-[#121212] `}>
      {header && <Navbar headerTransparent={headerTransparent}/>}
      <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.75,when:"beforeChildren",staggerChildren:5}} className={`
     ${header?"pt-20":""}
     ${footer?"pb-96":""}
       px-2
       sm:pt-28
       sm:pb-60
         bg-[#fefefe] dark:bg-[#121212]`}>
        <div className="min-h-screen relative">
        {children}
        </div>
      </motion.main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;

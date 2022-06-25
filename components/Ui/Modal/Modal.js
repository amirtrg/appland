import Card from "../Card/Card";
import { motion } from "framer-motion";

const Modal = ({ children, className, onExit, isShown }) => {
  let backdrop;
  !isShown ? (backdrop = { opacity: 0,scale:0,borderRadius:"0% 0% 0 100%" }) : (backdrop = { opacity: 1,borderRadius:"0",scale:1 });
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: "0%", borderRadius: "100%" }}
        animate={{ opacity: 1, scale: isShown?1:0, borderRadius: "1rem", y:  isShown?"-50%":"-100%"}}
        transition={{delay:isShown?0.5:0.3,duration:.4}}
        className={`z-50 fixed top-1/2 left-0 right-0 mx-8 p-4  max-w-lg bg-white/80 backdrop-blur-xl  backdrop-saturate-50  dark:bg-black/80   dark:backdrop-blur dark:text-white ${className}`}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 ,borderRadius:"10rem",scale:0}}
        transition={{delay:isShown?0.5:0.3,duration:.4}}
        animate={backdrop}
        className="fixed top-0 bottom-0 left-0 backdrop-blur  right-0 bg-black/30 z-40 origin-top-right cursor-pointer"
        onClick={onExit}
      />
    </>
  );
};

export default Modal;

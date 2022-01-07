import Card from "../Card/Card";
import { motion } from 'framer-motion';

const Modal = ({ children, className, onExit,isShown }) => {
  let backdrop;
  !isShown ? backdrop={opacity:1} : backdrop={opacity:0}
  return (
    <>
      <Card initial={{opacity:0,scale:0,y:"-50%",borderRadius:"100%"}} animate={{opacity:1,scale:1,borderRadius:"1rem"}} 
      className={`z-50 fixed top-1/2 left-0  right-0 transform -translate-y-1/2  mx-8  max-w-lg transition-all ease-linear delay-500 duration-300 bg-white ${className}`}>
       {children}
      </Card>
      <motion.div 
      initial={{opacity:0}}
      animate={backdrop}
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 backdrop-blur z-40 cursor-pointer"
        onClick={onExit}
      />
    </>
  );
};

export default Modal;

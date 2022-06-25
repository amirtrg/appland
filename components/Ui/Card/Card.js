import { animate, m, motion } from "framer-motion";
const Card = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  initial,
  animate,  
},props) => {
   const styles = "m-4 p-4 rounded-2xl bg-white text-base"
  // let finalStyles = {
  //   padding: "p-4",
  //   margin:  "m-4",
  //   rounded:  "rounded-2xl",
  //   bg: "bg-white",
  //   default:"border border-red-400",
  //   ...styles
  // };
  
  return (
    <motion.div
      initial={initial}
      animate={animate}
       className={className ? `${className} ${styles} ` : `${styles}` }
      // className={Object.values(finalStyles).join(" ")}
      onMouseEnter={onMouseEnter && onMouseEnter}
      onMouseLeave={onMouseLeave && onMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

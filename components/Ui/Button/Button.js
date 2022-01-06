import { motion } from "framer-motion";


const Button = ({  className, children, type ,onClick}) => {
  let style;
  const defaultStyle =
    `py-2 px-4 rounded-lg m-1 capitalize transition ease-linear `;
  switch (type) {
    case "primary":
      style = `${defaultStyle} bg-[#0077ff] text-[#fff]
      shadow-lg
      shadow-[#0055ff]/40
      hover:bg-[#0066ee]
      hover:shadow-md
      active:bg-[#0055bb]
      `;
      break;
    case "secondary":
      style = `${defaultStyle} bg-[#eee]
      hover:bg-[#ddd]
      active:bg-[#bbb]`;
      break;
    case "primary-outline":
      style = `${defaultStyle} border border-[#0077ff] text-[#0077ff] shadow-none
      hover:bg-[#0077ff] hover:text-[#fff]
      active:bg-[#0055bb]`;
      break;
    case "secondary-outline":
      style = `${defaultStyle} border-2 border-[#eee] 
      hover:bg-[#ddd] hover:border-[#ddd] 
      active:bg-[#bbb] active:border-[#bbb] `;
      break;
    case "danger":
      style = `${defaultStyle} bg-red-500 shadow-sm shadow-red-500
      hover:bg-red-700 hover:text-[#fff]
      active:bg-red-800`;
      break;
    case "success":
      style = `${defaultStyle} bg-green-500 shadow-lg shadow-green-500/40
      hover:bg-green-600 hover:text-white
      active:bg-green-700`;
      break;
    case "link":
      style = `${defaultStyle} underline text-[#0077ff]
      hover:text-[#0099ff]
      active:text-blue-800`;
      break;
    default:
      style = `${defaultStyle} hover:`;
      break;
  }

  return (<motion.button onClick={onClick} 
  whileTap={{scale:1.1}} 
  className={` ${className? ` ${className} ${style}` : `${style}`}`}>
  {children}
  </motion.button>)
};

export default Button;

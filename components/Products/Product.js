import Card from "./../Ui/Card/Card";
import Button from "./../Ui/Button/Button";
import Image from "next/image";
import productPic from "./../../public/Images/products/iphone13promax.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Product = ({isNew,title,brand,imgSrc,price,ram,memory}) => {
  const [ hidden, setHidden ] = useState(true);
  let animate
  hidden ? animate = {opacity:0} : animate ={opacity:1}
  let ParentAnimate
  hidden ? ParentAnimate={scale:0.25}:ParentAnimate={scale:1}
  return (
    <Card className=" border border-[#ccc] relative m-0 my-0 mx-0 w-full flex flex-col gap-4 aspect-auto overflow-hidden bg-white dark:border-[#222] dark:bg-[#222] dark:text-white" 
    onMouseEnter={ ()=>setHidden(false)}
            onMouseLeave={()=>setHidden(true)}>
      <div className="flex items-center justify-between flex-wrap">
        <span className="flex items-center gap-2">
          {isNew&&<motion.span
            animate={ParentAnimate}
            className={`text-xs flex justify-center rounded-full p-1 bg-red-600 ${hidden&&"animate-pulse "}`}
          >
            <motion.span animate={animate}
             className="text-white"
            >جدید</motion.span>
          </motion.span>}
          <h1 className="text-2xl font-extralight">{title}</h1>
        </span>

        <p className="text-black/40 dark:text-white/40 text-base capitalize">{brand}</p>
      </div>
      <div className="grid items-center aspect-square bg-white rounded-xl dark:opacity-80 ">
      <Image
        src={imgSrc}
        className="object-scale-down"
        layout="intrinsic"
        width={300}
        height={300}
        alt="product image"
      />
      </div>

      <p className="text-black/50 dark:text-white/40 text-sm leading-loose farsiDigit">
        حافظه داخلی : از {memory.min} گیگابایت تا {memory.max} ترابایت
        <br />
        حافظه رم : از {ram.min} گیگابایت تا {ram.max} گیگابایت
        <br />
        شروع قیمت از {price.min} تومان
      </p>
      <Button type="primary" className="my-0 mx-0">
        شروع انتخاب
      </Button>
    </Card>
  );
};
export default Product;

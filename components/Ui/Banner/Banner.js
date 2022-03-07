import Card from "./../Card/Card";
import Image from "next/image";
import Button from "../Button/Button";
const Banner = ({ title }) => {
  return (
    <div className="flex gap-x-2">
      <Card className="mt-0 mx-0 p-0 shadow-none rounded-none overflow-hidden w-full relative border-2 border-gray-900/20 aspect-video bg-black hidden md:block">
      <h1 className="text-4xl capitalize bottom-0 left-0 right-0 top-3/4 flex items-center px-8 absolute bg-gradient-to-t from-black  to-transparent text-white "
      style={{fontFamily:"lalezar"}}
      
      >{title}
      </h1>
      
      <img
        src="/Images/products/iphone13promaxBanner.jpg"
        alt="post"
        className="object-contain w-full h-full pt-4 object-center "
      />
    </Card>
    <Card className="mt-0 mx-0 py-0 px-0 bg-black shadow-none rounded-none overflow-hidden w-full relative border-2 border-gray-900/20   md:block aspect-video">
      <h1 className="text-4xl bg-clip-text  left-0 right-0 top-1/2 -translate-y-1/2 flex items-center px-8 absolute bg-gradient-to-t from-black  to-transparent text-white "
       style={{fontFamily:"lalezar"}}
       >
          صفحه نمایش چشم نواز
       </h1>
       <Button type="secondary-outline" className="absolute bottom-1/4 left-1/2  text-xs rounded text-white">اطلاعات بیشتر</Button>
      <img
        src="/Images/products/iphone13promaxBanner1.jpg"
        alt="post"
        className="object-contain w-full object-left pt-4 pl-4 h-full"
      />
    </Card>
    <Card className="mt-0 mx-0 py-0 px-0 shadow-none rounded-none overflow-hidden w-full relative  bg-black aspect-video hidden md:block">
      <h1 className="text-4xl bg-clip-text left-0 right-0 top-1/4 flex items-center justify-center px-8 absolute text-white " style={{fontFamily:"lalezar"}}>
        دوربین با کیفیت
      </h1>
      <img
        src="/Images/products/iphone13promaxCamera.png"
        alt="post"
        className="object-contain pl-8 pb-8 w-full h-full object-bottom"
      />
    </Card>
    </div>
  );
};

export default Banner;

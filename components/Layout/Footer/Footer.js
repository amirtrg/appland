import Card from "../../Ui/Card/Card";
import Button from "../../Ui/Button/Button";
import { memo } from "react";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-gradient-to-tr from-indigo-900 to-indigo-800 my-0 mx-0 shadow-none p-4 text-white">
      <div className=" m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  lg:w-3/4 text-center">
        <div className="text-right">
          <h3 className="text-2xl">
         اپلند
          </h3>
          <p className="text-sm text-white text-opacity-70">
           ساده ترین تجربه سفارش صنایع دستی
          </p>
        </div>
        <div className="grid grid-cols-2 ">
          <h3 className="text-lg col-span-full">تماس با ما</h3>
       
          <Button type="secondary-outline" className="text-xs m-0 px-0 py-0 hover:text-black ">مارا دنبال کنید</Button>
          <p>شماره های تماس</p>
        </div>
        <div className="grid grid-cols-2">
          <h3 className="text-xl text-center col-span-2">درباره ما</h3>
          <Link href="/about-us">درباره ما</Link>
          <p>
          تیم اپلند
          </p>
        </div>
        <div className="grid grid-cols-2 ">
          <h3 className="text-xl text-center col-span-2">خدمات</h3>
          <p>شرایط و مقررات</p>
          <p>شرایط گارانتی</p>
          <p>شرایط عودت</p>
          <p>شرایط تعویض</p>
        </div>
        <p className="text-sm col-span-full mt-4">
          تمام حقوق مادی و معنوی و محتوایی این وبسایت برای تیم اپلند محفوظ
          است
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);

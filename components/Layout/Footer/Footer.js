import Card from "../../Ui/Card/Card";
import Button from "../../Ui/Button/Button";
import { memo } from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" bg-slate-900 my-0 mx-0 shadow-none p-4 text-white dark:to-transparent dark:from-slate-900 dark:bg-gradient-to-t">
      <div className=" m-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4  lg:w-3/4 text-center">
        <div className="text-right">
          <h3 className="text-2xl font-bold">اپلند</h3>
          <p className="text-sm text-white text-opacity-70">
            ساده ترین تجربه سفارش کالای دیجیتال
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <h3 className="text-lg col-span-full">تماس با ما</h3>

          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            مارا دنبال کنید
          </Button>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            شماره های تماس
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <h3 className="text-lg text-center col-span-2">درباره ما</h3>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            درباره ما
          </Button>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            تیم اپلند
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <h3 className="text-lg text-center col-span-2">خدمات</h3>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            شرایط و مقررات
          </Button>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            شرایط گارانتی
          </Button>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            شرایط عودت
          </Button>
          <Button
            type="link"
            className="text-sm m-0 px-0 py-0 hover:text-black "
          >
            شرایط تعویض
          </Button>
        </div>
        <p className="text-xs col-span-full gap-2 mt-4">
          تمام حقوق مادی و معنوی و محتوایی این وبسایت برای تیم اپلند محفوظ است
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);

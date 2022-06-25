import Button from "../../Ui/Button/Button";
import Modal from "./../../Ui/Modal/Modal";
import NavbarItem from './NabarItem';

export default function MenuModal({onExit,isShown}) {
  return (
    <Modal className="flex flex-col" onExit={onExit} isShown={isShown}>
      <h1 className="text-2xl border-b text-white font-bold border-white/50 dark:border-white pb-2">
        اپلند
      </h1>
      <NavbarItem href="/" title="صفحه اصلی" />
      <NavbarItem href="/products" title="محصولات" />
      <NavbarItem href="/about-us" title="درباره ما" />
      <Button type="primary-outline">ورود/ثبت نام</Button>
    </Modal>
  );
}

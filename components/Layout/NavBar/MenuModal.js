import Button from "../../Ui/Button/Button";
import Modal from "./../../Ui/Modal/Modal";
import NavbarItem from './NabarItem';

export default function MenuModal({onExit}) {
  return (
    <Modal className="flex flex-col" onExit={onExit}>
      <h1 className="text-2xl border-b border-black/50  pb-2">
        گالری نصف جهان
      </h1>
      <NavbarItem href="/" title="صفحه اصلی" />
      <NavbarItem href="/products" title="محصولات" />
      <NavbarItem href="/about-us" title="درباره ما" />
      <Button type="primary-outline">ورود/ثبت نام</Button>
    </Modal>
  );
}

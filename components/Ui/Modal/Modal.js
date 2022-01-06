import Card from "../Card/Card";

const Modal = ({ children, className, onExit,isShown }) => {

  return (
    <>
      <Card className={`z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 m-0  max-w-lg transition-all ease-linear delay-500 duration-300 ${className}`}>
       {children}
      </Card>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/40 backdrop-blur z-40 cursor-pointer transition-all ease-linear delay-100 duration-150"
        onClick={onExit}
      />
    </>
  );
};

export default Modal;

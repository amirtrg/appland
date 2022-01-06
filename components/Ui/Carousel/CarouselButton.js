const NextCarouselButton = ({ onClick, direction }) => {
  const defaultStyles =
    "py-2 px-4  m-1 mx-2 capitalize transition ease-linear absolute top-0 bottom-0 bg-[#294459] bg-opacity-30 text-white my-4 rounded-md hidden md:flex overflow-hidden items-center";
  let styles;
  let iconSrc;
  switch (direction) {
    case "next":
      styles = `${defaultStyles} rounded-tl-none rounded-bl-none`;
      iconSrc = "./Images/Index/Carousel-Images/nextIcon.svg";
      break;
    case "perv":
      styles = `${defaultStyles} rounded-tr-none rounded-br-none left-0`;
      iconSrc = "./Images/Index/Carousel-Images/prevIcon.svg";
      break;
    default:
      styles = defaultStyles;
      break;
  }

  return (
    <button className={styles} onClick={onClick}>
      <img src={iconSrc} alt={direction} className="w-3/4"/>
    </button>
  );
};

export default NextCarouselButton;

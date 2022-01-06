import Link from "next/link";
import Card from "../Card/Card";

const handleDragStart = (e) => e.preventDefault();
const CarouselItem = (props) => {
  return (
    <Link href={props.link}>
      <a>
        <Card className="mx-4 p-0 aspect-video overflow-hidden shadow-none flex items-center justify-center  transition-shadow sm:mx-2 ease-linear cursor-pointer rounded-md">
        <img
          src={props.imgSrc}
          onDragStart={handleDragStart}
          role="presentation"
          className="w-full h-full mx-auto "
        />
        </Card>
      </a>
    </Link>
  );
};
export default CarouselItem;

import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Ui/Banner/Banner";
import Carousel from "../components/Ui/Carousel/Carousel";
import Container from "./../components/Ui/Container/Container";
import Product from "./../components/Products/Product";


const iphoneProducts = [
  {
    isNew: true,
    title: "آیفون 13 پرومکس",
    brand: "apple",
    imgSrc: "/Images/products/iphone13promax.jpg",
    price: { min: 40_000_000, max: 72_000_000 },
    ram: {
      min: "3",
      max: "6",
    },
    memory: {
      min: "128",
      max: "2",
    },
  }
   , {
      isNew: true,
      title: "آیفون 13 پرو",
      brand: "apple",
      imgSrc: "/Images/products/iphone13promax.jpg",
      price: { min: 33_500_000, max: 38_000_000 },
      ram: {
        min: "4",
        max: "6",
      },
      memory: {
        min: "128",
        max: "1",
      },
  },
  {
    isNew: true,
    title: "آیفون 13",
    brand: "apple",
    imgSrc: "/Images/products/iphone13promax.jpg",
    price: { min: 26_000_000, max: 32_000_000 },
    ram: {
      min: "4",
    },
    memory: {
      min: "128",
      max: "512",
    },
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>اپلند-صفحه اصلی</title>
        <meta name="theme-color" content="#fefefe" />
      </Head>
      <Layout headerTransparent>
        {/* <Carousel /> */}
        <Banner title="قوی تر و زیبا تر از همیشه" />
        <Container>
          <h1 className="text-4xl pt-8 pb-4 dark:text-white">جدید ترین محصولات</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full lg:gap-4 xl:gap-2 gap-2 ">
          <Product isNew={iphoneProducts[0].isNew} title={iphoneProducts[0].title} brand={iphoneProducts[0].brand} imgSrc={iphoneProducts[0].imgSrc} price={iphoneProducts[0].price} ram={iphoneProducts[0].ram} memory={iphoneProducts[0].memory} />
            <Product isNew={iphoneProducts[1].isNew} title={iphoneProducts[1].title} brand={iphoneProducts[1].brand} imgSrc={iphoneProducts[1].imgSrc} price={iphoneProducts[1].price} ram={iphoneProducts[1].ram} memory={iphoneProducts[1].memory} />
            <Product isNew={iphoneProducts[2].isNew} title={iphoneProducts[2].title} brand={iphoneProducts[2].brand} imgSrc={iphoneProducts[2].imgSrc} price={iphoneProducts[2].price} ram={iphoneProducts[2].ram} memory={iphoneProducts[2].memory} />
          </div>
        </Container>
      </Layout>
    </>
  );
}

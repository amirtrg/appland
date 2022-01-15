import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Ui/Banner/Banner";
import Carousel from "../components/Ui/Carousel/Carousel";
import Container from "./../components/Ui/Container/Container";
import Product from "./../components/Products/Product";

export default function Home() {
  return (
    <>
      <Head>
        <title>اپلند-صفحه اصلی</title>
        <meta name="theme-color" content="#fefefe" />
      </Head>
      <Layout>
        {/* <Carousel /> */}
        <Banner title="قوی تر و زیبا تر از همیشه" />
        <Container>
          <h1 className="text-4xl pt-8 pb-4 dark:text-white">جدید ترین محصولات</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full lg:gap-4 xl:gap-2 gap-2 ">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </Container>
      </Layout>
    </>
  );
}

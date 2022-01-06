import Head from "next/head";
import Product from "../../components/Products/Product";
import Container from "../../components/Ui/Container/Container";

import Layout from './../../components/Layout/Layout';

export default function products() {
  return (
    <>
      <Head>
        <title>products</title>
        <meta name="theme-color" content="#fff" />
      </Head>
      <Layout>
      <Container>
       <h1>
           محصولات
       </h1>
       <div className="grid sm:grid-cols-2 md:grid-cols-3  w-full lg:gap-2 gap-1 ">
        <Product />
          <Product />  
        <Product /> <Product />
          <Product />  
        <Product />
        </div>
      </Container>
      </Layout>
    </>
  );
}

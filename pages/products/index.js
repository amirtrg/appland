import Head from "next/head";
import Product from "../../components/Products/Product";
import Container from "../../components/Ui/Container/Container";
import Layout from "./../../components/Layout/Layout";
import { useState } from "react";
import SortIcon from "./../../components/Ui/icons/SortIcon";
import Card from "./../../components/Ui/Card/Card";
import Button from "../../components/Ui/Button/Button";

import path from 'path'
import fs from 'fs/promises';

const array = [
  { name: "اولی", price: 30_000, marketVolume: 1000 },
  { name: "دومی", price: 40_000, marketVolume: 100 },
  { name: "سومی", price: 10_000, marketVolume: 500 },
  { name: "چهارمی", price: 60_000, marketVolume: 400 },
  { name: "پنجمی", price: 55_000, marketVolume: 4 },
  { name: "ششمی", price: 65_000, marketVolume: 3 },
  { name: "هفتمی", price: 78_000, marketVolume: 2 },
  { name: "هشتمی", price: 70_000, marketVolume: 1 },
];

export default function Products({iphoneProducts}) {
  const [finalArray, setFinalArray] = useState(array);

  const sorterFunc = (sortBy, mode) => {
    let defaultArray = [...array];
    if (mode === "decrease" || mode === "increase") {
      defaultArray.sort(function (a, b) {
        if (mode === "decrease") {
          return a[sortBy] > b[sortBy] ? 1 : -1;
        }
        if (mode === "increase") {
          return a[sortBy] > b[sortBy] ? -1 : 1;
        }
      });
      setFinalArray(defaultArray);
    } else {
      setFinalArray(array);
    }
  };

  const [active, setActive] = useState({
    lastPrice: null,
    last24Changes: null,
    marketVolume: null,
  });

  const activator = (string) => {
    switch (active[string] || null) {
      case null:
        setActive({ [string]: "increase" });
        sorterFunc(string, "increase");
        break;
      case "increase":
        setActive({ [string]: "decrease" });
        sorterFunc(string, "decrease");
        break;
      case "decrease":
        setActive({ [string]: null });
        sorterFunc(string);
        break;
    }
  };

  return (
    <>
      <Head>
        <title>products</title>
        <meta name="theme-color" content="#fff" />
      </Head>
      <Layout>
        <Container>
          <div className="flex justify-between py-4">
            <h1 className="dark:text-white text-3xl font-bold">محصولات</h1>
            <button
              className="flex items-center text-xs xl:text-sm text-gray-100"
              onClick={() => {
                activator("price");
              }}
            >
              قیمت
              <SortIcon active={active["price"]} />
            </button>
            <button
              className="flex items-center text-xs xl:text-sm text-gray-100"
              onClick={() => {
                activator("marketVolume");
              }}
            >
              موجودی
              <SortIcon className="mr-1" active={active["marketVolume"]} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3  w-full lg:gap-2 gap-1 ">
            {finalArray.map((product) => (
              <Card
                className="dark:bg-[#222] text-white my-0 mx-0 flex flex-col gap-4"
                key={Math.random()}
              >
                <div className="flex justify-between">
                  <h1 className="text-2xl font-black">{product.name}</h1>
                  <p>موجودی: {product.marketVolume}</p>
                </div>
                <p className="">{product.price} تومان</p>
                <Button type="primary">خرید</Button>
              </Card>
            ))}

           
            <Product isNew={iphoneProducts[0].isNew} title={iphoneProducts[0].title} brand={iphoneProducts[0].brand} imgSrc={iphoneProducts[0].imgSrc} price={iphoneProducts[0].price} ram={iphoneProducts[0].ram} memory={iphoneProducts[0].memory} />
            <Product isNew={iphoneProducts[1].isNew} title={iphoneProducts[1].title} brand={iphoneProducts[1].brand} imgSrc={iphoneProducts[1].imgSrc} price={iphoneProducts[1].price} ram={iphoneProducts[1].ram} memory={iphoneProducts[1].memory} />
            <Product isNew={iphoneProducts[2].isNew} title={iphoneProducts[2].title} brand={iphoneProducts[2].brand} imgSrc={iphoneProducts[2].imgSrc} price={iphoneProducts[2].price} ram={iphoneProducts[2].ram} memory={iphoneProducts[2].memory} />
           
          </div>
        </Container>
      </Layout>
    </>
  );
}
export async function getStaticProps(){
  const filePath=path.join(process.cwd(),'data','Dummy-Backend.json')
  const JsonData=await fs.readFile(filePath)
  const data = JSON.parse(JsonData)
  console.log("revalidate")
  return {
    props:{
     iphoneProducts:data.iphoneProducts
    },
  }
}
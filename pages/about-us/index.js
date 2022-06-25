import Layout from "./../../components/Layout/Layout";
import Container from "./../../components/Ui/Container/Container";
import useAboutUs from "./../../utils/Hooks/useAboutUs";
import Card from "./../../components/Ui/Card/Card";
import Button from "./../../components/Ui/Button/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

const AboutUs = () => {
  const consoler = () => {
    return (
      <Card className="bg-gray-50 shadow-lg shadow-gray-200/50 flex dark:bg-[#222] dark:shadow-none">
        <Link href="/" passHref>
          <Button type="primary">بازگشت به صفحه اصلی</Button>
        </Link>
      </Card>
    );
  };

  const { render } = useAboutUs({  func: consoler });
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <>
      <Head>
        <title>درباره ما</title>
        <meta name="theme-color" content="#fefefe" />
      </Head>
      <Layout>
        <Container>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            className="font-bold text-3xl dark:text-white"
          >
            درباره ما
          </motion.h1>
          <motion.div variants={variants} initial="hidden" animate="visible">
            {render}
          </motion.div>
        </Container>
      </Layout>
    </>
  );
};

export default AboutUs;

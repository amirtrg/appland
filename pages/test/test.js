import Container from "../../components/Ui/Container/Container";
import Layout from "./../../components/Layout/Layout";
import Heading from "./../../components/Ui/Texts/Heading";
import Button from "./../../components/Ui/Button/Button";
const Test = () => {
  return (
    <Layout footer={false}>
      <Container>
        <Heading type="h1">تست هدینگ1</Heading>
        <Heading type="h2">تست هدینگ 2</Heading>
        <Heading type="h3">تست هدینگ 3</Heading>
        <Heading type="h4">تست هدینگ 4</Heading>
        <Heading type="h5">تست هدینگ 5</Heading>
        <Heading type="h6">تست هدینگ 6</Heading>
        <Heading>تست هدینگ 7</Heading>
        <Button type="primary">shit</Button>
      </Container>
    </Layout>
  );
};

export default Test;

import { Flex, Heading } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
export default function Product() {
  return (
    <Layout
      title="CSC Product"
      description="Page dedicated to learning about CSC products"
      twitter=""
      openGraph="og:product"
    >
      <Flex flexDir="row" justifyContent="center">
        <Heading>What Community Solar Can Do For You?</Heading>
      </Flex>
      <br />
      <Flex flexDirection="column">
        Ea et et incididunt do dolore nostrud laboris culpa nisi do do deserunt
        consectetur velit. Pariatur in duis est exercitation nulla duis. Aute
        cupidatat dolore ad amet. Culpa sunt nulla est nulla adipisicing cillum
        proident ex qui enim nisi minim quis. Est reprehenderit ullamco ipsum
        voluptate labore esse.
      </Flex>
    </Layout>
  );
}

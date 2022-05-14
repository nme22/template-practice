import { Flex, Heading } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
export default function Company() {
  return (
    <Layout
      title="CSC Company"
      description="Page dedicated to learning about CSC "
      twitter=""
      openGraph="og:company"
    >
      <Flex flexDir="row" justifyContent="center">
        <Heading>About Community Solar Circle</Heading>
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

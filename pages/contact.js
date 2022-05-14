import { Flex, Heading, Box } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
import { motion } from 'framer-motion';
export default function Contact() {
  return (
    <Layout
      title="CSC Contact"
      description="Page dedicated to contacting CSC"
      twitter=""
      openGraph="og:contact"
    >
      <motion.div
        animate={{
          x: 0,
          y: 0,
          scale: 1.1,
          rotate: 0,
        }}
      >
        <Flex flexDir="row" justifyContent="center">
          <Heading>See If Community Solar is Right For You!</Heading>
        </Flex>
      </motion.div>
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

import { Flex, Heading } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
import Image from '@components/Image';
import { motion } from 'framer-motion';

export default function Index() {
  return (
    <Layout
      title="CSC Homepage"
      description="Page dedicated to marketing CSC"
      twitter=""
      openGraph="og:homepage"
    >
      <Flex direction="row" justifyContent="center" color="" p={1}>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: -10,
          }}
          transition={{ ease: 'easeInOut', duration: 2 }}
        >
          <Heading size="lg" fontFamily="Mono">
            "New Jersey's Best Solar Solution"
          </Heading>
        </motion.div>
      </Flex>
      {/* <Image
        width="200px"
        height="200px"
        src="https://via.placeholder.com/200"
        alt="placeholder picture"
      /> */}
      Ea et et incididunt do dolore nostrud laboris culpa nisi do do deserunt
      consectetur velit. Pariatur in duis est exercitation nulla duis. Aute
      cupidatat dolore ad amet. Culpa sunt nulla est nulla adipisicing cillum
      proident ex qui enim nisi minim quis. Est reprehenderit ullamco ipsum
      voluptate labore esse. Ea et et incididunt do dolore nostrud laboris culpa
      nisi do do deserunt consectetur velit. Pariatur in duis est exercitation
      nulla duis. Aute cupidatat dolore ad amet. Culpa sunt nulla est nulla
      adipisicing cillum proident ex qui enim nisi minim quis. Est reprehenderit
      ullamco ipsum voluptate labore esse. Ea et et incididunt do dolore nostrud
      laboris culpa nisi do do deserunt consectetur velit. Pariatur in duis est
      exercitation nulla duis. Aute cupidatat dolore ad amet. Culpa sunt nulla
      est nulla adipisicing cillum proident ex qui enim nisi minim quis. Est
      reprehenderit ullamco ipsum voluptate labore esse.
    </Layout>
  );
}

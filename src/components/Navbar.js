import { Flex, Text, Box } from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import Link from '@components/Link';

export default function Navbar() {
  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <ThemeTogglebutton />
        <Text pl={3}>Community Solar Circle</Text>
      </Flex>
      <Box>
        <Link m={4} href="/">
          Home
        </Link>
        <Link m={4} href="/company">
          Company
        </Link>
        <Link m={4} href="/product">
          Product
        </Link>
        <Link m={4} href="/contact">
          Contact
        </Link>
      </Box>
    </Flex>
  );
}

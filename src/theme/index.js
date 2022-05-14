import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  components: {
    Layout: {
      body: {
        background: 'red',
      },
    },
  },
});

export default theme;

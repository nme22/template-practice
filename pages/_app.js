import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider resetCSS>
          <DefaultSeo
            title="Community Solar"
            description="CSC Website"
            url=""
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;

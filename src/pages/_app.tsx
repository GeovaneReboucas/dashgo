import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "../../node_modules/next/app";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { theme } from "../styles/theme";

import { ReactQueryDevtools } from 'react-query/devtools';
import { makeServer } from "../services/mirage";
import { QueryClientProvider } from 'react-query';
import { queryClient } from "../services/queryClient";

if(process.env.NODE_ENV == 'development'){
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>

  )
}
export default MyApp

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "../../node_modules/next/app";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>

  )
}
export default MyApp

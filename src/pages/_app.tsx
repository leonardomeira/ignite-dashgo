import { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/sidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp;
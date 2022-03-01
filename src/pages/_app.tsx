import { ChakraProvider } from "@chakra-ui/react"
import { UserAttempProvider } from "../contexts/UserAttempContext"

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserAttempProvider>
        <Component {...pageProps} />
      </UserAttempProvider>
    </ChakraProvider>
  );
}

export default MyApp

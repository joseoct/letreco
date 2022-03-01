import { UserWordProvider } from "../contexts/UserWordContext"

function MyApp({ Component, pageProps }) {
  return (
    <UserWordProvider>
      <Component {...pageProps} />
    </UserWordProvider>
  )
}

export default MyApp

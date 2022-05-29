import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { TokenUmbrelllaProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <TokenUmbrelllaProvider>
        <Component {...pageProps} />
      </TokenUmbrelllaProvider>
    </MoralisProvider>
  )
}

export default MyApp

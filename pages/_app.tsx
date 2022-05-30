import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TokenUmbrellaProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <TokenUmbrellaProvider>
        <Component {...pageProps} />
      </TokenUmbrellaProvider>
    </MoralisProvider>
  )
}

export default MyApp

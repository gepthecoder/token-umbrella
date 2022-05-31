import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TokenUmbrellaProvider } from '../context/context'
import { GunProvider } from '../context/gunContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <GunProvider>
        <TokenUmbrellaProvider>
          <Component {...pageProps} />
        </TokenUmbrellaProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp

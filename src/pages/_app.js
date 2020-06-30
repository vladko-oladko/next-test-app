import { SWRConfig } from 'swr'
import fetcher from '../services/fetcher'

function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        fetcher
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
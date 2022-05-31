// COMPONENTS
import Header from '../components/Header'
import Trending from '../components/Trending'
import CmcTable from '../components/cmc-table/CmcTable'
import SwapCryptoModal from '../components/SwapCryptoModal'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <SwapCryptoModal />
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CmcTable />
    </div>
  )
}
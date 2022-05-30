import type { NextPage } from 'next'

// COMPONENTS
import Header from '../components/Header'
import Trending from '../components/Trending'
import CmcTable from '../components/cmc-table/CmcTable'
import SwapCryptoModal from '../components/SwapCryptoModal'

const Home: NextPage = () => {
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

export default Home

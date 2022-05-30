// ASSETS and IMAGES
import Image from 'next/image'

import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import usdc from '../assets/usdc.png'
import usdt from '../assets/usdt.png'
import xrp from '../assets/xrp.png'
import cardano from '../assets/cardano.png'
import tera from '../assets/tera.png'
import solana from '../assets/solana.png'
import avalanche from '../assets/avalanche.png'
import bnb from '../assets/bnb.png'


const styles = {
    coinDetails: `min-h-screen text-white`,
    coinDetailsLinks: `flex mt-3 flex-wrap`,
    greyBtn: `mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl`,
    borderLeft: `ml-10 pl-5 w-full border-l border-gray-800`,
    title: `text-gray-400 whitespace-nowrap mr-2`,
    coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
    coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl`,
    coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
    coinRates: `w-full flex items-start justify-between`,
    flexBetween: `flex justify-between`,
}

const CoinDetails = ({ coinName, coinSymbol, price }) => {
    const coinIcon = () => {
        switch (from) {
          case 'Bitcoin':
            return (
              <Image
                src={btc}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'Ethereum':
            return (
              <Image
                src={eth}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'Tether':
            return (
              <Image
                src={usdt}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'BNB':
            return (
              <Image
                src={bnb}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'USD Coin':
            return (
              <Image
                src={usdc}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'XRP':
            return (
              <Image
                src={xrp}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'Cardano':
            return (
              <Image
                src={cardano}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'Terra':
            return (
              <Image
                src={tera}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'Solana':
            return (
              <Image
                src={solana}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          case 'Avalanche':
            return (
              <Image
                src={avalanche}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
    
          default:
            return (
              <Image
                src={btc}
                className='rounded-full'
                width={50}
                height={50}
                alt=''
              />
            )
        }
    }

    return (
        <div>CoinDetails</div>
    )
}

export default CoinDetails
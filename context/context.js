import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'

import {
    dogeAbi,
    daiAbi,
    linkAbi,
    usdcAbi,
    dogeAddress,
    linkAddress,
    daiAddress,
    usdcAddress,
  } from '../lib/constants'

export const TokenUmbrellaContext = createContext()

export const TokenUmbrellaProvider = ({ children }) => {

    const { isAuthenticated, user, Moralis } = useMoralis()

    const [currentAccount, setCurrentAccount] = useState('')
    // Modal for swaping tokens
    const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
    // Tokens swap handling
    const [fromToken, setFromToken] = useState('ETH')
    const [toToken, setToToken] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        if (isAuthenticated) {
          const account = user.get('ethAddress')
          setCurrentAccount(account)
        }
    }, [isAuthenticated])

    const getContractAddress = () => {
        if (fromToken === 'Dai') return daiAddress
        if (fromToken === 'Dogecoin') return dogeAddress
        if (fromToken === 'Link') return linkAddress
        if (fromToken === 'usdc') return usdcAddress
    }
    
    const getToAddress = () => {
        if (toToken === 'Dai') return daiAddress
        if (toToken === 'Dogecoin') return dogeAddress
        if (toToken === 'Link') return linkAddress
        if (toToken === 'Usdc') return usdcAddress
    }
    
    const getToAbi = () => {
        if (toToken === 'Dai') return daiAbi
        if (toToken === 'Dogecoin') return dogeAbi
        if (toToken === 'Link') return linkAbi
        if (toToken === 'Usdc') return usdcAbi
    }

    const getTopTenCoins = async () => {
        try {
          const res = await fetch('/api/getTopTen')
          const data = await res.json()
          return data.data.data
        } catch (e) { console.log(e.message) }
    }

    // TODO: mint function

    return(
        <TokenUmbrellaContext.Provider
            value= {{
                getTopTenCoins,
            }}
        >
            {children}
        </TokenUmbrellaContext.Provider>
    )
}
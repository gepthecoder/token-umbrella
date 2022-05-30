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

    // Todo: Get contract addresses

    const getTopTenCoins = async () => {
        try {
          const res = await fetch('/api/getTopTen')
          const data = await res.json()
          return data.data.data
        } catch (e) { console.log(e.message) }
    }

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
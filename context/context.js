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
    
    // Moralis query for coins
    const {
        data: coins,
        error,
        isLoading: loadingCoins,
    } = useMoralisQuery('Coins')

    console.log(loadingCoins, '♻')

    const [currentAccount, setCurrentAccount] = useState('')
    // Modal for swaping tokens
    const [openBuyCryptoModal, setOpenBuyCryptoModal] = useState(false)
    // Tokens swap handling
    const [fromToken, setFromToken] = useState('')
    const [toToken, setToToken] = useState('Dai')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        if (isAuthenticated) {
          const account = user.get('ethAddress')
          setCurrentAccount(account)
          console.log('user is authenticated!', '✅')
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

    const openModal = () => {
        setOpenBuyCryptoModal(true)
    }

    //Mint function for the token with send ether to the contract
    const mint = async () => {
        try {
            if (fromToken === 'ETH') {
                if (!isAuthenticated) return

                await Moralis.enableWeb3()

                const contractAddress = getToAddress()
                const abi = getToAbi()

                let options = {
                    contractAddress: contractAddress,
                    functionName: 'mint',
                    abi: abi,
                    params: {
                        to: currentAccount,
                        amount: Moralis.Units.Token(amount),
                    },
                }
                sendEth()
                const transaction = await Moralis.executeFunction(options)
                // specify how many blocks does it needs to take for transaction to complete
                const receipt = await transaction.wait(4)
                console.log(receipt)
            } else { swapTokens() }
        } catch (error) { console.error(error.message) }
    }

    //Send eth function
    const sendEth = async () => {
        if (!isAuthenticated) return
        const contractAddress = getToAddress()

        let options = {
            type: 'native',
            amount: Moralis.Units.ETH('0.01'),
            receiver: contractAddress,
        }
        const transaction = await Moralis.transfer(options)
        // await - web3 | wait - web3
        const receipt = await transaction.wait()
        console.log(receipt)
    }

    const swapTokens = async () => {
        try {
            if (!isAuthenticated) return
            await Moralis.enableWeb3()
        
            if (fromToken === toToken) return alert('You cannot swap the same token')
        
            const fromOptions = {
                type: 'erc20',
                amount: Moralis.Units.Token(amount, '18'),
                receiver: getContractAddress(),
                contractAddress: getContractAddress(),
            }
            const toMintOptions = {
                contractAddress: getToAddress(),
                functionName: 'mint',
                abi: getToAbi(),
                params: {
                to: currentAccount,
                amount: Moralis.Units.Token(amount, '18'),
                },
            }
            let fromTransaction = await Moralis.transfer(fromOptions)
            let toMintTransaction = await Moralis.executeFunction(toMintOptions)

            let fromReceipt = await fromTransaction.wait()
            let toReceipt = await toMintTransaction.wait()

            console.log(fromReceipt, '💱')
            console.log(toReceipt, '💱')
            } catch (error) { console.error(error.message) }
      }

    return(
        <TokenUmbrellaContext.Provider
            value= {{
                getTopTenCoins,
                openBuyCryptoModal,
                setOpenBuyCryptoModal,
                coins,
                loadingCoins,
                fromToken,
                toToken,
                setFromToken,
                setToToken,
                amount,
                setAmount,
                mint,
                openModal,            
            }}
        >
            {children}
        </TokenUmbrellaContext.Provider>
    )
}
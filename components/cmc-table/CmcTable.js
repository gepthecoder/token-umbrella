import { useContext, useEffect, useState, useCallback } from 'react'

// ASSETS
import btc from '../../assets/btc.png'

// CONTEXT
import { TokenUmbrellaContext } from '../../context/context'

const CmcTable = () => {
    let { getTopTenCoins } = useContext(TokenUmbrellaContext)

    let [coinData, setCoinData] = useState(null)

    useEffect(() => {
        setData()
      }, [])

    const setData = useCallback(async () => {
        try {
            let apiResponse = await getTopTenCoins()
            let filteredResponse = []
        
            for (let i = 0; i < apiResponse.length; i++) {
                const element = apiResponse[i]
                if (element.cmc_rank <= 10) filteredResponse.push(element)
            }
    
            setCoinData(filteredResponse)
        } catch (e) { console.log(e.message) }
        console.log(coinData, '🧿')
    }, [getTopTenCoins])

  return (
    <div>CmcTable</div>
  )
}

export default CmcTable
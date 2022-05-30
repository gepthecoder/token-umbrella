// COMPONENTS
import Header from "../../components/Header"
import CoinDetails from "../../components/CoinDetails"

//HOOKS
import { useState, useEffect } from "react"

const Price = () => {
    const [coinName, setCoinName] = useState('')
    const [coinSymbol, setCoinSymbol] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString(0));
        setCoinSymbol(urlParams.get('symbol'));
    }

    return <div>
        <Header />
        <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol} />
    </div>
}

export default Price
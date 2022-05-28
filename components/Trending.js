import { useState } from "react"

// ICONS
import fire from "../assets/fire.png"
import btc from "../assets/btc.png"
import usdt from "../assets/usdt.png"
import gainers from "../assets/gainers.png"
import recent from "../assets/recent.png"

// HIGHLIGHT BUTTON
import ReactSwitch from "react-switch"

import Rate from "./cmc-table/Rate"

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl text-white`,
    flexCenter: `flex items-center,`
}

const Trending = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="text-white">
        <div className={styles.trendingWrapper}>
            <div className="flex justify-between">
                <h1 className={styles.h1}>All Cryptocurrencies Under One Umbrella</h1>

                <div className="flex">
                    <p className="text-gray-400 ">Highlights &nbsp;</p>
                    <ReactSwitch checked={checked} onChange={() => { setChecked(!checked) }} />
                </div>
            </div>
            <br />
            <div className="flex">
                <p>The global crypto market cap is $1.74T, a &nbsp; </p>
                <span> <Rate isIncrement={true} rate='0.53%' /> </span>
                <p> &nbsp; decrease over the last day. <span className="underline">Read More</span> </p>
            </div>
            <br />
        </div>
    </div>
    )
}

export default Trending
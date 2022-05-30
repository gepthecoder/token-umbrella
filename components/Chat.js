import { useState, useContext, useEffect } from 'react'

import Image from 'next/image'

// ASSETS
import shiba from '../assets/shiba.png'
import ChevronDown from '../assets/svg/chevronDown'
import ChevronUp from '../assets/svg/chevronUp'

// COMPONENTS
import Button from './Button'
import ChatCard from './ChatCard'


const styles = {
    bullishLabel: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 h-min px-2 rounded-lg`,
    bearishLabel: `flex cursor-pointer active:bg-red-500 items-center text-[#EA3943] border border-red-600 h-min px-2 rounded-lg`,
    input: `w-full bg-[#323546] p-4 outline-none rounded-xl`,
    chatContainer: `p-5 bg-[#222531] rounded-xl max-h-ful`,
    flexBetween: `flex justify-between`,
    flexCenter: `flex justify-center items-center`,
    chat: `max-w-lg min-w-full`,
    postButtonContainer: `flex align-center justify-end`,
    boldText: `font-bold`,
  
    activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
    activeBearishLabel: `flex cursor-pointer bg-red-500 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
}

const Chat = () => {

    const [message, setMessage] = useState('')
    const [bullishValue, setBullishValue] = useState(true)

    const sendMessage = () => {

    }

    return (
    <>
        <div className={styles.chat}>
            <div className={styles.flexBetween}>
                <p className={styles.boldText}>Live Shiba Inu Chat</p>
                <p className='text-[#6188FF]'>See more</p>
            </div>

            <br />

            <div className={styles.chatContainer}>
                <div className={styles.flexBetween}>
                    <div className={styles.flexCenter}>
                        <div>
                            <Image alt='' src={shiba} width={70} height={70} />
                        </div>
                        <div className='text-left mr-10'>
                            <b>G3P</b>
                            <p className='text-gray-400'>@g3pgames</p>
                        </div>
                    </div>

                    <div className={styles.flexCenter}>
                        <div
                            className={
                                !bullishValue
                                ? styles.bullishLabel
                                : styles.activeBullishLabel
                            }
                            onClick={() => setBullishValue(true)}
                            >
                            <ChevronUp fill='#17C784' />
                            <small className='ml-1'>Bullish</small>
                            </div>
                            &nbsp; &nbsp;
                            <div
                                className={
                                    bullishValue ? styles.bearishLabel : styles.activeBearishLabel
                                }
                                onClick={() => setBullishValue(false)}
                                >
                                <ChevronDown fill='#a52b2b' />
                                <small className='ml-1'>Bearish</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className='flex'>
            <div className='flex items-center text text-green-600'>
                <ChevronUp fill='#22bc64' />
                <small className='ml-1'>Bullish</small>
            </div>
            &nbsp; &nbsp;
            <div className='flex items-center text-red-500'>
                <ChevronDown fill='#a52b2b' />
                <small className='ml-1'>Bearish</small>
            </div>
        </div>

        <input
            className={styles.input}
            placeholder="What's happening on BTC?"
            value={message}
            onChange={e => setMessage(e.target.value)}
        />

        <div className={styles.postButtonContainer}>
            <Button label='Post' onPress={sendMessage} />
        </div>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>

    </>
    )
}

export default Chat
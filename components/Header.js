import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[20px]`,
    navLink: `text-white flex mx-[10px]`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    nav: `flex justify-center items-center gap-[20px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,
    cursorPointer: `mr-5 cursor-pointer`,
}

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        alt=''
        src='https://i.ibb.co/37hzSt0/token-umbrella.png'
        width={220}
        height={100}
      />
        <div className={styles.headerWrapper}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.navLink}>Cryptocurrencies</div>
                    <div className={styles.badge} />
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Exchanges</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>NFT</div>
                    <div className={styles.badge} />
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Cryptown</div>
                    <div className={styles.badge} />
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Portfolio</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Watchlist</div>
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Products</div>
                    <div className={styles.badge} />
                </div>

                <div className={styles.navItem}>
                    <div className={styles.navLink}>Learn</div>
                </div>
            </nav>
            <div className='flex items-center'>
                {/* <ConnectButton /> */}
                <div className={styles.inputContainer}>
                    <Search />
                    <input className={styles.input} placeholder='Search' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import { createContext, useState, useEffect } from 'react'


export const TokenUmbrellaContext = createContext()

export const TokenUmbrellaProvider = ({ children }) => {

    const getTopTenCoins = async () => {
        try {
          const res = await fetch('/api/getTopTen')
          const data = await res.json()
          return data.data.data
        } catch (e) {
          console.log(e.message)
        }
    }

    return(
        <TokenUmbrellaContext.TokenUmbrellaProvider
            value= {{
                getTopTenCoins
            }}
        >
            {children}
        </TokenUmbrellaContext.TokenUmbrellaProvider>
    )
}
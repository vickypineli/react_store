import { createContext, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
  console.log('count',count)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
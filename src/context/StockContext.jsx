import { createContext, useState } from "react";
import PropTypes from 'prop-types'
export const StockContext = createContext({})

StockContextProvider.propTypes = {
  children: PropTypes.node
}
export function StockContextProvider({children}) {
  const [items, setItems] = useState(() => {
    const stockItems = localStorage.getItem('items');
    if (!stockItems) return [];
    const items = JSON.parse(stockItems);

    // Convert createdAt and updatedAt from string to date.
    items.forEach(item => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    })

    return items
  })

  const addItem = (item) => {
    setItems(currentStock => {
      const newStock = [...currentStock, item]
      localStorage.setItem('items', JSON.stringify(newStock))
      return newStock
    })
  }

  const stock = {
    items,
    addItem,
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}


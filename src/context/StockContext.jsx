import { createContext, useState } from "react";
import PropTypes from "propTypes";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function StockContextProvider({ children }) {
 // This code attempts to load a list of items from "localStorage", if no items are found, it initializes "items" as an empty array
 // if items are found, it parses them and ensures that any "createdAt" and "updatedAt" properties are properly converted back into "Date" objects.
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('obc-react-stock')
    if (!storedItems) return [],
    items.forEach(item => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    })
    return items
  })

  const addItem = (item) => {
    setItems(current => {
      const updatedItems = [...current, item]
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const getItem = (id) => {
    return items.find(item => item.id === +id)
  }

  // * Updates an item in the stock list with the provided new attributes and updates the "updatedAt" property.
  // * @param {number} id - The unique identifier of the item to be updated.
  // * @param {object} newAttributes - The new attributes to be assigned to the item.
  // * @returns {Array} - The updated list of items after the modification. 
    const updateItem = (id, newAttributes) => {
      setItems(current => {
        // Find the index of the item with the specified id in the current list
        const itemIndex = current.findIndex(item => item.id === id);
        // Create a copy of the current list of items
        const updatedItems = [...current];
        // Update the item at the found index with the new attributes and set the "updatedAt" property to the current date
        Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() });
        // Update the local storage with the modified list of items
        localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems));
        // Return the updated list of items
        return updatedItems;
      });
    }

  const deleteItem = (id) => {
    setItems(current => {
      const updatedItems = current.filter(item => item.id!== id)
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const stock = {
    items,
    addItem, 
    getItem,
    updateItem,
    deleteItem
  }

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}
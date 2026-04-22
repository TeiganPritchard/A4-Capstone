import React, { createContext } from 'react'
import useItems from '../hooks/useItems'

export const ItemsContext = createContext(null)

export function ItemsProvider({ children }) {
  // TODO: initialize state and handlers (consider a custom useItems hook)
  const itemsHook = useItems()


  const value = {
    // TODO: expose items, derived list, filter state, CRUD handlers
    ...itemsHook
  }

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

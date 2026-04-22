import { useEffect, useMemo, useState } from 'react'
const STORAGE_KEY = 'a4_items'

export default function useItems(){
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [sortKey, setSortKey] = useState('name')
  const [sortDir, setSortDir] = useState('asc')
  const [minValue, setMinValue] = useState('')
  const [maxValue, setMaxValue] = useState('')

  // TODO: load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setItems(JSON.parse(saved))
      }
    } catch (e) {
      console.error('Failed to parse items from localStorage', e)
      setItems([]) 
    }
  }, [])

  
  // TODO: persist to localStorage when items change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.error('Failed to save items to localStorage', e)
    }
  }, [items])

  function addItem(data ){
    const newItem = { ...data, id: crypto.randomUUID() }
    setItems(prev => [...prev, newItem])
  }

  function updateItem(id, patch ){
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, ...patch } : item))
    )
  }
  function deleteItem( id ){
    setItems(prev => prev.filter(item => item.id !== id))
  }

  // const categories = useMemo(() => { /* TODO */ }, [items])
  const categories = useMemo(() => {
    return Array.from(new Set(items.map(i => i.category))).sort()
  }, [items])

  const derived = useMemo(() => {
    // TODO: apply search, category, min/max and sort
    let list = [...items]

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(item => String(item.name).toLowerCase().includes(q))
    }

    if (category) {
      list = list.filter(item => item.category === category)
    }

    if (minValue !== '') {
      const min = Math.max(0, Number(minValue))
      list = list.filter(item => Number(item.rating) >= min)
    }

    if (maxValue !== '') {
      const max = Math.min(10, Number(maxValue))
      list = list.filter(item => Number(item.rating) <= max)
    }

    list.sort((a, b) => {
      const va = sortKey === 'rating' ? Number(a.rating) 
               : sortKey === 'year' ? Number(a.year)
               : String(a.name).toLowerCase()

      const vb = sortKey === 'rating' ? Number(b.rating)
               : sortKey === 'year' ? Number(b.year)
               : String(b.name).toLowerCase()

      if (va < vb) return sortDir === 'asc' ? -1 : 1
      if (va > vb) return sortDir === 'asc' ? 1 : -1
      return 0
    })

    return list
  }, [items, search, category, minValue, maxValue, sortKey, sortDir])

  return {
    items, setItems,
    search, setSearch,
    category, setCategory,
    sortKey, setSortKey,
    sortDir, setSortDir,
    minValue, setMinValue,
    maxValue, setMaxValue,
    categories,
    derived,
    addItem, updateItem, deleteItem
  }
}

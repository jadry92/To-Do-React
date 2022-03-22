
import { useState, useEffect } from "react";


function useLocalStorage(itemName, initialValue) {
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [item, setItem]= useState(initialValue)
  

  useEffect( () => {
    // delay to simulate API
    setTimeout( () => {
      try {
        const itemLocalStorage = localStorage.getItem(itemName)
        let itemParse;
        if (!itemLocalStorage) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          itemParse = initialValue;
        } else {
          itemParse = JSON.parse(itemLocalStorage)
        }
        setItem(itemParse)
        setLoading(false)
      } catch(err) {
        setError(err)
      }
    },1000)
  })

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } catch (err) {
      setError(err)
    }
  }
  return {
    item, 
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };
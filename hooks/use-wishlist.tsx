"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"
import { toast } from "sonner"

interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
}

interface WishlistState {
  items: WishlistItem[]
}

type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_WISHLIST" }
  | { type: "LOAD_WISHLIST"; payload: WishlistItem[] }

const WishlistContext = createContext<{
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: number) => void
  isInWishlist: (id: number) => boolean
  clearWishlist: () => void
} | null>(null)

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case "LOAD_WISHLIST": {
      return { items: action.payload }
    }
    case "ADD_ITEM": {
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (exists) return state

      const newItems = [...state.items, action.payload]

      // Salvar no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist-items", JSON.stringify(newItems))
      }

      return { items: newItems }
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload)

      // Salvar no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist-items", JSON.stringify(newItems))
      }

      return { items: newItems }
    }
    case "CLEAR_WISHLIST":
      // Limpar localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("wishlist-items")
      }
      return { items: [] }
    default:
      return state
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] })

  // Carregar dados do localStorage quando o componente montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("wishlist-items")
      if (savedItems) {
        try {
          const parsedItems = JSON.parse(savedItems)
          dispatch({ type: "LOAD_WISHLIST", payload: parsedItems })
        } catch (error) {
          console.error("Erro ao carregar wishlist do localStorage:", error)
          localStorage.removeItem("wishlist-items")
        }
      }
    }
  }, [])

  const addItem = (item: WishlistItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
    toast.success("Adicionado aos favoritos! 💖", {
      description: item.name,
    })
  }

  const removeItem = (id: number) => {
    const item = state.items.find((item) => item.id === id)
    dispatch({ type: "REMOVE_ITEM", payload: id })
    toast.info("Removido dos favoritos", {
      description: item?.name,
    })
  }

  const isInWishlist = (id: number) => {
    return state.items.some((item) => item.id === id)
  }

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}

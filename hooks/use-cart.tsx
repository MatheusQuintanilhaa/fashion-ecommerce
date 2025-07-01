"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  size: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; size: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] }

const CartContext = createContext<{
  items: CartItem[]
  total: number
  addItem: (item: CartItem) => void
  removeItem: (id: number, size: string) => void
  updateQuantity: (id: number, size: string, quantity: number) => void
  clearCart: () => void
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "LOAD_CART": {
      const total = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0)
      return { items: action.payload, total }
    }

    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size,
      )

      let newItems: CartItem[]
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
        )
      } else {
        newItems = [...state.items, action.payload]
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      // Salvar no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart-items", JSON.stringify(newItems))
      }

      return { items: newItems, total }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) => !(item.id === action.payload.id && item.size === action.payload.size),
      )
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      // Salvar no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart-items", JSON.stringify(newItems))
      }

      return { items: newItems, total }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id && item.size === action.payload.size
          ? { ...item, quantity: action.payload.quantity }
          : item,
      )
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      // Salvar no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart-items", JSON.stringify(newItems))
      }

      return { items: newItems, total }
    }

    case "CLEAR_CART":
      // Limpar localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart-items")
      }
      return { items: [], total: 0 }

    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  // Carregar dados do localStorage quando o componente montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem("cart-items")
      if (savedItems) {
        try {
          const parsedItems = JSON.parse(savedItems)
          dispatch({ type: "LOAD_CART", payload: parsedItems })
        } catch (error) {
          console.error("Erro ao carregar carrinho do localStorage:", error)
          localStorage.removeItem("cart-items")
        }
      }
    }
  }, [])

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: number, size: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, size } })
  }

  const updateQuantity = (id: number, size: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, size, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        total: state.total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

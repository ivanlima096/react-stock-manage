import { RouterProvider } from "react-router-dom"
import router from "./router"
import { StockContext, StockContextProvider } from "./contexts/StockContext"

export default function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  )
}
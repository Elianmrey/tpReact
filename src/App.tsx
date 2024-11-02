import { RouterProvider } from "react-router-dom"
import routes  from "./Routes/index.tsx"
import "./App.scss";
function App() {
  
  return (
    <RouterProvider router={routes} />
  )
}

export default App

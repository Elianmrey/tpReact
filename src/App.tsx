import { RouterProvider } from "react-router-dom"
import routes from "./Routes/Index.tsx";
import "./App.scss";
function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App

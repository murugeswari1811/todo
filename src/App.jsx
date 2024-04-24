import Home from './components/home';
import Todomain from './components/todomain';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/todomain",
    element: <Todomain/>
  }])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

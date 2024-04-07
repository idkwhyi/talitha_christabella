//utils
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css'
//components
//pages
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import ErrorPage from './error-page'




function App() {

  const router = createHashRouter([
      {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "/gallery", 
        element: <Gallery/>
      }
    ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
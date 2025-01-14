import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Register from './pages/Register/Register'


function App() {

  const Routes = createBrowserRouter([
    {path:'', element:<Layout/>,children:[
      {path:'/register', element:<Register/>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={Routes}>

      </RouterProvider>
      
    </>
  )
}

export default App

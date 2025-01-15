import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Register from './pages/Register/Register'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import Login from './pages/Login/Login'
import { Toaster } from 'react-hot-toast'


function App() {

  const Routes = createBrowserRouter([
    {path:'', element:<Layout/>,children:[
      {path:'/register', element:<Register/>},
      {path:'/login', element:<Login/>},
    ]}
  ])

  return (
    <>
      <Provider store={Store}>
      <Toaster/>
      <RouterProvider router={Routes}>

      </RouterProvider>
      </Provider>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Register from './pages/Register/Register'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import Login from './pages/Login/Login'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './ProtectionLayer/ProtectedRoute'
import Home from './pages/Home/Home'
import { HelmetProvider } from 'react-helmet-async';



function App() {

  const Routes = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
      ]
    }
  ])

  return (
    <>
      <Provider store={Store}>
        <Toaster />
        <HelmetProvider>
          <RouterProvider router={Routes}>

          </RouterProvider>
        </HelmetProvider>
      </Provider>
    </>
  )
}

export default App

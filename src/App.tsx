import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Register from './pages/Register/Register'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'


function App() {

  const Routes = createBrowserRouter([
    {path:'', element:<Layout/>,children:[
      {path:'/register', element:<Register/>},
    ]}
  ])

  return (
    <>
      <Provider store={Store}>
      <RouterProvider router={Routes}>

      </RouterProvider>
      </Provider>
    </>
  )
}

export default App

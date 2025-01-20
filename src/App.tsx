import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout/Layout'
import Register from './pages/Register/Register'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import Login from './pages/Login/Login'
import  toast, { Toaster } from 'react-hot-toast'
import ProtectedRoute from './ProtectionLayer/ProtectedRoute'
import Home from './pages/Home/Home'
import { HelmetProvider } from 'react-helmet-async';
import PublicRoutes from './ProtectionLayer/PublicRoutes'
import { useIsOnline } from 'react-use-is-online';
import { useEffect, useRef } from 'react'
import { AlertCircleIcon } from 'lucide-react'
import NotFound from './pages/Not-found/Not-found'
import Settingslayout from './pages/Settings/Layout'
import ChangePassword from './pages/Login/changePassword'
import ProfilePicture from './components/ProfilePicture/ProfilePicture'


function App() {
  const {  isOffline } = useIsOnline();

  const Routes = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path:'/settings', element: <ProtectedRoute><Settingslayout /></ProtectedRoute>, children: [
          { path: '/changePassword', element:<ProtectedRoute><ChangePassword /></ProtectedRoute> },
          { path: '/ProfilePicture', element:<ProtectedRoute><ProfilePicture /></ProtectedRoute> },
        ] },
        { path: '/auth/register', element: <PublicRoutes> <Register /> </PublicRoutes> },
        { path: '/auth/login', element:<PublicRoutes> <Login /> </PublicRoutes> },
        {path: '*', element: <ProtectedRoute><NotFound /></ProtectedRoute> }
      ]
    }
  ])  


  const wasOffline = useRef(false); 
  
  useEffect(() => {
    toast.dismiss(); 

    if (isOffline) {
      toast.error(<>You are Offline {` : `}
          <button onClick={() => window.location.reload()} className="text-blue-500 underline hover:text-blue-700">
            Try Again
          </button>
        </>,{icon: <AlertCircleIcon className="text-red-700" />,duration: isOffline ? Infinity : 0}
      );
      wasOffline.current = true; 
    } else if (wasOffline.current) {
      toast.success('You are Online', { duration: 5000 });
      wasOffline.current = false; 
    }
  }, [isOffline]);



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

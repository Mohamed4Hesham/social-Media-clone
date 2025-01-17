import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

  if (Cookies.get('SocialMediaToken') !== null) {
    return children
  } else {
    return <Navigate to={'/register'} />
  }
}

export default ProtectedRoute

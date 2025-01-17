import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

  if (localStorage.getItem('SocialMediaToken') !== null) {
    return children
  } else {
    return <Navigate to={'/register'} />
  }
}

export default ProtectedRoute

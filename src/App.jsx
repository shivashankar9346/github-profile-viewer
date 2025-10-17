import React from 'react'
import Home from './components/Home'
import Users from './components/Users'
import Profile from './pages/profile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Users', element: <Users /> },
   { path: "/profile/:username", element: <Profile /> }
])

const App = () => {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
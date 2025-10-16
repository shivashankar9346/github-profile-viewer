import React from 'react'
import Home from './components/Home'
import Users from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Users', element: <Users /> }
])

const App = () => {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
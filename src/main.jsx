import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './homepage/homepage'
import Content from './homepage/content'
import Cartpage from './cartpage/cartpage'
import { ContextProvider } from './globalContext'
import ErrorPage from './errorpage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    children: [{
      path: '/category/:category',
      element: <Content />,
      errorElement: <ErrorPage />
    }]
  },
  {
    path: '/cartpage',
    element: <Cartpage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)

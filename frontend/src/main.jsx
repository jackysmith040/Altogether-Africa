import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css'
import 'normalize.css'
import App from './App'
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/get-involved",
    element: <GetInvolved />
  },
  {
    path: "/donate",
    element: <Donate />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

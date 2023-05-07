import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import CollectionPage from './pages/Collection'

interface LayoutWrapperProps {
  children: React.ReactNode
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutWrapper>
        <HomePage />
      </LayoutWrapper>
    ),
  },
  {
    path: '/collection/:address',
    element: (
      <LayoutWrapper>
        <CollectionPage />
      </LayoutWrapper>
    ),
  },
])

export default function App() {
  return <RouterProvider router={router} />
}

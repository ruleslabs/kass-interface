import styled from 'styled-components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/Home'

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
`

interface LayoutWrapperProps {
  children: React.ReactNode
}

function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
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
  }
])

export default function App() {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  )
}

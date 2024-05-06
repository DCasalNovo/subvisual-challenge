import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { MainPage } from './pages/MainPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage'
import { PokemonPage } from './pages/PokemonPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/pokemon',
    element: <PokemonPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/pokemon/:pokemonName',
        element: <MainPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

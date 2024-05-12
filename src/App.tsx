import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MainPage } from './pages/MainPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { PokemonPage } from './pages/PokemonPage.tsx'
import { PokemonInfo } from './components/PokemonInfo.tsx'

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
        element: <PokemonInfo />,
      },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}

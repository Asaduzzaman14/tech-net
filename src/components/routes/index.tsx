import { createBrowserRouter } from 'react-router-dom'
import Home from '../page/home'
import App from '../../App'
import Login from '../page/login'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])


export default routes
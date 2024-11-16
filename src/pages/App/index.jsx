import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Signin from '../Signin'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'  
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'

import '../../App.css'


const AppRouters  = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signin', element: <Signin /> },
    { path: '/my_account', element: <MyAccount /> },
    { path: '/my_orders', element: <MyOrders /> },
    { path: '/my_order', element: <MyOrder /> },
    { path: '*', element: <NotFound /> },
  ])
 return routes
}

  const App = () => {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  )
}

export default App

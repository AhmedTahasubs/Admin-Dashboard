import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/Sidebar"
import { createBrowserRouter, Link, NavLink, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
      {index:true,element:<OverviewPage/>},
      {path:'/products',element:<ProductsPage/>},
      {path:'/users',element:<UsersPage/>},
      {path:'/sales',element:<SalesPage/>},
      {path:'/orders',element:<OrdersPage/>},
      {path:'/analytics',element:<AnalyticsPage/>},
      {path:'/settings',element:<SettingsPage/>},
      {path:'/*',element:<OverviewPage/>},
    ]}
    
  ])

  return (<>
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
      <div className="absolute inset-0 backdrop-blur-sm"/>
    </div>
    <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App

import { motion } from 'framer-motion'
import { BarChart, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const items = [
    {name: "Overview",icon: BarChart,color:"#6366f1", path:"/"},
    {name: "Products",icon: ShoppingBag,color:"#8b5cf6", path:"/products"},
    {name: "Users",icon: Users,color:"#ec4899", path:"/users"},
    {name: "Sales",icon: DollarSign,color:"#10b981", path:"/sales"},
    {name: "Orders",icon: ShoppingCart,color:"#f59e0b", path:"/orders"},
    {name: "Analytics",icon: TrendingUp,color:"#3b82f6", path:"/analytics"},
    {name: "Settings",icon: Settings,color:"#6ee7b7", path:"/settings"},
  ]
  return (<>
      <motion.div className={`relative z-10 transition-all ease-in-out duration-300 flex-shrink-0 ${isSidebarOpen?"w-64":"w-20"}`} animate={{width:isSidebarOpen?256:80}}>
        <div className='h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700'>
      <div onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
      <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.5}} className='p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit'>
            <Menu size={24}/>
          </motion.button>
      </div>
          <nav className='mt-8 flex-grow'>
            {items.map((items,index)=>(
            <NavLink key={index} to={items.path}>
                <motion.div className='flex items-center p-4 text-sm font-medium rounded-lg  hover:bg-gray-700 hover:translate-x-2 mb-1 transition-all'>
                  <items.icon size={20} style={{color:items.color,minWidth:"20px"}}/>
                  {isSidebarOpen&&(
                    <motion.span className='ml-4 whitespace-nowrap' 
                    initial={{opacity:0,width:0}}
                    animate={{opacity:1,width:"auto"}}
                    exit={{opacity:0,width:0}}
                    transition={{duration:0.2,delay:0.3}}
                    >
                      {items.name}
                    </motion.span>
                  )}
                </motion.div>
            </NavLink>)
          )}
          </nav>
        </div>
      </motion.div>
    </>
  )
}

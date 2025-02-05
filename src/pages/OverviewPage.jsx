import React from 'react'
import Header from '../components/Header'
import StatusCard from '../components/StatusCard'
import { motion } from 'framer-motion'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import SalesOverviewChart from '../charts/overview/SalesOverviewChart'
import CategoryDistributionChart from '../charts/overview/CategoryDistributionChart'
import SalesChannelChart from '../charts/overview/SalesChannelChart'

export default function OverviewPage() {
  const cards =[
    {name:"Total sales", value:"1,234",color:"#6366f1"},
    {name:"New Users", value:"1,234",color:"#8b5cf6"},
    {name:"Total Products", value:"567",color:"#ec4899"},
    {name:"Conversion Rate", value:"12.5%",color:"#10b981"},
  ]
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overview"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0,y:26}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          >
            <StatusCard name={cards[0].name} icon={Zap} value={cards[0].value} color={cards[0].color}/>
            <StatusCard name={cards[1].name} icon={Users} value={cards[1].value} color={cards[1].color}/>
            <StatusCard name={cards[2].name} icon={ShoppingBag} value={cards[2].value} color={cards[2].color}/>
            <StatusCard name={cards[3].name} icon={BarChart2} value={cards[3].value} color={cards[3].color}/>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart/>
          <CategoryDistributionChart/>
          <SalesChannelChart/>
        </div>
      </main>
    </div>
  )
}

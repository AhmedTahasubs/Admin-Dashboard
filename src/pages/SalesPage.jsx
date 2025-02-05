import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import StatusCard from '../components/StatusCard'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import SalesOverviewCharts from '../charts/sales/SalesOverviewCharts'
import SalesByCategoryChart from '../charts/sales/SalesByCategoryChart'
import DailySalesTrend from '../charts/sales/DailySalesTrend'

export default function SalesPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Sales"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0,y:26}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          >
            <StatusCard name='Total Revenue' icon={DollarSign} value={"$1,234,567"} color='#6366F1' />
            <StatusCard name='Avg. Order Value' icon={ShoppingCart} value={"$78.90"} color='#10B981' />
            <StatusCard name='Conversion Rate' icon={TrendingUp} value={"3.45%"} color='#F59E0B' />
            <StatusCard name='Total Revenue' icon={CreditCard} value={"12.3%"} color='#EF4444' />
				</motion.div>
        <SalesOverviewCharts/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <SalesByCategoryChart/>
        <DailySalesTrend/>
        </div>
      </main>
    </div>
  )
}

import Header from "../components/Header";
import { motion } from 'framer-motion'
import StatusCard from '../components/StatusCard'
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductsTable from "../charts/Products/ProductsTable";
import CategoryDistributionChart from "../charts/overview/CategoryDistributionChart";
import SalesTrendChart from "../charts/Products/SalesTrendChart";
export default function ProductsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products"/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0,y:26}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          >
            <StatusCard name='Total Products' icon={Package} value={1234} color='#6366F1' />
            <StatusCard name='Top Selling' icon={TrendingUp} value={89} color='#10B981' />
            <StatusCard name='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' />
            <StatusCard name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#EF4444' />
				</motion.div>
        <ProductsTable/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <SalesTrendChart/>
        <CategoryDistributionChart/>
        </div>
      </main>
    </div>
  )
}

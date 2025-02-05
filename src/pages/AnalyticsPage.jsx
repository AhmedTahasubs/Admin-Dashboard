import AIPoweredInsights from "../charts/analytics/AIPoweredInsights";
import ChannelPerformance from "../charts/analytics/ChannelPerformance";
import CustomerSegmentation from "../charts/analytics/CustomerSegmentation";
import ProductPerformance from "../charts/analytics/ProductPerformance";
import RevenueChart from "../charts/analytics/RevenueChart";
import UserRetention from "../charts/analytics/UserRetention";
import Header from "../components/Header";
import OverviewCards from "../components/OverviewCards";
const AnalyticsPage = () => {
	return (

		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>

			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCards />
				<RevenueChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>

				<AIPoweredInsights />
			</main>
		</div>
	);
};
export default AnalyticsPage;
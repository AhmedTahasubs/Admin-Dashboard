import Notifications from "../charts/settings/Notification";
import Profile from "../charts/settings/Profile";
import Security from "../charts/settings/Security";
import Header from "../components/Header";
import ConnectedAccounts from "../charts/settings/ConnectedAccounts";
import DangerZone from "../charts/settings/DangerZone";

const SettingsPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
				<Profile />
				<Notifications />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};
export default SettingsPage;
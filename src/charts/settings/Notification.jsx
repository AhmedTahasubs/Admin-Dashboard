import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
    const [push,setPush] = useState(true)
    const [email,setEmail] = useState(false)
    const [sms,setSms] = useState(true)
	return (
		<SettingSection icon={Bell} title={"Notifications"}>
			<ToggleSwitch
				label={"Push Notifications"}
				isOn={push}
				onToggle={() => setPush(!push )}
			/>
			<ToggleSwitch
				label={"Email Notifications"}
				isOn={email}
				onToggle={() => setEmail(!email)}
			/>
			<ToggleSwitch
				label={"SMS Notifications"}
				isOn={sms}
				onToggle={() => setSms(!sms)}
			/>
		</SettingSection>
	);
};
export default Notifications;
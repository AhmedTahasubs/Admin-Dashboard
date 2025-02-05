import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import UserGrowthChart from "../charts/users/UserGrowthChart";
import UserDemographicsChart from "../charts/users/UserDemographicsChart";
import UserActivityHeatmap from "../charts/users/UserActivityHeatmap";
import UsersTable from "../charts/users/UserTable";
export default function UsersPage() {
  const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%",
  };
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatusCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatusCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatusCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatusCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>
        <UsersTable/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
}

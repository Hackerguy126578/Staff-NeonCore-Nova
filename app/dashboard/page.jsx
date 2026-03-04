import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-400">Dashboard</h2>
        {session && (
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={session.user.image} className="w-10 h-10 rounded-full" />
            <span>Welcome, {session.user.name} ▾</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a28] p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-purple-400 mb-2">Manage Servers</h3>
          <p>Configure servers, add swear words, activate raids, and manual moderation.</p>
        </div>
        <div className="bg-[#1a1a28] p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-purple-400 mb-2">View Punishments</h3>
          <p>See your punishments, reasons, and moderators per server.</p>
        </div>
        <div className="bg-[#1a1a28] p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-purple-400 mb-2">Request Revoke</h3>
          <p>Submit punishment appeals with reason to moderators.</p>
        </div>
      </div>
    </div>
  );
}

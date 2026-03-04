import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1a1a28] min-h-screen p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-purple-400 mb-6">NCN BanSync</h1>
      <Link href="/dashboard" className="hover:text-purple-300">Dashboard</Link>
      <Link href="/manage-servers" className="hover:text-purple-300">Manage Servers</Link>
      <Link href="/view-punishments" className="hover:text-purple-300">View Punishments</Link>
      <Link href="/request-revoke" className="hover:text-purple-300">Request Revoke</Link>
    </div>
  );
}

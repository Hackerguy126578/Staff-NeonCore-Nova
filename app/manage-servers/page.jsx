import { useSession } from "next-auth/react";

const servers = [
  { id: "1", name: "Server One" },
  { id: "2", name: "Server Two" },
  { id: "3", name: "Server Three" },
]; // Example placeholder, replace with API call to bot backend

export default function ManageServersPage() {
  const { data: session } = useSession();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Manage Servers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server) => (
          <div key={server.id} className="bg-[#1a1a28] p-6 rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-purple-400 mb-2">{server.name}</h3>
            <p className="mb-4 text-gray-300">Manage moderation, blacklist, and raids for this server.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
              Open Panel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

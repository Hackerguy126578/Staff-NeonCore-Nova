export default function ServerCard({ server, onClick }) {
  return (
    <div
      className="bg-[#1a1a28] p-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(server.id)}
    >
      <h3 className="text-xl font-bold text-purple-400 mb-2">{server.name}</h3>
      <p className="text-gray-300">Manage moderation, raids, and blacklist settings.</p>
    </div>
  );
}

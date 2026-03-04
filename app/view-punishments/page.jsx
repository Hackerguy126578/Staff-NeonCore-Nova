import { useState } from "react";

const servers = [
  { id: "1", name: "Server One" },
  { id: "2", name: "Server Two" },
];

const examplePunishments = [
  { user: "User123", type: "Warning", reason: "Swearing", moderator: "ModA", date: "2026-03-04" },
  { user: "User456", type: "Mute", reason: "Raid", moderator: "ModB", date: "2026-03-03" },
]; // Placeholder, replace with API call

export default function ViewPunishmentsPage() {
  const [selectedServer, setSelectedServer] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">View Punishments</h2>

      <select
        className="bg-[#1a1a28] text-white p-2 rounded-lg mb-6"
        onChange={(e) => setSelectedServer(e.target.value)}
      >
        <option value="">Select Server</option>
        {servers.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>

      {selectedServer ? (
        examplePunishments.length > 0 ? (
          <div className="grid gap-4">
            {examplePunishments.map((p, idx) => (
              <div key={idx} className="bg-[#1a1a28] p-4 rounded-xl hover:shadow-lg transition-shadow">
                <p><strong>User:</strong> {p.user}</p>
                <p><strong>Type:</strong> {p.type}</p>
                <p><strong>Reason:</strong> {p.reason}</p>
                <p><strong>Moderator:</strong> {p.moderator}</p>
                <p><strong>Date:</strong> {p.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No punishments yet.</p>
        )
      ) : (
        <p className="text-gray-300">Please select a server.</p>
      )}
    </div>
  );
}

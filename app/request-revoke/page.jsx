import { useState } from "react";

const servers = [
  { id: "1", name: "Server One" },
  { id: "2", name: "Server Two" },
];

export default function RequestRevokePage() {
  const [selectedServer, setSelectedServer] = useState("");
  const [punishment, setPunishment] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with API call to bot backend
    alert(`Revoke request submitted for server ${selectedServer}, punishment: ${punishment}, reason: ${reason}`);
    setPunishment("");
    setReason("");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Request Revoke Punishment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
        <select
          className="bg-[#1a1a28] text-white p-2 rounded-lg"
          value={selectedServer}
          onChange={(e) => setSelectedServer(e.target.value)}
          required
        >
          <option value="">Select Server</option>
          {servers.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Punishment ID or type"
          className="bg-[#1a1a28] text-white p-2 rounded-lg"
          value={punishment}
          onChange={(e) => setPunishment(e.target.value)}
          required
        />

        <textarea
          placeholder="Reason for request"
          className="bg-[#1a1a28] text-white p-2 rounded-lg"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={4}
          required
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

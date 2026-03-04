export default function PunishmentCard({ punishment }) {
  return (
    <div className="bg-[#1a1a28] p-4 rounded-xl hover:shadow-lg transition-shadow">
      <p><strong>User:</strong> {punishment.user}</p>
      <p><strong>Type:</strong> {punishment.type}</p>
      <p><strong>Reason:</strong> {punishment.reason}</p>
      <p><strong>Moderator:</strong> {punishment.moderator}</p>
      <p><strong>Date:</strong> {punishment.date}</p>
    </div>
  );
}

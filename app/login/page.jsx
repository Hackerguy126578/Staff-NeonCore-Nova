import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purpleGradientStart to-purpleGradientEnd">
      <h1 className="text-5xl font-bold mb-6 text-white text-center">NCN BanSync</h1>
      <p className="text-white mb-6 text-center">
        The most powerful moderation tool and integrations on Discord
      </p>
      <button
        onClick={() => signIn('discord')}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
      >
        Login with Discord
      </button>
    </div>
  );
}

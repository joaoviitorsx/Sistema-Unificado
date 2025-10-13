import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo, {user?.username}</h1>
      <button
        onClick={handleLogout}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-pink-700"
      >
        Sair
      </button>
    </div>
  );
}

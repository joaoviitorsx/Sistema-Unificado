import type { SidebarProps } from "../types/components/sidebar";
import { LayoutDashboard, Zap, ChevronRight, LogOut, Truck, ShieldUser, Building2  } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import icone from "../assets/icone.png";

const menuItems: { icon: React.ElementType; label: string; key: string; path: string }[] = [
  { icon: LayoutDashboard, label: "Dashboard", key: "dashboard", path: "/dashboard" },
  { icon: Zap, label: "Automatização", key: "modulos", path: "/modulos" },
  { icon: Truck, label: "Fornecedores", key: "fornecedores", path: "/fornecedores" },
  { icon: Building2 , label: "Empresas", key: "empresas", path: "/empresas" },
  { icon: ShieldUser, label: "Painel Administrativo", key: "administracao", path: "/administracao" },
];

function Sidebar({ isOpen }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const activePage = menuItems.find(item => item.path === location.pathname)?.key ?? "dashboard";

  return (
    <aside className={`bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col fixed left-0 top-0 h-screen overflow-hidden z-40 ${isOpen ? "w-64" : "w-0"}`}>
      <div className={`flex flex-col h-full w-64 ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <div className="flex flex-col items-center p-6 border-b border-gray-200">
          <div className="w-16 h-16 mb-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-250 flex items-center justify-center shadow-md">
            <img src={icone} alt="logo" className="w-10 h-10" />
          </div>
          <h1 className="text-gray-800 font-bold text-lg text-center leading-tight">
            Assertivus Contábil
          </h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.key;

              return (
                <li key={item.key}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                        isActive ? "bg-blue-50 text-blue-600 shadow-sm" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}>
                          
                    <Icon size={20} className={`transition-transform duration-200 ${isActive ? "scale-110" : "group-hover:scale-105"}`}/>

                    <span className="font-medium text-sm flex-1 text-left cursor-pointer">
                      {item.label}
                    </span>

                    {isActive && (
                      <>
                        <ChevronRight size={16} className="text-blue-600 absolute right-3 cursor-pointer"/>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
                      </>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button onClick={() => navigate("/")} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group cursor-pointer">
            <LogOut size={20} className="transition-transform duration-200 group-hover:scale-105"/>
            <span className="font-medium text-sm">Sair</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
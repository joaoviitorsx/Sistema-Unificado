import { Bell, TextAlignJustify } from "lucide-react";
import type { HeaderProps } from "../types/components/header";
import mockUser from "../mock/user";

function Header({ onMenuClick }: HeaderProps) {
  const user = mockUser;

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-100">
      <button onClick={onMenuClick} className="p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer" aria-label="Abrir menu lateral">
        <TextAlignJustify size={22} className="text-gray-500" />
      </button>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Notificações">
          <Bell size={22} className="text-gray-500" />
        </button>

        <div className="h-6 w-px bg-gray-300" />

        <div className="flex items-center space-x-3">
          {user.avatar}
          <span className="text-gray-700 font-medium">{user.name}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

import {Bell, TextAlignJustify } from "lucide-react"
//import type { HeaderProps } from "../types/components/header";

const mockUser = {
    name: "Administrador",
    avatar: (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-full bg-gray-200"
        >
            <circle cx="16" cy="16" r="16" fill="#ADADAD" />
            <circle cx="16" cy="13" r="6" fill="#fff" />
            <ellipse cx="16" cy="25" rx="9" ry="5" fill="#fff" />
        </svg>
    ),
};

function Header() {
    return (
        <header className="bg-white-350 p-4 flex items-center justify-between shadow-b">
            <button
                className="p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                <TextAlignJustify size={24} style={{ color: "#ADADAD" }} />
            </button>
            <div className="flex items-center">
                <button className="p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer mr-3">
                    <Bell size={24} style={{ color: "#ADADAD" }} />
                </button>
                <hr className="h-6 w-px bg-gray-300 border-none mr-6" />
                <div className="flex items-center space-x-4">
                    {mockUser.avatar}
                    <span className="text-gray-700 font-medium">{mockUser.name}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;

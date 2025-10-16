import { useState, useEffect } from "react";
import { LayoutDashboard, Zap, ChartNoAxesCombined, SquareCheckBig, Settings, LogOut, TextAlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LoginPage from "../../pages/auth/LoginPage";

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [activeItem, setActiveItem] = useState("dashboard");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsExpanded(window.innerWidth > 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        { id: "dashboard", icon: <LayoutDashboard />, label: "Dashboard" },
        { id: "users", icon: <Zap />, label: "Automatização" },
        { id: "products", icon: <ChartNoAxesCombined />, label: "Relatórios" },
        { id: "orders", icon: <SquareCheckBig />, label: "Tarefas" },
        { id: "settings", icon: <Settings />, label: "Configurações" },
    ];

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    const sidebarVariants = {
        expanded: { width: "250px" },
        collapsed: { width: "64px" },
    };

    const overlayVariants = {
        visible: { opacity: 0.5 },
        hidden: { opacity: 0 },
    };

    return (
        <>
            {isMobile && isExpanded && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black z-20"
                    onClick={toggleSidebar}
                />
            )}
            <AnimatePresence>
                <motion.div
                    initial={isExpanded ? "expanded" : "collapsed"}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={sidebarVariants}
                    transition={{ duration: 0.3 }}
                    className={`fixed left-0 top-0 h-screen bg-white shadow-lg z-30 flex flex-col overflow-hidden`}
                >
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                            <img
                                src="./src/assets/mengao.webp"
                                alt="Company Logo"
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            {isExpanded && (
                                <span className="font-bold text-lg text-gray-800">
                                    Admininastro
                                </span>
                            )}
                        </div>
                        <button
                            onClick={toggleSidebar}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 cursor-pointer"
                            aria-label="Toggle Sidebar"
                        >
                            <TextAlignJustify size={20} />
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-4 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveItem(item.id)}
                                className={`w-full flex items-center p-3 transition-all cursor-pointer
                                    ${!isExpanded ? "justify-center" : "px-4"}
                                    ${activeItem === item.id
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`}
                                aria-label={item.label}
                            >
                                <span className="text-xl">{item.icon}</span>
                                {isExpanded && <span className="ml-3">{item.label}</span>}
                            </button>
                        ))}
                    </nav>

                    <div className="border-t border-gray-200 p-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="./src/assets/mengao.webp"
                                alt="User Profile"
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            {isExpanded && (
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">Mengudo</p>
                                    <p className="text-sm text-gray-500">Admin</p>
                                </div>
                            )}
                        </div>
                        <button
                            className={`w-full flex items-center p-3 mt-2 rounded-lg cursor-pointer
                                ${!isExpanded ? "justify-center" : ""}
                                text-red-600 hover:bg-red-50`}
                            aria-label="Logout"
                        >
                            <LogOut size={25} />
                            {isExpanded && <span className="ml-3 cursor-pointer" onClick={LoginPage}>Logout</span>}
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Sidebar;

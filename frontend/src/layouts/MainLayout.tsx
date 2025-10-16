import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="min-h-screen w-full flex relative">
                    <svg 
                        className="absolute inset-0 w-full h-full object-cover z-0" 
                        viewBox="0 0 1152 768" 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-label="bg"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <rect width="1152" height="768" fill="#f0f0f0ff"/>
                        <path fill="#bfbfc2ff" d="
                            M0,0 
                            H720
                            C690,100 650,180 610,270
                            C575,350 545,420 500,510
                            C450,610 385,690 300,740
                            C245,772 195,750 160,680
                            C125,610 95,560 45,535
                            C25,525 10,515 0,510
                            Z"/>
                    </svg>
                    <main className="flex-1 p-6 bg-gray-100">
                        {children}
                    </main>
                </div>
                
            </div>
        </div>
    );
}
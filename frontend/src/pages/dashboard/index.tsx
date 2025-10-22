import { Card } from "antd";
import MainLayout from "../../layouts/MainLayout";
import { mockUser } from "../../mock/user";


function Dashboard() {

  return (
    <MainLayout>
      <div className="mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Dashboard</h1>
          <p className="text-gray-500 text-base mt-2">Bem-vindo, <span className="font-semibold">{mockUser.name}</span>!</p>
        </header>

        <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl">
            <h1>
              varias fita pra fazer
            </h1>
        </Card>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
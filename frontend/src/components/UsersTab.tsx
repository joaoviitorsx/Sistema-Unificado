import { Plus, Pencil, Trash2 } from "lucide-react";
import Button from "../components/Button";
import { usuarios } from "../mock/user";
import { Card } from "antd";

function UsersTab() {
  return (
    <Card>
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <header>
                    <h1 className="text-2xl font-bold text-gray-800">Usuários do Sistema</h1>
                </header>
                <Button className="flex items-center gap-2 cursor-pointer">
                    <Plus size={16} /> Novo Usuário
                </Button>
        </div>
            <div className="mt-12">
                <table className="w-full text-left border-collapse">
                <thead className="bg-gray-200 rounded-t-lg">
                    <tr className="border-b">
                        <th className="py-2 px-4 font-medium text-gray-700 first:rounded-tl-lg">Nome</th>
                        <th className="py-2 px-4 font-medium text-gray-700">E-mail</th>
                        <th className="py-2 px-4 font-medium text-gray-700">Cargo</th>
                        <th className="py-2 px-4 font-medium text-gray-700">Empresa</th>
                        <th className="py-2 px-4 font-medium text-gray-700">Status</th>
                        <th className="py-2 px-4 font-medium text-gray-700">Último acesso</th>
                        <th className="py-2 px-4 text-right font-medium text-gray-700 last:rounded-tr-lg">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                    <tr key={u.id} className=" hover:bg-gray-50 transition-colors">
                        <td className="py-2 px-4">{u.nome}</td>
                        <td className="py-2 px-4">{u.email}</td>
                        <td className="py-2 px-4">{u.cargo}</td>
                        <td className="py-2 px-4">{u.empresas}</td>
                        <td className="py-2 px-4">{u.status}</td>
                        <td className="py-2 px-4">{u.ultimoAcesso}</td>
                        <td className="py-2 px-4 text-right">
                        <div className="flex justify-end gap-2">
                            <Button
                            variant="secondary"
                            className="p-2 rounded-md cursor-pointer"
                            onClick={() => console.log("Editar", u.id)}>
                            <Pencil size={16} />
                            </Button>
                            <Button
                            variant="secondary"
                            className="p-2 rounded-md bg-red-500 hover:bg-red-600 focus:ring-red-500 cursor-pointer"
                            onClick={() => console.log("Excluir", u.id)}>
                            <Trash2 size={16} />
                            </Button>
                        </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </Card>
  );
}

export default UsersTab;
import Switch from "../components/Switch";
import Button from "../components/Button";
import { modulos } from "../mock/user";
import { Card } from "antd";

function PermissionsTab() {
  return <Card>
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <header>
          <h1 className="text-2xl font-bold text-gray-800">Permissões do Sistema</h1>
        </header>
        <Button className="flex items-center gap-2 cursor-pointer">Salvar Permissões</Button>
      </div>
      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 rounded-t-lg">
            <tr className="border-b">
              <th className="py-2 px-4 font-medium text-gray-700 first:rounded-tl-lg">Módulo</th>
              <th className="py-2 px-4 font-medium text-gray-700 text-center">Admin</th>
              <th className="py-2 px-4 font-medium text-gray-700 text-center">Contador</th>
              <th className="py-2 px-4 font-medium text-gray-700 text-center last:rounded-tr-lg">Fiscal</th>
            </tr>
          </thead>
          <tbody>
            {modulos.map((m, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="py-2 px-4">{m.nome}</td>
                <td className="py-2 px-4 text-center">
                  <Switch checked={m.admin} onChange={(v) => console.log("Admin:", v)} />
                </td>
                <td className="py-2 px-4 text-center">
                  <Switch checked={m.contador} onChange={(v) => console.log("Contador:", v)} />
                </td>
                <td className="py-2 px-4 text-center">
                  <Switch checked={m.analista} onChange={(v) => console.log("Analista:", v)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Card>;
}

export default PermissionsTab;

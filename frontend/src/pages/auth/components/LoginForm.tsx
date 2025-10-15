import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Checkbox from "../../../components/Checkbox";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import type { LoginFormProps } from "../../../types/layouts/auth/loginForm";

export default function LoginForm({ onForgot }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
        <div>
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">Acesse o sistema</h2>
            <div className="mb-16">
            <hr className="border-t-2 border-blue-500 rounded-full w-68 mx-auto" />
            </div>
        </div>
      <form className="space-y-4">
        <div>
          <Label htmlFor="username" className="font-semibold text-5xl">Usuário</Label>
          <Input 
            id="username" 
            placeholder="Digite seu usuário"
            icon={<User size={18} />}
            />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              icon={<Lock size={18} />}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex justify-between text-sm">
            <Checkbox Checked={false} onChange={() => {}} label="Lembre-se de mim" className="" />
          <p onClick={onForgot} className="text-blue-600 hover:underline cursor-pointer">Esqueceu a senha?</p>
        </div>

        <div className="flex justify-center mt-8">
          <Button className="w-50 h-10 cursor-pointer">Entrar</Button>
        </div>
      </form>
    </>
  );
}

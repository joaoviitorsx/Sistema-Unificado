import { useState } from 'react';
import Card from '@components/Card';
import Button from '@components/Button';
import Input from '@components/Input';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-300'>
      <Card>
        <img src="./src/assets/empresa.png" alt="logo" className="mx-auto mb-6 w-64 h-32 object-cover" />
        <h2 className='text-xl text-center font-semibold mb-2'>Acesse o sistema</h2>
        <div className='flex justify-center items-center'>
          <hr className="border-t w-80 border-gray-300" />
        </div>
        <div className='mt-5 relative'>
          <form>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Usuário</label>
            <Input type="text" placeholder='Digite seu usuário' />
          </form>
        </div>
        <div className='mt-5 relative'>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
          <div className="relative">
            <Input type={showPassword ? "text" : "password"}  placeholder='Digite sua senha' />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700">
              {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
            </button>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"/>
                <label htmlFor="remember-me" className="text-sm text-gray-700 cursor-pointer ml-2">Lembrar de mim</label>
            </div>
            <p className="text-blue-500 hover:underline cursor-pointer text-sm">Esqueceu a senha?</p>
            </div>
        </div>
        <Button />
      </Card>
    </div>
  );
}

export default Login;
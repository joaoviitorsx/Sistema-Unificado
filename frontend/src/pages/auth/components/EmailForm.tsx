import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Card from "../../../components/Card";
import type { EmailFormProps } from "../../../types/layouts/auth/emailForm";

export default function SendEmailForm({ onBack, onNext }: EmailFormProps) {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">Recuperar senha</h2>
        <div>
            <hr className="border-t-2 border-blue-500 rounded-full w-68 mx-auto mb-16" />
        </div>
      </div>
      <form className="space-y-4">
        <Label htmlFor="email">E-mail cadastrado</Label>
        <Input id="email" type="email" placeholder="Digite seu e-mail" />
        <div className="flex items-center justify-center">
          <h1 className="text-center text-sm text-gray-60 p-3 bg-blue-50 w-full rounded-md ">
            O token de recuperação será enviado para o seu e-mail.
          </h1>
        </div>
        <div className="flex justify-between mt-6">
            
          <Button type="button" variant="secondary" onClick={onBack} className="cursor-pointer">Voltar</Button>
          <Button type="button" variant="primary" onClick={onNext} className="cursor-pointer">Enviar código</Button>
        </div>
      </form>
    </>
  );
}

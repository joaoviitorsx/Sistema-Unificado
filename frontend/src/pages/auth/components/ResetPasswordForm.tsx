import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import type { ResetPasswordFormProps } from "../../../types/layouts/auth/resetPasswordForm";

export default function ResetPasswordForm({ onDone }: ResetPasswordFormProps) {
  return (
    <>
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Redefinir senha</h2>
      <form className="space-y-4">
        <Label htmlFor="new-password">Nova senha</Label>
        <Input id="new-password" type="password" placeholder="Digite sua nova senha" className="cursor-pointer"/>

        <Label htmlFor="confirm-password">Confirmar senha</Label>
        <Input id="confirm-password" type="password" placeholder="Confirme sua nova senha" className="cursor-pointer"/>

        <div className="flex mt-4 items-center justify-center">
          <Button type="button" variant="primary" className='w-25 h-10 cursor-pointer'onClick={onDone}>Salvar</Button>
        </div>
      </form>
    </>
  );
}

import { useState } from "react";
import InputOTP from "../../../components/InputOTP";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import type { TokenFormProps } from "../../../types/layouts/auth/tokenForm";

export default function TokenForm({ onBack, onNext }: TokenFormProps) {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log("Token:", otp);
      onNext();
    } else {
      alert("Digite o código completo");
    }
  };
  return (
    <>
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Verificação de código
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center">
          <Label>Código de verificação</Label>
          <InputOTP value={otp} onChange={setOtp} length={6} />
          <p className="text-gray-500 text-sm mt-2">Insira o código enviado para o seu e-mail</p>
        </div>

        <div className="flex justify-between mt-4">
          <Button type="button" variant="secondary" onClick={onBack} className="cursor-pointer">Voltar</Button>
          <Button type="submit" variant="primary" className="cursor-pointer">Confirmar</Button>
        </div>
      </form>
    </>
  );
}
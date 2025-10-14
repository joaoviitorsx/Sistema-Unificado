import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormError from "../../components/FormError";
import { useAuth } from "../../hooks/useAuth";
import Card from "../../components/Card";

export default function LoginForm() {
  const { status, error, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      setValidationError("Por favor, preencha todos os campos.");
      return;
    }
    setValidationError("");
    login({ username, password });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card title="Acesso ao Sistema" className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <Input
            label="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormError message={validationError || error || undefined} />
          <Button type="submit" loading={status === "loading"}>
            Entrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormError from "../../components/FormError";
import { useAuth } from "../../hooks/useAuth";

export default function LoginForm() {
  const { status, error, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    login({ username, password });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-primary text-center mb-2">
        Acesso ao Sistema
      </h2>

      <Input label="Usuário" value={username} onChange={e => setUsername(e.target.value)} />
      <Input label="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <FormError message={error || undefined} />
      <Button type="submit" loading={status === "loading"}>Entrar</Button>
    </form>
  );
}

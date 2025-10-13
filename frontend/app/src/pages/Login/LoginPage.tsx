import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import LoginForm from "./LoginForm";
import { useAuth } from "../../hooks/useAuth";

export default function LoginPage() {
  const { user, loadUserFromStorage } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

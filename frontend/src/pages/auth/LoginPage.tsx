import { useState } from "react";

import AuthBgLayout from "../../layouts/auth/AuthBgLayout";
import AuthSplitLayout from "../../layouts/auth/AuthSplitLayout";

import Card from "../../components/Card";
import LoginForm from "./components/LoginForm";
import SendEmailForm from "./components/EmailForm";
import TokenForm from "./components/TokenForm"; 
import ResetPasswordForm from "./components/ResetPasswordForm";

import { motion, AnimatePresence } from "framer-motion";

type Step = "login" | "email" | "token" | "reset";

export default function LoginPage() {
  const [step, setStep] = useState<Step>("login");

  const ilustracaoForm = () => {
    switch (step){
      case "login":
        return "./src/assets/login.png";
      case "email":
        return "./src/assets/sendEmail.png";
      case "token":
        return "./src/assets/token.png";
      case "reset":
        return "./src/assets/resetSenha.png";
      default:
        return "./src/assets/login.png";
    }
  }

  const renderForm = () => {
    switch (step) {
      case "login":
        return <LoginForm onForgot={() => setStep("email")} />;
      case "email":
        return <SendEmailForm onBack={() => setStep("login")} onNext={() => setStep("token")} />;
      case "token":
        return <TokenForm onBack={() => setStep("email")} onNext={() => setStep("reset")} />;
      case "reset":
        return <ResetPasswordForm onDone={() => setStep("login")} />;
      default:
        return null;
    }
  }

  return (
    <AuthBgLayout>
      <AuthSplitLayout
      left={
        <div className="flex flex-col items-center h-full justify-center relative">
          <div className="absolute top-0">
            <img src="/src/assets/empresa1.png" alt="Logo" className="w-56 object-contain" />
          </div>

          <div className="flex flex-1 items-center justify-center w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={ilustracaoForm()}
              src={ilustracaoForm()}
              alt="Ilustração"
              className="w-100 object-contain drop-shadow-lg"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </AnimatePresence>
        </div>
          <div className="h-12" /> 
        </div>
      }
      right={<Card>{renderForm()}</Card>}
      />
    </AuthBgLayout>
  );
  }
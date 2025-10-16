import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import AuthBgLayout from "../../layouts/auth/AuthBgLayout";
import AuthSplitLayout from "../../layouts/auth/AuthSplitLayout";
import Card from "../../components/Card";

import LoginForm from "../../components/LoginForm";
import SendEmailForm from "../../components/EmailForm";
import TokenForm from "../../components/TokenForm";
import ResetPasswordForm from "../../components/ResetPasswordForm";

import useIlustracaoForm from "../../hooks/ilustrationHook";
import { useState } from "react";

export default function LoginPage() {
  const [content, setContent] = useState<"login" | "email" | "token" | "reset">("login");
  const [paramens, setParamens] = useSearchParams();
  const activeTabKey = paramens.get("page") || "login"
  const currentIllustration = useIlustracaoForm(activeTabKey);

  const forms = {
    "login": <LoginForm onForgot={() => { setContent("email"); setParamens({ page: "email" }) }} />,
    "email": <SendEmailForm onBack={() => { setContent("login"); setParamens({ page: "login" })}} onNext={() => { setContent("token"); setParamens( {page: "token"})}} />,
    "token": <TokenForm onBack={() => { setContent("email"); setParamens({page:"email"}) }} onNext={() => { setContent("reset"); setParamens({ page: "reset"})}} />,
    "reset": <ResetPasswordForm onDone={() => { setContent("login"); setParamens("login")}} />,
  }

  return (
    <AuthBgLayout>
      <AuthSplitLayout
        left={
          <div className="flex flex-col items-center h-full justify-center relative">
            <div className="absolute top-5">
              <img
                src="./src/assets/empresa.png" 
                alt="Logo"
                className="w-80 object-contain"
              />
            </div>

            <div className="flex flex-1 items-center justify-center w-full overflow-hidden mt-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={location.pathname}
                  src={currentIllustration}
                  alt="Ilustração"
                  className="w-90 object-contain drop-shadow-lg mx-auto"
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
          </div>
        }
        right={
          <Card>
            {forms[content]}
          </Card>
        }
      />
    </AuthBgLayout>
  );
}
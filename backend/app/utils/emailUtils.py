import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

SMTP_ENABLED = os.getenv("SMTP_ENABLED", "false").lower() == "true"
SMTP_SERVER = os.getenv("SMTP_SERVER", "localhost")
SMTP_PORT = int(os.getenv("SMTP_PORT", 1025))
SMTP_EMAIL = os.getenv("SMTP_EMAIL", "no-reply@example.com")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "")
EMAIL_FROM_NAME = os.getenv("EMAIL_FROM_NAME", "Assertivus System")
OUT_EMAILS_DIR = os.getenv("OUT_EMAILS_DIR", "out_emails")
DEFAULT_EXPIRE_MINUTES = int(os.getenv("RESET_TOKEN_TTL_MINUTES", 15))

os.makedirs(OUT_EMAILS_DIR, exist_ok=True)

class emailUtils:

    @staticmethod
    def _buildMessage(toEmail: str, subject: str, htmlContent: str, plainText: str | None = None) -> MIMEMultipart:
        message = MIMEMultipart("alternative")
        message["Subject"] = subject
        message["From"] = f"{EMAIL_FROM_NAME} <{SMTP_EMAIL}>"
        message["To"] = toEmail

        if plainText:
            part1 = MIMEText(plainText, "plain")
            message.attach(part1)

        part2 = MIMEText(htmlContent, "html")
        message.attach(part2)
        return message

    @staticmethod
    def _saveEmailToFile(toEmail: str, subject: str, htmlContent: str, plainText: str | None = None) -> str:
        now = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
        safeTo = toEmail.replace("@", "_at_").replace(".", "_")
        baseName = f"{now}__{safeTo}"
        htmlPath = os.path.join(OUT_EMAILS_DIR, f"{baseName}.html")
        txtPath = os.path.join(OUT_EMAILS_DIR, f"{baseName}.txt")

        # escrever HTML
        with open(htmlPath, "w", encoding="utf-8") as f:
            f.write(f"<!-- Subject: {subject} -->\n")
            f.write(htmlContent)

        # escrever texto plano
        if plainText:
            with open(txtPath, "w", encoding="utf-8") as f:
                f.write(plainText)
        else:
            # gerar versão texto simples a partir do HTML (básico)
            plain = subject + "\n\n(HTML salvo em arquivo)\n"
            with open(txtPath, "w", encoding="utf-8") as f:
                f.write(plain)

        print(f"[EMAIL-LOCAL] salvo: {htmlPath}")
        return htmlPath

    @staticmethod
    def sendEmail(toEmail: str, subject: str, htmlContent: str, plainText: str | None = None) -> bool:
        message = emailUtils._buildMessage(toEmail, subject, htmlContent, plainText)

        if SMTP_ENABLED:
            try:
                # Ex.: se usar TLS (porta 587)
                if SMTP_PORT in (587,):
                    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=30) as server:
                        server.starttls()
                        if SMTP_EMAIL and SMTP_PASSWORD:
                            server.login(SMTP_EMAIL, SMTP_PASSWORD)
                        server.send_message(message)
                else:
                    # porta 465 (SSL) ou debug local (1025 sem TLS)
                    # para 465 precisar de smtplib.SMTP_SSL
                    if SMTP_PORT == 465:
                        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, timeout=30) as server:
                            if SMTP_EMAIL and SMTP_PASSWORD:
                                server.login(SMTP_EMAIL, SMTP_PASSWORD)
                            server.send_message(message)
                    else:
                        # porta 1025 (debug server do Python) ou outras sem TLS
                        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=30) as server:
                            if SMTP_EMAIL and SMTP_PASSWORD:
                                server.login(SMTP_EMAIL, SMTP_PASSWORD)
                            server.send_message(message)

                print(f"[EMAIL-SMTP] enviado para {toEmail} via {SMTP_SERVER}:{SMTP_PORT}")
                return True
            except Exception as e:
                print(f"[ERRO-SMTP] Falha ao enviar e-mail para {toEmail}: {e}")
                # fallback: salvar localmente para inspeção
                emailUtils._saveEmailToFile(toEmail, subject, htmlContent, plainText)
                return False
        else:
            # modo local: salvar arquivo e logar
            try:
                path = emailUtils._saveEmailToFile(toEmail, subject, htmlContent, plainText)
                print(f"[EMAIL-OK] Modo local, e-mail salvo em {path}")
                return True
            except Exception as e:
                print(f"[ERRO-LOCAL] Falha ao salvar e-mail localmente: {e}")
                return False


    def sendResetEmail(toEmail: str, token: str, expireMinutes: int | None = None) -> bool:
        if expireMinutes is None:
            expireMinutes = DEFAULT_EXPIRE_MINUTES

        subject = "Recuperação de senha - Assertivus"
        htmlContent = f"""
        <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <h3 style="color: #C2185B;">Recuperação de senha</h3>
            <p>Olá,</p>
            <p>Recebemos uma solicitação para redefinir sua senha no <b>Assertivus</b>.</p>
            <p>Use o código abaixo para redefinir sua senha:</p>
            <div style="font-size: 22px; font-weight: bold; color: #C2185B; margin: 12px 0;">
            {token}
            </div>
            <p>O código expira em {expireMinutes} minutos.</p>
            <p>Se você não solicitou essa recuperação, ignore este e-mail.</p>
            <br>
            <p>Atenciosamente,<br><b>Equipe Assertivus</b></p>
        </body>
        </html>
        """

        plainText = f"""Recuperação de senha - Assertivus

    Seu código de recuperação é: {token}
    Ele expira em {expireMinutes} minutos.

    Se você não solicitou essa recuperação, ignore este e-mail.
    """

        return emailUtils.sendEmail(toEmail, subject, htmlContent, plainText)

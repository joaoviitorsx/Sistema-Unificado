import random, string
from sqlalchemy.orm import Session
from datetime import datetime, timedelta

from ...utils.emailUtils import emailUtils
from ...repositories.userRepository import userRepository
from ...repositories.retrieveUserRepository import retrieveUserRepository

class forgotPasswordService:

    @staticmethod
    def generateResetToken(length=6):
        return ''.join(random.choices(string.digits, k=length))

    @staticmethod
    def forgotPassword(db: Session, email: str):
        user = userRepository.getUserByEmail(db, email)
        if not user:
            return {
            "status": "error", 
            "message": "Usuário não encontrado"
        }

        token = forgotPasswordService.generateResetToken()
        expiresIn = datetime.utcnow() + timedelta(minutes=5)
        retrieveUserRepository.createRetrieveToken(db, email, token, expiresIn)

        emailUtils.sendResetEmail(email, token)
        return {
            "status": "ok", 
            "message": "Token enviado para o e-mail"
        }

from datetime import datetime
from sqlalchemy.orm import Session

from ...utils.hashUtils import hashUtils
from ...repositories.userRepository import userRepository
from ...repositories.retrieveUserRepository import retrieveUserRepository


class recoveryPasswordService:

    @staticmethod
    def verifyToken(db: Session, email: str, token: str):
        retrieve = retrieveUserRepository.getRetrieveToken(db, email, token)
        
        if not retrieve:
            return {
                "status": "error", 
                "message": "Token inválido ou inexistente"
            }
            
        if datetime.utcnow() > retrieve.expiresIn:
            return {
                "status": "error", 
                "message": "Token expirado"
            }
            
        return {
            "status": "ok",
            "message": "Token válido"
        }
    
    @staticmethod
    def resetPassword(db: Session, email: str, token: str, newPassword: str):
        verification = recoveryPasswordService.verifyToken(db, email, token)
        if verification["status"] == "error":
            return verification
            
        user = userRepository.getUserByEmail(db, email)
        if not user:
            return {
                "status": "error", 
                "message": "Usuário não encontrado"
            }
            
        hashedPassword = hashUtils.hashPassword(newPassword)
        user.passwordHash = hashedPassword
        db.commit()

        return {
            "status": "ok",
            "message": "Senha alterada com sucesso"
        }

from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from ..services.auth.authService import loginService
from ..services.auth.forgotPasswordService import forgotPasswordService
from ..services.auth.recoveryPasswordService import recoveryPasswordService

class AuthController:
    
    @staticmethod
    def login(db: Session, email: str, password: str):
        try:
            return loginService.login(db, email, password)
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=str(e))

    @staticmethod
    def forgot_password(db: Session, email: str):
        if not email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="E-mail é obrigatório"
            )
        return forgotPasswordService.forgotPassword(db, email)

    @staticmethod
    def verify_token(db: Session, email: str, token: str):
        return recoveryPasswordService.verifyToken(db, email, token)

    @staticmethod
    def reset_password(db: Session, email: str, token: str, new_password: str):
        return recoveryPasswordService.resetPassword(db, email, token, new_password)

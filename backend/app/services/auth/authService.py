from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from fastapi import HTTPException, status

from ...utils.hashUtils import hashUtils
from ...utils.tokenUtils import tokenUtils
from ...repositories.userRepository import userRepository

class loginService:

    @staticmethod
    def login(db: Session, email: str, password: str):
        user = userRepository.getUserByEmail(db, email)
        if not user:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Usuário não encontrado")

        if not hashUtils.verifyPassword(password, user.passwordHash):
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Senha incorreta")

        if not user.isActive:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Usuário inativo")

        accessToken = tokenUtils.createToken({
            "userId": user.id, 
            "email": user.email
        })

        return {
            "accessToken": accessToken, 
            "tokenType": "bearer"
        }

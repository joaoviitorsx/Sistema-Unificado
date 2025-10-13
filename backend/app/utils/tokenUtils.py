import os
import jwt
from datetime import datetime, timedelta
from fastapi import HTTPException, status
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("JWT_SECRET_KEY")
ALGORITHM = os.getenv("JWT_ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("JWT_ACCESS_TOKEN_EXPIRE")

class tokenUtils:
    
    @staticmethod   
    def createToken(data: dict):
        toEncode = data.copy()
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        toEncode.update({
            "exp": expire
        })
        encodedJwt = jwt.encode(toEncode, SECRET_KEY, algorithm=ALGORITHM)
        return encodedJwt

    @staticmethod
    def verifyToken(token: str):
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            return payload
        except jwt.ExpiredSignatureError:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token expirado")
        except jwt.InvalidTokenError:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Token inválido")

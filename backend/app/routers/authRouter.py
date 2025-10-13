from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends
from ..config.db.dbSession import getDB

from ..controller.authController import AuthController
from ..schemas.authSchemas import LoginRequest, ForgotPasswordRequest, VerifyTokenRequest, ResetPasswordRequest
    
router = APIRouter(prefix="/api/auth", tags=["Auth"])

@router.post("/login")
def login(payload: LoginRequest, db: Session = Depends(getDB)):
    return AuthController.login(db, payload.email, payload.password)

@router.post("/forgot")
def forgot_password(payload: ForgotPasswordRequest, db: Session = Depends(getDB)):
    return AuthController.forgot_password(db, payload.email)

@router.post("/verify-token")
def verify_token(payload: VerifyTokenRequest, db: Session = Depends(getDB)):
    return AuthController.verify_token(db, payload.email, payload.token)

@router.post("/reset-password")
def reset_password(payload: ResetPasswordRequest, db: Session = Depends(getDB)):
    return AuthController.reset_password(db, payload.email, payload.token, payload.new_password)

from pydantic import BaseModel, EmailStr, Field

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

class VerifyTokenRequest(BaseModel):
    email: EmailStr
    token: str = Field(..., min_length=6, max_length=6)

class ResetPasswordRequest(BaseModel):
    email: EmailStr
    token: str = Field(..., min_length=6, max_length=6)
    new_password: str = Field(..., min_length=8)

from passlib.context import CryptContext  # type: ignore

pwdContext = CryptContext(schemes=["bcrypt"], deprecated="auto")

class hashUtils:
    @staticmethod
    def hashPassword(password: str) -> str:
        return pwdContext.hash(password)

    @staticmethod
    def verifyPassword(plainPassword: str, hashedPassword: str) -> bool:
        return pwdContext.verify(plainPassword, hashedPassword)
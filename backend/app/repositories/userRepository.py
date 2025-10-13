from sqlalchemy.orm import Session
from ..models.userModel import User
from typing import Optional, List

class userRepository:

    @staticmethod
    def getUserById(db: Session, userId: int) -> Optional[User]:
        return db.query(User).filter(User.id == userId).first()

    @staticmethod
    def getUserByEmail(db: Session, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    @staticmethod
    def getAllUsers(db: Session) -> List[User]:
        return db.query(User).all()

    @staticmethod
    def createUser(db: Session, name: str, email: str, passwordHash: str, profileId: int):
        newUser = User(
            name=name,
            email=email,
            passwordHash=passwordHash,
            profileId=profileId
        )
        db.add(newUser)
        db.commit()
        db.refresh(newUser)
        return newUser

    @staticmethod
    def updateUserStatus(db: Session, userId: int, isActive: bool):
        user = db.query(User).filter(User.id == userId).first()
        if not user:
            return None
        user.isActive = isActive
        db.commit()
        db.refresh(user)
        return user

    @staticmethod
    def deleteUser(db: Session, userId: int) -> bool:
        user = db.query(User).filter(User.id == userId).first()
        if not user:
            return False
        db.delete(user)
        db.commit()
        return True

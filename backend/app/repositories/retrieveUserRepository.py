from sqlalchemy.orm import Session
from ..models.retrieveUserModel import RetrieveUser
from datetime import datetime
from typing import Optional

class retrieveUserRepository:
    
    @staticmethod
    def createRetrieveToken(db: Session, email: str, token: str, expiresIn: datetime):
        retrieve = RetrieveUser(email=email, passToken=token, expiresIn=expiresIn)
        db.add(retrieve)
        db.commit()
        db.refresh(retrieve)
        return retrieve

    @staticmethod
    def getRetrieveToken(db: Session, email: str, token: str) -> Optional[RetrieveUser]:
        return (
            db.query(RetrieveUser)
            .filter(RetrieveUser.email == email, RetrieveUser.passToken == token)
            .first()
        )

    @staticmethod
    def getRetrieveByEmail(db: Session, email: str) -> Optional[RetrieveUser]:
        return db.query(RetrieveUser).filter(RetrieveUser.email == email).first()

    @staticmethod
    def deleteRetrieveByEmail(db: Session, email: str):
        db.query(RetrieveUser).filter(RetrieveUser.email == email).delete()
        db.commit()

    @staticmethod
    def deleteExpiredTokens(db: Session):
        now = datetime.utcnow()
        db.query(RetrieveUser).filter(RetrieveUser.expiresIn < now).delete()
        db.commit()

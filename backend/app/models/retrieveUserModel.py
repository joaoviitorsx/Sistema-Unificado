from sqlalchemy import Column, Integer, String, DateTime, func
from ..config.db.base import Base

class RetrieveUser(Base):
    __tablename__ = "retrieve_users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), nullable=False)
    passToken = Column(String(12), nullable=False)
    expiresIn = Column(DateTime(timezone=True), nullable=False)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

from sqlalchemy import Column, Integer, String, DateTime, func
from sqlalchemy.orm import relationship
from ..config.db.base import Base

class Company(Base):
    __tablename__ = "companys"

    id = Column(Integer, primary_key=True, index=True)
    razaoSocial = Column(String(150), unique=True, nullable=False)
    cnpj = Column(String(20), unique=True, nullable=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

    users = relationship("User", back_populates="company")

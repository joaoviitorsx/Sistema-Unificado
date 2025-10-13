from sqlalchemy import Column, Integer, String, DateTime, func
from sqlalchemy.orm import relationship
from ..config.db.base import Base

class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    sectorName = Column(String(50), unique=True, nullable=False)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

    users = relationship("User", back_populates="profile")

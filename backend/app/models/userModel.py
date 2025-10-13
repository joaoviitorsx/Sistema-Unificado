from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, func
from sqlalchemy.orm import relationship
from ..config.db.base import Base
from .profilesModel import Profile
from .eventModel import Event

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    passwordHash = Column(String(255), nullable=False)
    profileId = Column(Integer, ForeignKey("profiles.id"), nullable=True)
    isActive = Column(Boolean, default=True)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

    profile = relationship("Profile", back_populates="users")
    events = relationship("Event", back_populates="user")
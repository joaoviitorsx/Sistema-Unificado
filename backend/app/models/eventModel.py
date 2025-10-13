from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from ..config.db.base import Base

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    userId = Column(Integer, ForeignKey("users.id"))
    action = Column(String(255), nullable=False)
    module = Column(String(100), nullable=False)
    createdAt = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="events")

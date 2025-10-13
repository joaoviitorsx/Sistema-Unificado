from typing import List
from sqlalchemy.orm import Session
from app.models.eventModel import Event

def createEvent(db: Session, userId: int, action: str, module: str):
    event = Event(userId=userId, action=action, module=module)
    db.add(event)
    db.commit()
    db.refresh(event)
    return event

def getEventsByUser(db: Session, userId: int) -> List[Event]:
    return db.query(Event).filter(Event.userId == userId).order_by(Event.createdAt.desc()).all()

def getAllEvents(db: Session) -> List[Event]:
    return db.query(Event).order_by(Event.createdAt.desc()).all()

from sqlalchemy.orm import Session
from ..models.profilesModel import Profile
from typing import List, Optional

def getAllProfiles(db: Session) -> List[Profile]:
    return db.query(Profile).all()

def getProfileById(db: Session, profileId: int) -> Optional[Profile]:
    return db.query(Profile).filter(Profile.id == profileId).first()

def getProfileBySectorName(db: Session, sectorName: str) -> Optional[Profile]:
    return db.query(Profile).filter(Profile.sectorName == sectorName).first()

def createProfile(db: Session, sectorName: str):
    newProfile = Profile(sectorName=sectorName)
    db.add(newProfile)
    db.commit()
    db.refresh(newProfile)
    return newProfile

def deleteProfile(db: Session, profileId: int) -> bool:
    profile = db.query(Profile).filter(Profile.id == profileId).first()
    if not profile:
        return False
    db.delete(profile)
    db.commit()
    return True

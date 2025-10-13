from sqlalchemy.orm import Session
from app.models.companyModel import Company
from typing import Optional, List

def getAllCompanys(db: Session) -> List[Company]:
    return db.query(Company).all()

def getCompanyById(db: Session, companyId: int) -> Optional[Company]:
    return db.query(Company).filter(Company.id == companyId).first()

def getCompanyByCnpj(db: Session, cnpj: str) -> Optional[Company]:
    return db.query(Company).filter(Company.cnpj == cnpj).first()

def createCompany(db: Session, razaoSocial: str, cnpj: str):
    newCompany = Company(razaoSocial=razaoSocial, cnpj=cnpj)
    db.add(newCompany)
    db.commit()
    db.refresh(newCompany)
    return newCompany

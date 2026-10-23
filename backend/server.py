from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()

api_router = APIRouter(prefix="/api")


class ContactEnquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: str = ""
    interest: str = "General Enquiry"
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactEnquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    company: str = Field(default="", max_length=160)
    interest: str = Field(default="General Enquiry", max_length=120)
    message: str = Field(min_length=10, max_length=5000)


@api_router.get("/")
async def root():
    return {"message": "TSOR Technologies API", "status": "ok"}


@api_router.post("/contact", status_code=201)
async def create_contact_enquiry(input: ContactEnquiryCreate):
    enquiry = ContactEnquiry(**input.model_dump())
    await db.contact_enquiries.insert_one(enquiry.model_dump())
    return {"ok": True, "id": enquiry.id}


@api_router.get("/contact", response_model=List[ContactEnquiry])
async def list_contact_enquiries():
    return await db.contact_enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

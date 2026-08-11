import os

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGODB_URI)

MONGODB_DATABASE = os.getenv("MONGODB_DATABASE")
database = client[MONGODB_DATABASE]


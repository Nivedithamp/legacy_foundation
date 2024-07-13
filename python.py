import pandas as pd
import numpy as np  
import matplotlib.pyplot as plt
from textblob import TextBlob
import nltk
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017")

df = pd.read_csv("train.csv")

data = df.to_dict(orient = "records")

db = client["mental-health-app"]

print(db)

print(db.conversations.insert_many(data))
import requests #importar libreria
import dotenv
import os
dotenv.load_dotenv()

API_KEY=os.getenv("API_KEY")
ACCESS_KEY=os.getenv("ACCESS_KEY")
BIN_ID=os.getenv("BIN_ID")

url = f"https://api.jsonbin.io/v3/b/{BIN_ID}"
headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': API_KEY,
  'X-Access-Key': ACCESS_KEY
}
usuario = {
    "mensaje": "hola"
}

def read_db():
    response = requests.get(url, headers=headers)
    print(response.json())

def update_db():
    response = requests.put(url, headers=headers, json=usuario)
    print(response.json())

read_db()
update_db()
read_db()
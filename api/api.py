import requests

API_URL = "https://api-inference.huggingface.co/models/bigscience"
headers = {"Authorization": "Bearer hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
payload = {
    "inputs": "Today is a great day",
}

response = requests.post(API_URL, headers=headers, json=payload)
print(response.json())
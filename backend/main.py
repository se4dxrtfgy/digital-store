from fastapi import FastAPI
from product_data import products

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend is running"}

@app.get("/products")
def get_products():
    return products

@app.get("/product/{product_id}")
def get_product(product_id: int):
    for p in products:
        if p["id"] == product_id:
            return p
    return {"error": "Product not found"}

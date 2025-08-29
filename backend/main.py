from typing import List
from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import Session, select

from .database import create_db_and_tables, get_session
from .models import Product, Testimonial, School, ContactFormSubmission

app = FastAPI()

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
def read_root():
    return {"message": "Welcome to the School Uniforms API!"}

@app.post("/products/", response_model=Product)
def create_product(*, session: Session = Depends(get_session), product: Product):
    session.add(product)
    session.commit()
    session.refresh(product)
    return product

@app.get("/products/", response_model=List[Product])
def read_products(session: Session = Depends(get_session)):
    products = session.exec(select(Product)).all()
    return products

@app.get("/products/{product_id}", response_model=Product)
def read_product(*, session: Session = Depends(get_session), product_id: int):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.post("/testimonials/", response_model=Testimonial)
def create_testimonial(*, session: Session = Depends(get_session), testimonial: Testimonial):
    session.add(testimonial)
    session.commit()
    session.refresh(testimonial)
    return testimonial

@app.get("/testimonials/", response_model=List[Testimonial])
def read_testimonials(session: Session = Depends(get_session)):
    testimonials = session.exec(select(Testimonial)).all()
    return testimonials

@app.get("/testimonials/{testimonial_id}", response_model=Testimonial)
def read_testimonial(*, session: Session = Depends(get_session), testimonial_id: int):
    testimonial = session.get(Testimonial, testimonial_id)
    if not testimonial:
        raise HTTPException(status_code=404, detail="Testimonial not found")
    return testimonial

@app.post("/schools/", response_model=School)
def create_school(*, session: Session = Depends(get_session), school: School):
    session.add(school)
    session.commit()
    session.refresh(school)
    return school

@app.get("/schools/", response_model=List[School])
def read_schools(session: Session = Depends(get_session)):
    schools = session.exec(select(School)).all()
    return schools

@app.get("/schools/{school_id}", response_model=School)
def read_school(*, session: Session = Depends(get_session), school_id: int):
    school = session.get(School, school_id)
    if not school:
        raise HTTPException(status_code=404, detail="School not found")
    return school

@app.post("/contact/", response_model=ContactFormSubmission)
def submit_contact_form(*, session: Session = Depends(get_session), submission: ContactFormSubmission):
    # For a real application, you would also send an email here.
    # For now, we're just saving it to the database.
    from datetime import datetime
    submission.timestamp = datetime.utcnow().isoformat() # Automatically set timestamp
    session.add(submission)
    session.commit()
    session.refresh(submission)
    return submission


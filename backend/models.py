from typing import Optional, List
from sqlmodel import Field, SQLModel

class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: Optional[str] = None
    category: str  # e.g., 'Shirt', 'Pant', 'Blazer'
    image_url: Optional[str] = None
    price: Optional[float] = None # For display, not necessarily for purchase

class Testimonial(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    author: str
    text: str
    school_name: Optional[str] = None # School associated with the testimonial

class School(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    location: Optional[str] = None
    image_url: Optional[str] = None # Logo or photo of the school

class ContactFormSubmission(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    subject: Optional[str] = None
    message: str
    timestamp: Optional[str] = None # To record when the submission was made

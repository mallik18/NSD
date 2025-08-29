from sqlmodel import create_engine, SQLModel, Session
import os

DATABASE_FILE = "database.db"
DATABASE_URL = f"sqlite:///./{DATABASE_FILE}"

connect_args = {"check_same_thread": False}
engine = create_engine(DATABASE_URL, echo=True, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

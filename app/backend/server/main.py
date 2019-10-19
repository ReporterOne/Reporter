"""Main backend API serving."""
from pathlib import Path
from pydantic import BaseModel

from fastapi import FastAPI
from starlette.requests import Request
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates


class TestModel(BaseModel):
    """Test model."""
    test: int
    test2: int


app = FastAPI(debug=True)  # pylint: disable=invalid-name

base_dir = Path(__file__).parent
app.mount("/static", StaticFiles(directory=str(base_dir / "static")), name="static")
templates = Jinja2Templates(directory=str(base_dir / "templates"))


@app.get("/api/test_me", response_model=TestModel)
async def test_me():
    """Serve a test method."""
    return {"test": 123, "test2": 1234}


@app.get("/")
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

from fastapi import FastAPI

from . import dates_router, user

api_v1 = FastAPI(openapi_prefix="/api/v1")

api_v1.include_router(
    dates_router.router,
    tags=["Dates"],
    prefix="/dates_status"
)

api_v1.include_router(
    user.router,
    tags=["Users"],
    prefix="/users"
)

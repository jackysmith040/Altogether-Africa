from fastapi import FastAPI, Form, HTTPException
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import EmailStr
from starlette.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


### Setup for connecting to react
origins = ["http://localhost:5173/", "localhost:5173"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Configuration for FastAPI-Mail using Gmail
conf = ConnectionConfig(
    MAIL_USERNAME="jackysmith040@gmail.com",  # Replace with your Gmail email
    MAIL_PASSWORD="oxuzcjkwbdwtiowg",  # Replace with your Gmail password or App Password
    MAIL_FROM="jackysmith040@gmail.com",  # Replace with your Gmail email
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com",  # Gmail SMTP server
    MAIL_FROM_NAME="Batman",  # Replace with your name
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
)


# Initialize FastMail
fast_mail = FastMail(conf)


async def send_email(subject: str, email: EmailStr, body: str):
    # Create the email message schema
    message = MessageSchema(
        subject=subject, recipients=[email], body=body, subtype="html"
    )

    # Send the email
    await fast_mail.send_message(message)


@app.post("/contact-us")
async def contact_us(
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...),
    phoneNumber: str = Form(...),
    subject: str = Form(...),
):
    # Define the subject and body of the email with HTML formatting
    subject = "Thank you for contacting us!"
    body = f"""
    <html>
        <body>
            <p>Hi {name},</p>
            <p>Thank you for reaching out to us. We will get back to you soon.</p>
            <p>Best Regards,<br>alltogetherafrica</p>
        </body>
    </html>
    """

    try:
        await send_email(subject, email, body)
        return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/donate")
async def donate(
    name: str = Form(...), email: EmailStr = Form(...), amount: float = Form(...)
):
    # Define the subject and body of the email with HTML formatting
    subject = "Thank you for your donation!"
    body = f"""
    <html>
        <body>
            <p>Hi {name},</p>
            <p>Thank you for your generous donation of ${amount}. Your support means a lot to us.</p>
            <p>Best Regards,<br>Your Name</p>
        </body>
    </html>
    """

    try:
        await send_email(subject, email, body)
        return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/get-started")
async def get_started(name: str = Form(...), email: EmailStr = Form(...)):
    # Define the subject and body of the email with HTML formatting
    subject = "Welcome aboard!"
    body = f"""
    <html>
        <body>
            <p>Hi {name},</p>
            <p>Thank you for getting started with us. We are excited to have you on board.</p>
            <p>Best Regards,<br>Your Name</p>
        </body>
    </html>
    """

    try:
        await send_email(subject, email, body)
        return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": exc.detail},
    )

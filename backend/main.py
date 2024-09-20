import os
from fastapi import FastAPI, Form, HTTPException
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import EmailStr
# from starlette.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv('.env')

# Initialize FastAPI app
app = FastAPI()

# CORS setup for connecting to the frontend
origins = ["http://localhost:5173", "localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def success_message():
    return {"message": "Succesfully Served and Deployed"}

# SMTP configuration using environment variables
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("EMAIL"),
    MAIL_PASSWORD=os.getenv("PASSWORD"),
    MAIL_FROM=os.getenv("EMAIL"),
    MAIL_FROM_NAME="All Together Africa",
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
)
fast_mail = FastMail(conf)

# Utility function to send email
async def send_email(subject: str, recipient: EmailStr, body: str):
    message = MessageSchema(
        subject=subject,
        recipients=[recipient],  # Recipients list
        body=body,
        subtype="html",  # Content is HTML formatted
    )
    await fast_mail.send_message(message)

# Company details for reuse in emails
def company_details():
    return """
    <footer style="text-align: center; font-size: 12px; color: #777;">
        <p>CF443 Apollonia Road, Ghana Flag, Oyarifa, Accra, Ghana</p>
        <p>Phone: 233 (0) 54 240 3741 | Email: alltogetherafrica@gmail.com</p>
    </footer>
    """

###########################################################################################
# Route: Contact Us form handler
@app.post("/contact-us")
async def contact_us(
    name: str = Form(...),
    email: EmailStr = Form(...),
    message: str = Form(...),
    phoneNumber: str = Form(...),
    subject: str = Form(...),
):
    # Email subject and body for the user
    user_subject = "Thank you for contacting us!"
    user_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="text-align: center; color: #0056b3;">Hello {name},</h2>
                <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
                <p>If you have any further questions, feel free to contact us.</p>
                <p style="margin-top: 20px;">Best Regards,<br><strong>All Together Africa</strong></p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                {company_details()}
            </div>
        </body>
    </html>
    """

    # Email subject and body for sending to admin (your inbox)
    admin_subject = f"New Contact Us Submission: {subject}"
    admin_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="color: #0056b3;">New Contact Submission</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone Number:</strong> {phoneNumber}</p>
                <p><strong>Subject:</strong> {subject}</p>
                <p><strong>Message:</strong></p>
                <p>{message}</p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                {company_details()}
            </div>
        </body>
    </html>
    """
    
    try:
        # Send email to the admin's inbox
        await send_email(admin_subject, os.getenv("EMAIL"), admin_body)
        
        # Send auto-reply to the user
        await send_email(user_subject, email, user_body)
        
        return {"message": "Form submitted successfully, and confirmation email sent."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")


#####################################################################################
@app.post("/get-started")
async def get_started(
    name: str = Form(...),
    email: EmailStr = Form(...),
    country: str = Form(...),
    phone: str = Form(...),
    address: str = Form(...),
    organisationName: str = Form(...),
    selectedItem: str = Form(...),
    organisationProfile: str = Form(...),
    website: str = Form(...),
    statementOfRequest: str = Form(...),
    giveBackPledge: str = Form(...)
):
    # Email subject and body for the user
    user_subject = "Thank you for getting involved!"
    user_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="text-align: center; color: #0056b3;">Hello {name},</h2>
                <p>Thank you for reaching out to us. We have received your details and will get back to you shortly.</p>
                <p>If you have any further questions, feel free to contact us.</p>
                <p style="margin-top: 20px;">Best Regards,<br><strong>Your Organization</strong></p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            </div>
        </body>
    </html>
    """

    # Email subject and body for sending to admin
    admin_subject = "New Get Involved Submission"
    admin_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="color: #0056b3;">New Submission</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Organisation Name:</strong> {organisationName}</p>
                <p><strong>Selected Item:</strong> {selectedItem}</p>
                <p><strong>Organisation Profile:</strong> {organisationProfile}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>Statement of Request:</strong> {statementOfRequest}</p>
                <p><strong>Give Back Pledge:</strong> {giveBackPledge}</p>
            </div>
        </body>
    </html>
    """
    
    try:
        # Send email to admin and user (this is a placeholder for actual email sending)
        await send_email(admin_subject, os.getenv("EMAIL"), admin_body)
        await send_email(user_subject, email, user_body)
        
        return {"message": "Form submitted successfully, and confirmation email sent."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process form: {str(e)}")


#########################################

@app.post("/donate")
async def donate(
    fullName: str = Form(...),
    email: EmailStr = Form(...),
    country: str = Form(...),
    phone: str = Form(...),
    currency: str = Form(...),
    amount: str = Form(...),
    card: str = Form(...),
    expiryMonth: str = Form(...),
    expiryYear: str = Form(...),
    cvc: str = Form(...)
):
    # Email subject and body for the user
    user_subject = "Thank you for your donation!"
    user_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="text-align: center; color: #0056b3;">Hello {fullName},</h2>
                <p>Thank you for your generous donation of {amount} {currency}. We greatly appreciate your support.</p>
                <p>If you have any further questions or need more information, feel free to contact us.</p>
                <p style="margin-top: 20px;">Best Regards,<br><strong>Your Organization</strong></p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            </div>
        </body>
    </html>
    """

    # Email subject and body for sending to admin (this will notify the admin of the donation)
    admin_subject = f"New Donation from {fullName}"
    admin_body = f"""
    <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
                <h2 style="color: #0056b3;">New Donation Details</h2>
                <p><strong>Name:</strong> {fullName}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Amount:</strong> {amount} {currency}</p>
                <p><strong>Card Details:</strong> {card[-4:]} (ending)</p>
                <p><strong>Expiry:</strong> {expiryMonth}/{expiryYear}</p>
                <p><strong>CVC:</strong> {cvc}</p>
            </div>
        </body>
    </html>
    """
    
    try:
        # Send emails (this is a placeholder for actual email sending)
        await send_email(admin_subject, os.getenv("EMAIL"), admin_body)
        await send_email(user_subject, email, user_body)
        
        return {"message": "Donation processed successfully. A confirmation email has been sent."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process donation: {str(e)}")



#######################################################

if __name__ == '__main__':
    uvicorn.run(app)
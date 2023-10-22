"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export async function sendEmail( formData : FormData, emailTemplate: string) {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!validateString( senderEmail, 100)){
        return {error: "Invalid email address" };
    }

    if(!validateString( message, 5000)){
        return { error: "Invalid message" };
    }

    try {
        const id = await resend.emails.send({
            from: "onboarding@resend.com",
            to: "pascualeburi@gmail.com",
            subject: "New message from personal website",
            reply_to: senderEmail,    
            html: emailTemplate 
        });

        return { id } ;
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }


    
}
import { validateContactFormDataResponse } from "./types";

/**
 * Validates the given value.
 * @param value uknown
 * @param maxLength number
 * @returns bolean
 */
export function validateString( value: unknown, maxLength: number ): value is string {
    if (
        !value ||
        typeof value !== "string" ||
        value.length > maxLength
    ) {
        return false;
    }

    return true
  
  };


  // generate doc for this function
  /**
   * Handles errors messages
   * @param error : unknown
   * @returns string
   */
  export function getErrorMessage( error: unknown ): string {

    if ( error instanceof Error ) {
        return error.message;
    }
    if (error && typeof error === "object" && "message" in error) {
        return String(error.message);
    }

    if (typeof error === "string") {
        return error;
    }

    return "Something went wrong. Please try again later."
  }


  /**
   * Validates the contact form data.
   * @param formData FormData
   * @returns validateContactFormDataResponse
   */

  export function validateContactFormData( formData: FormData ): validateContactFormDataResponse {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!validateString( senderEmail, 100)){
        return {
            error: "Invalid email address"
        };
    }

    if(!validateString( message, 5000)){
        return {
            error: "Invalid message"
        };
    }
    return { error: false};
  }


  /**
   * Convert the characters of the given value in to lowercase excluding spaces.
   * @param value string
   * @returns string
   */
  export function convertToLower( value : string ) : string {
     return value.toString().replace(/\s+/g, '').toLowerCase();

  }
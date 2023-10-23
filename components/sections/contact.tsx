"use client";
import ReactDOMServer from "react-dom/server";
import useSectionInView from "@/lib/hooks/useSectionInView";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import React, { useState } from "react";
import { ContactFormEmail } from "@/email/contact-form-email";
import SubmitButton from "../submit-btn";
import { usePending } from "@/context/pendingContex";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView({ section: "Contact", threshold: 0.5 });
  const [ pending, setPending ] = useState(false);

  const handleContactFormSubmission = async (formData: FormData) => {
    /*     const validate = validateContactFormData(formData);

    if (validate.error !== false) {return validate.error;} */

    let emailTemplateToHTML = "";
    try {
      const emailTemplate = React.createElement(ContactFormEmail, {
        message: formData.get("message") as string,
        senderEmail: formData.get("senderEmail") as string,
      }) as React.ReactElement;

      emailTemplateToHTML = ReactDOMServer.renderToString(emailTemplate);
    } catch (error) {
      return {
        error: "Error rendering email template",
      };
    }

    return await sendEmail(formData, emailTemplateToHTML);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading> Get in Touch </SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:pascualeburi@gmail.com">
          pascualeburi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (FormData) => {
          setPending(true);
          const { error } = await handleContactFormSubmission(FormData);
          setTimeout(() => {
            setPending(false);
          }, 1000);

          if (error) {
            toast.error(error);
          }

          toast.success("Thank you for your message!", { duration: 5000 });
        }}
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-gray-800 dark:text-gray-400 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          required
          maxLength={100}
          placeholder="jonhdoe@example.com..."
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-gray-800 dark:text-gray-400 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>

        <button
          type="submit"
          disabled={pending}
          className="group flex items-center justify-center gap-2 h-[3rem] w-full sm:w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Send Message{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}

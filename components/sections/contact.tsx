"use client";
import ReactDOMServer from "react-dom/server";
import useSectionInView from "@/lib/hooks/useSectionInView";
import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { validateContactFormData } from "@/lib/utils";
import React from "react";
import { ContactFormEmail } from "@/email/contact-form-email";
import SubmitButton from "../submit-btn";
import { usePending } from "@/context/pendingContex";

export default function Contact() {
  const { ref } = useSectionInView({ section: "Contact", threshold: 0.5 });
  const {setPending} = usePending();
  
  setPending(false)

  const handleContactFormSubmission = async (formData: FormData) => {
   
    const validate = validateContactFormData(formData);

    if (validate.error !== false) {
      setPending(false);
      return validate.error;
    }

    const emailTemplate = React.createElement(ContactFormEmail, {
      message: formData.get("message") as string,
      senderEmail: formData.get("senderEmail") as string,
    }) as React.ReactElement;

    const emailTemplateToHTML = ReactDOMServer.renderToString(emailTemplate);
    const response = await sendEmail(formData, emailTemplateToHTML);
    setPending(false);
    return response;
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
          const res = await handleContactFormSubmission(FormData);
          console.log(res);
        }}
      >
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          required
          maxLength={100}
          placeholder="jonhdoe@example.com..."
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>

        <SubmitButton  />
      </form>
    </motion.section>
  );
}

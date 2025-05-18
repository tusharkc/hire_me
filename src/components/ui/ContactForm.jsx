"use client";
import { Toast } from "@/components";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = { fullName: "", email: "", subject: "", message: "" };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      await axios.post("/api/contact", values);
      setShowToast(true);
      resetForm();
    } catch (error) {
      setShowErrorToast(true);
      console.log("error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast
        message={"I will get back to you within 24 hours."}
        showToast={showToast}
        setShowToast={setShowToast}
      />

      <Toast
        isError
        message={"Error occurred while sending message."}
        showToast={showErrorToast}
        setShowToast={setShowErrorToast}
      />
      <div className="container mx-auto h-screen flex items-center justify-center w-screen">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block mb-1">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    placeholder="Full Name"
                    id="fullName"
                    name="fullName"
                    className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                      errors.fullName && touched.fullName
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="fullName"
                    component="p"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-1">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                      errors.subject && touched.subject
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="subject"
                    component="p"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="textarea"
                    placeholder="I have a really cool project idea, I want you to help me with that."
                    id="message"
                    name="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="p"
                    className="text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black px-6 py-2 rounded-md focus:outline-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></span>
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

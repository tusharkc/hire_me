"use client";
import { Toast } from "@/components";
import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        await axios.post("/api/contact", formData);
        setShowToast(true);
      } catch (error) {
        setShowErrorToast(true);
        console.log("error", error);
      }
    }
  };

  const isValidEmail = (email) => {
    return email.includes("@");
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
        message={"Error Occurred while sending message."}
        showToast={showErrorToast}
        setShowToast={setShowErrorToast}
      />
      <div className="container mx-auto h-screen flex items-center justify-center w-screen">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                  errors.fullName ? "border-red-500" : "focus:border-blue-500"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 mt-1">{errors.fullName}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:border-blue-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-1">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Subject"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-black border border-gray-600 focus:outline-none my-4 ${
                  errors.subject ? "border-red-500" : "focus:border-blue-500"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="I have a really cool project idea, I want you to help me with that."
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={`w-full px-4 py-2 rounded-md bg-black my-4 border border-gray-600 focus:outline-none ${
                  errors.message ? "border-red-500" : "focus:border-blue-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

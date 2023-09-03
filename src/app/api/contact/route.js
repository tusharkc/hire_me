import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request, response) => {
  try {
    const requestData = await request.json();
    const appMailId = "tusharkaramchandani25@gmail.com";
    const appPass = "sepnmggcevxfxqho";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: appMailId,
        pass: appPass,
      },
    });

    const mailData = {
      from: requestData?.email,
      to: appMailId,
      subject: requestData?.subject,
      text: `from ${requestData?.email} \n ${requestData?.message}`,
    };

    if (mailData.from !== mailData?.to) {
      await transporter.sendMail(mailData);

      return NextResponse.json(
        {
          message: "Email sent successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Error sending email",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error sending email",
        error,
      },
      { status: 500 }
    );
  }
};

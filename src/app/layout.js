import "./globals.css";
import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata = {
  title: "Tushar Kc | Best Software Engineer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={titilliumWeb.className}>{children}</body>
    </html>
  );
}

import { LoaderLayout } from "@/components";
import "./globals.css";
import { Titillium_Web } from "next/font/google";
import Script from "next/script";

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-BS6L24S39F`}
      />

      <Script id="googleTag" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BS6L24S39F', {
            page_path: window.location.pathname,
            });
          `}
      </Script>
      <body className={titilliumWeb.className}>
        <LoaderLayout>{children}</LoaderLayout>
      </body>
    </html>
  );
}

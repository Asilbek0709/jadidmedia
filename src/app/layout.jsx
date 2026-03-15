import { Open_Sans } from "next/font/google";
import "./globals.css";
import I18nProvider from "./components/I18nProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const opensans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "JADID PUBLITSISTIKASI VA ZAMONAVIY MEDIA TADQIQOTLAR",
  description: "JADID PUBLITSISTIKASI VA ZAMONAVIY MEDIA TADQIQOTLAR Xalqaro ilmiy-amaliy konferensiya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${opensans.variable} `}>
        <I18nProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </I18nProvider>
      </body>
    </html>
  );
}

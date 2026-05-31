import { GoogleTagManager } from "@next/third-parties/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

export const metadata = {
  title: "Vivek Shukla | Founding Full Stack Developer",
  description:
    "Portfolio of Vivek Shukla featuring startup product work, Flutter apps, AI experiments, CRM systems, and frontend experiences with a geeky cyber interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[78rem] xl:max-w-[84rem] 2xl:max-w-[96rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}

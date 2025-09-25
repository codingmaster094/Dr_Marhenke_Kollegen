import Header from "./Header/page";
import "../../public/css/globals.css";
import '../../public/fonts/font.css';
import Footer from "./Footer/page";
import TopButton from "./components/Top-Button";
import CanonicalTag from "./components/CanonicalTag";
export const metadata = {
  title: "Dr. Marhenke & Kollegen",
  description:
    "Find expert medical care with our trusted doctors. Offering personalized treatments, compassionate care, and innovative solutions for your health. Schedule your consultation today!",
  robots: {
    index: false,  // noindex
    follow: false, // nofollow
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <CanonicalTag />
      <Header />
      <main className="relative">
        {children}
      </main>
        <TopButton/>
        <Footer/>
      </body>
    </html>
  );
}

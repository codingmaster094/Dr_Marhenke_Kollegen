import Header from "./components/Header";
import "./globals.css";
import '../../public/fonts/font.css';
import Footer from "./components/Footer";
import TopButton from "./components/Top-Button";
export const metadata = {
  title: "Dr. Marhenke & Kollegen",
  description:
    "Find expert medical care with our trusted doctors. Offering personalized treatments, compassionate care, and innovative solutions for your health. Schedule your consultation today!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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

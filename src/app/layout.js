import Header from "./Header/page";
import "../../public/css/globals.css";
import '../../public/fonts/font.css';
import Footer from "./Footer/page";
import TopButton from "./components/Top-Button";
import CanonicalTag from "./components/CanonicalTag";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
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

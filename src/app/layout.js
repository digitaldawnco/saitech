import "./globals.css";
import 'swiper/css';
import "../../public/css/animate.min.css";
import "../../public/css/fontawesome-all.min.css";
import "../../node_modules/react-modal-video/css/modal-video.css"
import '../../node_modules/react-18-image-lightbox/src/style.css';

export const metadata = {
  title: "SAITECH STUDIO",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet"/>
  <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
    </head>
      <body className="bg-white">
          {children}
      </body>
    </html>
  );
}

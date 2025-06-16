

import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Home from './home/page'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Footer2 from '../components/Footer2/Footer2'
import { BuscaProvider } from './contexts/BuscaContext';








const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dom Quixote",
  description: "Livraria online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-DQvkBjpPgn7RC31MCQoOeC9TI2kdqa4+BSgNMNj8v77fdC77Kj5zpWFTJaaAoMbC" crossOrigin="anonymous"></link>
     
      <BuscaProvider>
        <Header />
        {children}
        <Footer />
        <Footer2/>
      </BuscaProvider>
       

         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.4/dist/js/bootstrap.bundle.min.js" integrity="sha384-YUe2LzesAfftltw+PEaao2tjU/QATaW/rOitAq67e0CT0Zi2VVRL0oC4+gAaeBKu" crossOrigin="anonymous"></script>
       
      </body>
    </html>

  );
}



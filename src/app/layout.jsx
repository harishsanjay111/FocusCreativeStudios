import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar/Navbar';
import Footer from "./Footer/Footer";
const inter = Inter({ subsets: ['latin'] });


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <style>{inter.cssText}</style>
        
      </head>
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

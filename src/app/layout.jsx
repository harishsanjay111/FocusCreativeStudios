import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar/Navbar';
const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <style>{inter.cssText}</style>
        {/* Any other meta tags or head content can be added here */}
      </head>
      <body className={inter.className}>
      <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

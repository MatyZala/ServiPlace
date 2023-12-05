// RootLayout.js
import React from 'react';
import NavBar from './components/navBar';
import './globals.css';
import { Providers } from "./Providers";
import ProvidersPage from './ProvidersPage';
import Sidebar from './components/sidebar';

export const metadata = {
  title: 'ServiPlace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <ProvidersPage>
          <Providers>
            <NavBar />
            <div className="flex">
              <Sidebar className="w-1/4" />
              <div className="ml-[21rem] p-4 w-full h-full">
                {children}
              </div>
            </div>
          </Providers>
        </ProvidersPage>
      </body>
    </html>
  );
}

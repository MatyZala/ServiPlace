'use client'
import NavBar from './components/navBar';
import './globals.css'
import { Providers } from "./Providers";
import ProvidersPage from './ProvidersPage'

export const metadata = {
  title: 'ServiPlace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body >
        <ProvidersPage>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </ProvidersPage>
      </body>
    </html>
  )
}

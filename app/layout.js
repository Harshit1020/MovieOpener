import Navbar from '@/components/Navbar'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'


export const metadata = {
  title: 'Movie-Hunt',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
      <Navbar/>
      {children}</body>
    </html>
  )
}
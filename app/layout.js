import '../styles/globals.css'

export const metadata = { title: 'Visa Mate AI' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

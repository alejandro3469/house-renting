import './globals.css'
import { Poppins } from "@next/font/google";

const roboto = Poppins  ({
  subsets: ["latin"],
  weight: ['300', '400', '700']
});

export const metadata = {
  title: 'Casa en Merida, Yucatan',
  description: 'CRenta de casa completa con alberca en Merida Yucatan',
  keywords: ['Merida', 'Yucatan', 'Renta', 'Casa', 'Vacaciones'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

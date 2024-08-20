import Provider from '@/provider'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Provider>
        <html>
          <body>{children}</body>
        </html>
      </Provider>
    </>
  )
}

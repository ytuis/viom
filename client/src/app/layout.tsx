import Head from "next/head"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head>Sample App</Head>
      <body>{children}</body>
    </html>
  )
}

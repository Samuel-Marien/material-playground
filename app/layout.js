import ResponsiveAppBar from './components/ResponsiveAppBar.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  )
}

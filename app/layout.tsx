import "../css/global.css"
import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata :Metadata = {
  title : {
    template : "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best Movies on the best framwork NEXT.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}

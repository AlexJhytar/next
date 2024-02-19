import { roboto, manrope } from "@/app/fonts";
import "@/styles/main.scss";
import Header from "@/components/Header";

export default function RootLayout( {children} ) {
  return (
    <html lang="en" className={`${roboto.variable} ${manrope.variable}`}>
    <body>
    <Header/>
    {children}
    </body>
    </html>
  );
}

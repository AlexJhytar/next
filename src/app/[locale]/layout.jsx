import { roboto, manrope } from "@/components/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function RootLayout( {children, params: {locale}} ) {
  const messages = useMessages();
  
  return (
    <html lang={locale} className={`${roboto.variable} ${manrope.variable}`}>
    
    <body>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header/>
      <div className="page-wrap">
        {children}
      </div>
      <Footer />
    </NextIntlClientProvider>
    </body>
    </html>
  );
}

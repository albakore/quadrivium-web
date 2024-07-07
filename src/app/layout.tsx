import { Providers } from "@/chakra/Providers";
import type { Metadata } from "next";
import { fonts } from "@/chakra/fonts";
import Header from "@/components/Header";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/chakra/theme";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Quadrivium",
  description: "Quadrivium",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body className={fonts.inter.className}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

import { Outfit } from "next/font/google";
import "./globals.css";

// compoenents
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";
import StoreRedux from "./StoreRedux";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <StoreRedux>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />

            {children}
            <Footer />
          </ThemeProvider>
        </StoreRedux>
      </body>
    </html>
  );
}

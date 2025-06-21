import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E - learning",
  description: "Building the future",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>

           {/* <Toaster position="top-right" /> */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children} {/* Your page content will be rendered here */}
            </ThemeProvider>
        </body>
      </html>

  );
}

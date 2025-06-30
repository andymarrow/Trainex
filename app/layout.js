// app/layout.js
import {
	ThemeProvider as NextThemesProvider,
	ThemeProvider,
} from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ChatBubble from "@/components/ChatBubble/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "E - learning",
	description: "Building the future",
	metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<Toaster />
				{/* <Toaster position="top-right" /> */}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
                    {/* Your page content will be rendered here */}
					{children}
                    {/* Add the ChatBubble component here */}
                    <ChatBubble />
				</ThemeProvider>
			</body>
		</html>
	);
}
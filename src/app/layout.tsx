import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded';
import { StyledEngineProvider, ThemeProvider } from '@mui/joy/styles';
import { CssBaseline } from "@mui/joy";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import theme from "@/components/ThemeRegistry/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster position="top-center" 
      //border color for the toast
      toastOptions={{
        style: {
          border: "1px solid #00A4A6",
        },
        duration: 2000,
        success: {
          icon: <ContentCopyRounded />,
          iconTheme: {
            primary: '#00A4A6',
            secondary: '#fff',
          },
        },
      }}
      />

      <body className={inter.className}>
      <ThemeRegistry>
        <ThemeProvider >
        {children}
        </ThemeProvider>
        </ThemeRegistry>

      </body>
    </html>
  );
}

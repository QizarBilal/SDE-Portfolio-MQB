import localFont from "next/font/local";
import "./globals.css";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/Providers/Theme";
import Sidebar from "@/components/Sidebar";
import Chatbot from "@/components/Chatbot";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Mohammed Qizar Bilal | SDE Portfolio",
  icons:{
    icon: "/Logo.png"
  },
  description: "Software Development Engineer aspirant focused on Python, DSA, and scalable systems. Full-stack developer with expertise in React, Flask, and AI/ML.",
  keywords: "software engineer, SDE, Python developer, DSA, full-stack developer, React, Flask, Machine Learning, AI, JavaScript, TypeScript, Mohammed Qizar Bilal",
  author: "Mohammed Qizar Bilal",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased bg-base text-text-primary`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <NextTopLoader color="#10b981" />
          
          {/* Sidebar Navigation */}
          <Sidebar />

          {/* AI Chatbot */}
          <Chatbot />

          {/* Main Content with left margin for sidebar on desktop */}
          <main className="lg:ml-72 min-h-screen">
            {children}
          </main>

          <Toaster
            position="top-right"
            toastOptions={{
              className: 'font-semibold backdrop-blur-md rounded-xl',
            }}
          />

          <GridPattern
            width={200}
            height={200}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20",
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

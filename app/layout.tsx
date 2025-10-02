
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import ClientLayoutWrapper from "./ClientLayoutWrapper"; // Import the new component

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        {/*
          Move Header, Footer, and Providers into ClientLayoutWrapper.
          The wrapper will decide whether to show them based on the route.
        */}
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}

// NOTE: You can remove the unused "import { Providers } from "./providers";" here
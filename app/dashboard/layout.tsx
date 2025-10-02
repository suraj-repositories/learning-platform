// "use client";

// import AppLayout from "./layout/AppLayout"; // Your old dashboard AppLayout
// import "swiper/swiper-bundle.css";
// import "simplebar-react/dist/simplebar.min.css";
// import "../../styles/index.css";
// import { ThemeProvider } from "./context/ThemeContext";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//     return <ThemeProvider>
//         <AppLayout>{children}</AppLayout>
//     </ThemeProvider>;
// }
"use client";

import AppLayout from "./layout/AppLayout";
import { ThemeProvider } from "./context/ThemeContext";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "../../styles/index.css";
import ScrollToTop from "../../components/ScrollToTop";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AppLayout>
        {children}
        <ScrollToTop />
      </AppLayout>
    </ThemeProvider>
  );
}

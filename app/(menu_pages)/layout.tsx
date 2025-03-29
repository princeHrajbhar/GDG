
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {/* Navbar */}
        <Navbar />
        
        {/* Page Content */}
        <main className="pt-20 px-4 md:px-8 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}

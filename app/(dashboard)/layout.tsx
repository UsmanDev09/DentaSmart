import Navbar from "@/components/navbar";
// import "./globals.css";
import { cn } from "@/lib/utils";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

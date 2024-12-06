import localFont from "next/font/local";
import "./globals.css";
import Timer from '@/components/timer/timer';

export const metadata = {
  title: "Mark Mills",
  description: "by Mark Mills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Timer/ >
		{children}
      </body>
    </html>
  );
}

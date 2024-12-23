import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstroLog",
  description: "AstroLog is an astrophotography application that lets you log and classify all your imaging sessions - by its own or manually.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Rick and Morty Filter",
  description: "Filter characters by status and gender",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

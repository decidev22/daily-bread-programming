import "./globals.css";

export const metadata = {
  title: "Prologue",
  description:
    "Blog and Portfolio of Andy Baeck, Full Stack Engineer",
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

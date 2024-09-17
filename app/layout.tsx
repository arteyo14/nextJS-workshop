import Head from "next/head";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App - Home</title>
        <meta
          name="description"
          content="This is the home page of my Next.js app."
        />
        <meta name="keywords" content="next.js, seo, react, web development" />
        <meta property="og:title" content="My Next.js App - Home" />
        <meta
          property="og:description"
          content="This is the home page of my Next.js app."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.example.com/" />
      </Head>
      <body>{children}</body>
    </html>
  );
}

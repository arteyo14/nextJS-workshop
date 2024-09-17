"use client";
import Head from "next/head";
import "./styles/globals.css";
// import { Metadata } from "next";
import { store } from "./store";
import { Provider } from "react-redux";

// export const metadata: Metadata = {
//   title: "My Next.js App - Home",
//   description: "This is the home page of my Next.js app.",
// };

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
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

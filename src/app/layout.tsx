import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScroll from './parllexComponent/smoothscroll';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ashish Portfolio",
    description: "Passionate Frontend Developer Seeking Next Adventure!",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <SmoothScroll> */}
                    {children}
                {/* </SmoothScroll>     */}
            </body>
        </html>
    );
}

import { Rubik } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import SideBar from "@/components/x/Sidebar";
import FollowBar from "@/components/x/FollowBar";


const rubik = Rubik({ subsets: ["latin"] });



export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={rubik.className} dir="rtl">
        <div className="h-screen bg-black">
        <div className="container h-full mx-auto xl:px-30 max-w-6xl">
            <div className="grid grid-cols-4 h-full">
                <SideBar />
                <div className="col-span-3 lg:col-span-2 border-x-[1px]
                border-neutral-800">
                     {children}
                </div>
               <FollowBar />
            </div>
            
        </div>
      
    </div>
        </body>
      </html>
    </SessionProvider>
  );
}

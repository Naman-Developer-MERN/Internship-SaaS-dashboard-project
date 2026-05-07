import { useEffect, useState } from "react";
import DashSidebar from "./DashSidebar";
import DashNavbar from "./DashNavbar";
import { Outlet } from "react-router-dom";

export default function DashLayout(){
      
      const [isOpen, setIsOpen] = useState(false);

      const [theme,setTheme] = useState(
            localStorage.getItem("theme") || "light" 
      );

      const toggleSideBar = ()=>{
            setIsOpen(!isOpen);
      }
      const toggleTheme = () => {
            setTheme(theme === 'light' ? 'dark' : 'light');
      }

      useEffect(()=>{
            const root = window.document.documentElement;

            if(theme === "dark"){
                  root.classList.add('dark');
            }
            else{
                root.classList.remove("dark");
            }

            localStorage.setItem("theme",theme);
      },[theme]);
      console.log(isOpen)

      return(
            <>
                  <div className="flex min-h-screen dark:border-white  text-slate-950 dark:bg-slate-950
                  dark:text-slate-50" >
                        <DashSidebar isOpen = {isOpen}  />
                        {isOpen && (
                              <div
                                    className="fixed inset-0 bg-white/40 z-40 md:hidden"
                                    onClick={toggleSideBar}  />
                        )}
                        <div className="flex flex-col flex-1" >
                              
                              <DashNavbar toggleSideBar = {toggleSideBar} toggleTheme = {toggleTheme} 
                              isOpen = {isOpen} theme = {theme} />

                              <main className="flex flex-col flex-1 p-4 min-h-screen dark:bg-slate-950 
                              dark:text-white" >
                                    <Outlet />
                              </main>     
                        </div>
                  </div>
            </>
      )
}

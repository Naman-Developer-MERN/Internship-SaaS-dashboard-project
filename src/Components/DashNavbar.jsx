import { Bell, Dot, Menu, Moon, MoveRight, Sun } from "lucide-react";
import user from '../assets/user.svg';
import omega from '../assets/omega.svg';


export default function DashNavbar({toggleSideBar,isOpen,toggleTheme,theme}){

      return(
            <>
                  <div className="flex h-16 justify-evenly md:justify-between items-center shadow-md dark:bg-slate-950 
                  dark:text-white dark:border-b bg-indigo-50 sticky top-0 z-30" >
                        <img src={omega} alt="logo" className="h-12 w-12 md:hidden sm:block object-contain" />
                        <div className="flex gap-2 items-center mx-3 cursor-pointer transition-all" onClick = {toggleSideBar} >
                              {
                                    isOpen ? <Menu size = {20} /> :  <MoveRight size = {20} />
                              }
                              <h2 className = "md:text-md hidden md:block text-sm dark:text-white font-semibold text-slate-900" >DashBoard</h2>
                        </div>
                        
                        <div className="flex items-center gap-4 md:gap-6 md:justify-evenly" >
                              <input type = "search" alt = "no" placeholder = "Search Here....." 
                              className="p-1 border rounded-md md:w-64 md:p-2 w-30 dark:border dark:text-white dark:bg-slate-950" />
                              <div className="cursor-pointer relative ">
                                    <Bell size = {18} />
                                    <span className="absolute -top-3 -right-2 md:h-5 md:w-5 h-4 w-4 text-black sm:text-[8px] md:text-[15px]
                                    rounded-full dark:text-black flex items-center justify-center"><Dot  color = {'red'} /></span>
                              </div>
                              <button onClick = {toggleTheme} className = "cursor-pointer" >
                                    {
                                          theme === 'dark' ? <Sun size = {18} /> :
                                          <Moon  size = {18} />   
                                    }
                              </button>
                              <img src = {user} alt = "" className = "h-10 w-10 md:h-10 md:w-10 object-contain" />
                        </div>
                  </div>
            </>
      )
}
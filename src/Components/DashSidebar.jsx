import {House,User,BookOpen,UserStar,Megaphone,HandCoins,Settings} from 'lucide-react';
import omega from '../assets/omega.svg';
import { NavLink } from 'react-router-dom';

export default function DashSidebar({ isOpen }) {


      return (
      <aside className={`h-screen overflow-y-auto bg-indigo-50 fixed md:sticky top-0 left-0 z-50 
            shadow-xl overflow-hidden transform transition-all ease-in-out duration-300 w-58  
            dark:bg-slate-950 dark:text-white dark:border-r md:translate-x-0 
                  ${isOpen ? "translate-x-0" : "-translate-x-full"}
                  
                  ${isOpen  ? "md:w-58" :"md:w-20" } `} >

            <div className="flex items-center h-16 px-4 bg-indigo-300 dark:text-slate-950" >
                  <img src={omega} alt="logo" className="h-14 w-14 md:h-16 md:w-16 object-contain" />

                  {
                        isOpen && <h1 className="md:block  ml-3 text-xl md:text-2xl font-serif " >
                              BrainSeed.  
                        </h1> 
                  }
                  
            </div>

            <div className="mt-6 px-1" >

                  <NavLink to = "/" >
                        {
                              ({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:text-indigo-700 hover:bg-slate-100
                                    transition mb-2
                                    ${
                                          isActive 
                                                ? "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800" 
                                                : "hover:bg-indigo-100 rounded-2xl dark:hover:bg-slate-900 dark:hover:text-white "
                                    }
                                    ${isOpen ? "justify-start" : "justify-center" }`}>
                                    <House size={20} />
                                    { 
                                          isOpen && <span> Dashboard</span>
                                    }
                                    </div>
                              )
                        }
                  </NavLink>

                  <NavLink to = "/student" >
                        {
                              ({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition mb-2
                                          ${isOpen ? "justify-start": "justify-center" } 
                                          
                                                ${isActive 
                                                ? "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800"
                                                : "hover:bg-indigo-100 rounded-2xl dark:hover:bg-slate-900 dark:hover:text-white "
                                          }`} >
                                          <User size={20} />
                                          {
                                                isOpen && <span>Students</span>
                                          }
                                          
                                    </div>
                              )
                        }
                  </NavLink>

                  <NavLink to = "/course" >
                        {
                              ({isActive}) => (

                              <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer  hover:bg-indigo-100 hover:text-indigo-700 mb-2
                              transition ${isOpen ? "justify-start" : "justify-center" } 
                                    ${isActive 
                                          ?  "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800"
                                          : "hover:bg-indigo-100 rounded-2xl dark:hover:bg-slate-900 dark:hover:text-white "
                                    }
                              `}>
                                    <BookOpen size={20} />
                                    {
                                          isOpen && <span>Courses</span>
                                    }
                              </div>
                              )
                        }
                  </NavLink>

                  <NavLink to = "/faculty" >
                        {
                              ({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition mb-2
                                          ${isOpen ? "justify-start": "justify-center" } 
                                          
                                                ${isActive 
                                                ? "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800"
                                                : "hover:bg-indigo-100 rounded-2xl dark:hover:bg-slate-900 dark:hover:text-white "
                                          }`} >
                                          <UserStar size={20} />
                                          {
                                                isOpen && <span>Faculty</span>
                                          }
                                          
                                    </div>
                              )
                        }
                  </NavLink>

                   <NavLink to = "/attendance" >
                        {
                              ({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition mb-2
                                          ${isOpen ? "justify-start": "justify-center" } 
                                          
                                                ${isActive 
                                                ? "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800"
                                                : "hover:bg-indigo-100 rounded-2xl dark:hover:bg-slate-900 dark:hover:text-white "
                                          }`} >
                                          <Megaphone size={20} />
                                          {
                                                isOpen && <span>Attendance</span>
                                          }
                                          
                                    </div>
                              )
                        }
                  </NavLink>

                   <NavLink to = "/fees" >
                        {
                              ({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition mb-2
                                          ${isOpen ? "justify-start": "justify-center" } 
                                          
                                                ${isActive 
                                                ? "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800"
                                                : "hover:bg-indigo-100 rounded-2xl dark:hover:bg-slate-900 dark:hover:text-white "
                                          }`} >
                                          <HandCoins size={20} />
                                          {
                                                isOpen && <span>Fees/payments</span>
                                          }
                                          
                                    </div>
                              )
                        }
                  </NavLink>

                  <NavLink to = "/setting" >
                        {
                              ({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-indigo-100 hover:text-indigo-700 transition mb-2
                                          ${isOpen ? "justify-start": "justify-center" } 
                                          
                                                ${isActive 
                                                ? "bg-indigo-100 rounded-2xl text-indigo-700 dark:text-white dark:bg-slate-800"
                                                : "hover:bg-indigo-100 dark:hover:bg-slate-900 dark:hover:text-white rounded-2xl"
                                          }`} >
                                          <Settings size={20} />
                                          {
                                                isOpen && <span>Settings</span>
                                          }
                                          
                                    </div>
                              )
                        }
                  </NavLink>
            </div>
      </aside>
  );
}
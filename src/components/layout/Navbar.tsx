import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Topbar } from "./Topbar";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/ButtonMain";



 const navlink=[
    {href :"#tour", label :"Tour"},
    {href :"#destination", label :"Destination"},
    {href :"#blog", label :"Blog"},
    {href :"#dashboard", label :"Dashboar"},
    {href :"#contact", label :"Contact"},
 ]
export const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  return (

   <header className=" animate-fade-in  m-0">
    <Topbar/>
    <nav className=" mx-auto pr-4 flex justify-between items-center  ">
       <div className="bg-[#081e2a] py-8 px-18     [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)] "> <img src="/public/logo.png" alt="" className="w-32 h-auto"/>
        {/* desktop vertion */}</div>
        <div>
            <div className=" hidden md:flex  gap-5 px-3  " >
                {navlink.map((link,index)=> (
                <a href={link.href} key={index} className="font-jakarta font-semibold  text-[16px] px-3  hover:text-[#4da528] rounded-full duration-300 text-[#081e7d] tracking-wide">{link.label} </a>
                ))}
            </div>
        </div>
        {/* buttonn */}
        <div className="hidden md:flex items-center gap-3 font-semibold text-[16px] font-jakarta left-0 ">
           <ModeToggle/>
           <Button size="default" className="bg-[#ff970d] ">Sign in </Button>
           <Button size="default" className="bg-[#4da528] hover:bg-[#ff970d]">Register</Button>
        </div>
        {/* Mobile Menu button */}
        <div className="md:hidden p-2 text-foreground "

        onClick={()=> setIsMobileMenuOpen((prev) => !prev)}>
            <button>
              { isMobileMenuOpen ? <X size={24}/>: <Menu size={24}/>}
            </button>
        </div>

    </nav>
     {/* Mobile nav bar */}
       {isMobileMenuOpen &&(
         <div className="animate-fade-in transition-all md:hidden  px-5 py-5  min-h-screen justify-center items-center  ">
            <div className=" flex flex-col gap-y-10 items-center">
               {navlink.map((link,index)=>
               <a href={link.href}
               key={index}
               className="text-lg font-semibold  " >{link.label}</a>

            )}
             <Button size="default" className="w-[80%]  "> Contact</Button>
            </div>
        </div>

       )}
   </header>

  )
}

import { Calendar, Mail, Phone } from "lucide-react"
import { FaFacebookF, FaLinkedinIn, FaVimeoV } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const Topbar = () => {
    return (
        <>
            <div className="w-full bg-[#4da528] font-jakarta text-white px-6 flex items-center justify-between">
                {/* left side */}
                <div className="flex items-center gap-10 text-[15px] font-normal">
                    <div className="hidden md:flex items-center  gap-1"><Calendar size={20}/>Thursday, Mar 26, 2021</div>
                    <div className="flex items-center gap-1"><Mail size={20}/>  Info@Webmail.Com</div>
                    <div className=" hidden md:flex items-center gap-1"><Phone size={20} /> 684 555-0102 490</div>

                    
                </div>
                {/* right side */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:block underline underline-offset-1 font-medium text-[14px] ">Booking Now</div>
                    <div className="hidden lg:block font-medium text-[15px] ">Follow Us :</div>
                    <div className="flex items-center text-[#472a04] gap-6 bg-[#ff970d] py-5 px-8 font-[10px]">
                        <FaFacebookF className=' text-[14px] hover:text-[#4da528] '/>
                        <FaXTwitter className=' text-[14px]  hover:text-[#4da528] ' />
                        <FaVimeoV className=' text-[14px]  hover:text-[#4da528] '/>
                        <FaLinkedinIn className=' text-[14px]  hover:text-[#4da528] '/> 

                    </div>

                </div>
            </div>

        </>
    )
}

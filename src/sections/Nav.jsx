import { navLinks } from "../const"
{/*assets */ }
import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import Button from "../components/Button"
import { useState } from "react"
export const Nav = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(true);
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className="padding-x  py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center  max-container ">
                <a href="/">
                    <img src={headerLogo} alt="headerLogo" width={129}
            height={9}/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
                    {navLinks.map((ele) => (
                        <li key={ele.label} >
                            <a
                            className="font-montserrat leading-normal text-lg text-slate-gray hover:text-orange-500"
                            href={ele.href}>{ele.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a className="text-[16px] rounded-full border-2 border-coral-red px-4 py-3" href='/'>Explore now</a>
                    <a href='/'>
                    <Button label={'sign up'} />
                    </a>
                </div>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger icon" width={25} height={25} onClick={toggleMenu }/>
                </div>
                  {/* Mobile Navigation Menu */}
                 {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="absolute right-2 top-0 z-20 lg:hidden bg-white">
                        <div className="flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex justify-between items-center padding-x py-8">
                            
                                <div className="cursor-pointer m-auto" onClick={toggleMenu}>
                                    <span className="text-2xl">&times;</span>
                                </div>
                            </div>
                            
                            {/* Mobile Navigation Links */}
                            <ul className="flex flex-col items-center justify-center flex-1 gap-8 rounded-xl mr-2  bg-slate-300 px-5 py-3">
                                {navLinks.map((ele) => (
                                    <li key={ele.label}>
                                        <a
                                            className="font-montserrat leading-normal text-xl text-slate-gray hover:text-orange-500"
                                            href={ele.href}
                                            onClick={toggleMenu} // Close menu when link is clicked
                                        >
                                            {ele.label}
                                        </a>
                                    </li>
                                ))}
                                
                                {/* Mobile Buttons */}
                                <div className='flex flex-col gap-4 mt-8'>
                                    <a 
                                        className="text-center text-[16px] rounded-full border-2 border-coral-red px-6 py-3" 
                                        href='/'
                                        onClick={toggleMenu}
                                    >
                                        Explore now
                                    </a>
                                    <div onClick={toggleMenu}>
                                        <Button label={'sign up'} />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                )}

            </nav>
        </header>

    )
}

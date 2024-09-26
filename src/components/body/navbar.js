import React from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <>

        <div className={style.navbar}>
            <div className={style.logo}>
                <a href="/https://www.google.com/">Clarity</a>
                </div>
                <div className={style.navlinks}>
                    <a href="/https://www.google.com/">Join Now</a>                 
                    
                    </div>  
         
          
            
            
            </div>          


      
    
        </>
        
        

    )
}
export default Navbar;
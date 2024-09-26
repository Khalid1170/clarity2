import React from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <>

        <div className={style.navbar}>
            <div className={style.logo}>
                <a href="/">Clarity</a>
                </div>
                <div className={style.navlinks}>
                    <a href="/">Join Now</a>                 
                    
                    </div>  
         
          
            
            
            </div>          


      
    
        </>
        
        

    )
}
export default Navbar;
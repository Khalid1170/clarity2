import React from "react";
import style from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";




const footer = () => {
return (
    <>
    <div className={style.footer}>
        <div className={style.footer1}>
            <p>© 2023 Clarity. All rights reserved.</p>
        </div>
        <div className={style.footer2}>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
        </div>
        <div className={style.socials}>
            <Link href="/facebook.com" target="_blank">
            <Image src="/facebook.png" alt="FB" width={26} height={26} />
            </Link>
            <Link href="www.tiktok.com" target="_blank">
            <Image src="/tiktok.png" alt="FB" width={26} height={26}/>
            </Link>
            <Link href="/twitter.com" target="_blank">
            <Image src="/Twitter.png" alt="FB" width={26} height={26}/>
            </Link>
            <Link href="https://www.instagram.com/leomessi/?hl=en" target="_blank">
            <Image src="/instagram2.png" alt="FB" width={26} height={26}/>
            </Link>
            <Link href="/linkedin.com" target="_blank">
            <Image src="/Linkedin.png" alt="FB" width={26} height={26}/>
            </Link>
            
            
        </div>
    </div>


    

  
            

    </>
    
    

)
}

export default footer;
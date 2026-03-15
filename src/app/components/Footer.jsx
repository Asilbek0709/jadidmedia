"use client"

import Link from "next/link"

export default function Footer(){



    return(
        <>
            <footer>
                <main>
                    <div className="footerLogo">
                        <img src="/logoFooter.png" alt="" />
                        <p>JADID PUBLITSISTIKASI VA ZAMONAVIY MEDIA TADQIQOTLAR</p>
                    </div>
                    <div className="footerNavigation">
                        <Link className="footerLink" href={"/"}>Bosh sahifa</Link>
                        <Link className="footerLink" href={"/conference"}>Anjuman</Link>
                        <Link className="footerLink" href={"/contact"}>Aloqa</Link>
                    </div>
                    <div className="footerContact">
                        <p><strong>Manzil:</strong> Markaz-5 Qiyot-88</p>
                        <p><strong>Murojaat uchun:</strong> +998 (90) 123 45 67</p>
                        <p><strong>Elektron pochta:</strong> mail@gmail.com</p>
                    </div>
                </main>
                <nav className="devInfo">
                   <p>Sayt Silicon hub & Atom Innovations tomonidan ihslab chiqarilgan <a href="https://t.me/+998934700718">Ma'lumot uchun</a></p> 
                </nav>
            </footer>
        </>
    )
}
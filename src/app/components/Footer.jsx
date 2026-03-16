"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Footer(){

    const { t } = useTranslation()

    return(
        <>
            <footer>
                <main>
                    <div className="footerLogo">
                        <img src="/logoFooter.png" alt="" />
                        <p>{t("footer.footer_title")}</p>
                    </div>
                    <div className="footerNavigation">
                        <Link className="footerLink" href={"/"}>{t("footer.main")}</Link>
                        <Link className="footerLink" href={"/conference"}>{t("footer.conf")}</Link>
                        <Link className="footerLink" href={"/contact"}>{t("footer.contact")}</Link>
                    </div>
                    <div className="footerContact">
                        <p><strong>{t("footer.location")}</strong> Markaz-5 Qiyot-88</p>
                        <p><strong>{t("footer.phone")}</strong> <a href="tel:998977063607">+998 97 706 36 07</a>, <a href="tel:998971980529">+998 97 706 36 07</a></p>
                        <p><strong>{t("footer.email")}</strong> <a href="ms.maxsumova@mail.ru">ms.maxsumova@mail.ru</a>, <a href="suleymonova1224@gmail.com">suleymonova1224@gmail.com</a></p>
                    </div>
                </main>
                <nav className="devInfo">
                   <p>{t("footer.dev")} <a href="https://t.me/+998934700718">{t("footer.dev_info")}</a></p> 
                </nav>
            </footer>
        </>
    )
}
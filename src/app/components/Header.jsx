"use client"

import Link from "next/link"
import { useState    } from "react"
import { useTranslation } from "react-i18next";

export default function Header() {


const [open, setOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const currentLang = i18n.language;

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

    return(
        <header>
            <div className="headerLogo">
                <img src="/favicon.png" alt="" />
            </div>
            <div className="headerNavigation">
                <Link className="headerLink" href={"/"}>{t("header.main")}</Link>
                <Link className="headerLink" href={"/conference"}>{t("header.conf")}</Link>
                <Link className="headerLink" href={"/contact"}>{t("header.contact")}</Link>
                <div className="language-dropdown">
                <button className="language-dropdown-button">
                {currentLang.toUpperCase()}
                <svg className="arrow" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" fill="none" stroke="#000" strokeWidth="2" />
                </svg>
                </button>

                <div className="language-dropdown-menu">
                <button
                    className={`language-dropdown-button ${currentLang === "uz" ? "active" : ""}`}
                    onClick={() => changeLang("uz")}
                >
                    UZ
                </button>
                <button
                    className={`language-dropdown-button ${currentLang === "en" ? "active" : ""}`}
                    onClick={() => changeLang("en")}
                >
                    EN
                </button>
                <button
                    className={`language-dropdown-button ${currentLang === "ru" ? "active" : ""}`}
                    onClick={() => changeLang("ru")}
                >
                    RU
                </button>
                </div>
            </div>
            </div>
                <button
                    className={`burger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`mobileMenu ${open ? "show" : ""}`}>
                    <Link className="headerLink" href="/" onClick={() => setOpen(false)}>{t("header.main")}</Link>
                    <Link className="headerLink" href="/conference" onClick={() => setOpen(false)}>{t("header.conf")}</Link>
                    <Link className="headerLink" href="/contact" onClick={() => setOpen(false)}>{t("header.contact")}</Link>
                    <div className="language-dropdown mobile">
                        <button
                            className={`language-dropdown-button ${currentLang === "uz" ? "active" : ""}`}
                            onClick={() => changeLang("uz")}
                        >
                            UZ
                        </button>
                        <button
                            className={`language-dropdown-button ${currentLang === "en" ? "active" : ""}`}
                            onClick={() => changeLang("en")}
                        >
                            EN
                        </button>
                        <button
                            className={`language-dropdown-button ${currentLang === "ru" ? "active" : ""}`}
                            onClick={() => changeLang("ru")}
                        >
                            RU
                        </button>
                    </div>
                </nav>
        </header>
    )
}
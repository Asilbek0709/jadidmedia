"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Marquee(){

    const { t } = useTranslation();

    return(
        <>
        <Link href={"/"}>
          <div className="marquee">
                <div className="marquee-bg-text">
                  <span>{t("marquee.questn")}</span><span>{t("marquee.questn")}</span>
                </div>
                <div className="marquee-content">
                  <div className="marquee-arrow-cont">
                    <svg className="marquee-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
          </div>
        </Link>
        </>
    )
}
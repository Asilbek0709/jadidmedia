"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function ConfInfo() {

    const { t } = useTranslation()

    return(
        <>
            <section className="latestIssue">
                <div className="issueImage">
                    <img src="/conf.png" alt="" />
                </div>
                <div className="issueInfo">
                    <h1>{t("hero.hero_title")}</h1>
                    <p>{t("hero.hero_desc")}</p>
                    <Link href={"/conference"} className="variationBtn">Batafsil</Link>
                </div>
                
            </section>
        </>
    )
}
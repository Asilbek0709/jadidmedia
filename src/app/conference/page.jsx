"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Conference(){

    const { t } = useTranslation()

    const variations = [
        { id: 1, description: t("variation_1"), file: "/variation_1.pdf"},
        { id: 2, description: t("variation_2"), file: "/variation_2.pdf"},
        { id: 3, description: t("variation_3"), file: "/variation_3.pdf"},
    ]

    return(
        <>
            <section className="conferencePage">
                <div className="conferenceImage">
                    <img src="/conf.png" alt="" />
                </div>
                <ul className="conferenceVariations">
                    {variations.map(col => (
                        <li key={col.id} className="variation">
                            <Link href={`/variation/${col.id}`} className="variationLink">
                                {col.description}
                            </Link>
                            <a href={col.file} download className="variationBtn">{t("download")}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
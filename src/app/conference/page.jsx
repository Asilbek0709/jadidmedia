"use client"

import Link from "next/link"

export default function Conference(){

    const variations = [
        { id: 1, description: "MAHMUDXO‘JA BEHBUDIYNING PUBLITSISTIK MEROSI"},
        { id: 2, description: "JADID MATBUOTINING MILLIY JURNALISTIKADA TUTGAN O‘RNI VA AHAMIYATI"},
        { id: 3, description: "ZAMONAVIY JURNALISTIKA TARAQQIYOTINING DOLZARB MASALALARI"},
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
                            <a href="/favicon.png" download className="variationBtn">Yuklash</a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
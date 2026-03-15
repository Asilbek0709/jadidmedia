"use client"

import Link from "next/link"

export default function Marquee(){
    return(
        <>
        <Link href={"/"}>
          <div className="marquee">
                <div className="marquee-bg-text">
                  <span>SAVOLLARINGIZ BORMI</span><span>SAVOLLARINGIZ BORMI</span>
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
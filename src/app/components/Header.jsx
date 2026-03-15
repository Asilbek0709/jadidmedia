"use client"

import Link from "next/link"
import { useState    } from "react"

export default function Header() {


const [open, setOpen] = useState(false);

    return(
        <header>
            <div className="headerLogo">
                <img src="/favicon.png" alt="" />
            </div>
            <div className="headerNavigation">
                <Link className="headerLink" href={"/"}>Bosh sahifa</Link>
                <Link className="headerLink" href={"/conference"}>Anjuman</Link>
                <Link className="headerLink" href={"/contact"}>Aloqa</Link>
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
                    <Link className="headerLink" href="/" onClick={() => setOpen(false)}>Bosh sahifa</Link>
                    <Link className="headerLink" href="/conference" onClick={() => setOpen(false)}>Anjuman</Link>
                    <Link className="headerLink" href="/contact" onClick={() => setOpen(false)}>Aloqa</Link>
                </nav>
        </header>
    )
}
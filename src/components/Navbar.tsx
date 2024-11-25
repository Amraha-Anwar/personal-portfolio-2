"use client"

import styles from "@/styles/Navbar.module.css"
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

function Navbar(){
    const [isOpen , setIsOpen]=useState(false)
    const toggleSideBar = ()=> {
        setIsOpen(!isOpen);
    };
  

    return(
        <>
        <nav className={styles.navbar}>
            <Logo/>
    <button className={styles.hamburger} onClick={toggleSideBar}> {"\u2261"} </button> {/* hamburger code*/}
                <div className={`${styles.sideBar} ${isOpen ? styles.open : ''}`}>
                    <ul className={styles.navlinks}>
                        <li><Link className={styles.link} href="/">Home</Link></li>
                        <li><Link className={styles.link} href="/about">About</Link></li>
                        <li><Link className={styles.link} href="/contact">Contact</Link></li>
                    </ul>
                    <button className={styles.closebutton} onClick={toggleSideBar}> {"\u00D7"}</button>  {/* close button code */}
                </div>

    </nav>
        </>
    )
}
export default Navbar
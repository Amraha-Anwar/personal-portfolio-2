"use client"

import styles from "@/styles/About.module.css"
import Link from "next/link"
import ScrollAbout from '@/components/ScrollAbout'
import SkillSection from "@/components/ScrollSkill";
import Projects from "@/components/ScrollProjects";

function About(){
    return(
        <>
        <div className={styles.main}>
            <div className={styles.links}>
            <button className={styles.btn1}>
                <Link className={styles.link} href={"/"}>{`HOME >`}</Link>
                </button>
                <button className={styles.btn2}>
                    <Link className={styles.link1} href={"/about"}>{`ABOUT ME >`}</Link>
                </button>
                </div>
                 <h1 className={styles.about_heading}>About Me</h1>

        {/* animation on scroll for about section */}
      <ScrollAbout> 
        ..
      </ScrollAbout>

      {/* animation on scroll for skills secion */}
      <SkillSection></SkillSection>

      {/* animation on scroll for projects section */}
      <Projects/>

      <p className={styles.copyright}>&copy; 2024 All rights reserved | This portfolio is made with &hearts; by A<sub>A_.</sub></p>
        </div>
        </>
    )
}
export default About
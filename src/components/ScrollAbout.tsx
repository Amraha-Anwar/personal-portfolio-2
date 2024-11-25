'use client';   

import styles from '@/styles/About.module.css'
import Image from 'next/image';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';

export default function ScrollAbout({children}:{children: React.ReactNode}){

    const ref =useRef(null);
    const isInView = useInView(ref, {
        once: true
    })
    return <motion.div
        ref={ref}
        initial={{
            opacity: 0,
            y: 50
        }}  
        animate={
            isInView? {opacity: 1, y:0}:{opacity: 0, y:50 }
        }
        transition={{
            duration:1
        }}
        className={styles.scroll_about}
        
    >
        {/* about section for below 768px*/}
        <div className={styles.center}>
     A UI/UX Designer &amp; Front-End Developer Based in Pakistan
     <p className={styles.para}>With a keen eye for detail and a love for innovative design, I transform ideas into interactive, responsive, and seamless web solutions.</p>
    
     <div className={styles.cv_form}>
        <div className={styles.keys}>
            <p>Name:</p>
            <p>Skills:</p>
            <p>Email:</p>
            <p>Phone:</p>
            <p>Address:</p>
        </div>
        <div className={styles.values}>
            <p className={styles.p1}>Amraha Anwar</p>
            <p className={styles.p2}>Front-end development</p>
            <p className={styles.p3}>amrahaanwar@gmail.com</p>
            <p className={styles.p4}>+1234-5678910</p>
            <p className={styles.p5}>somewhere in Karachi, Pakistan</p>
        </div>
    </div>
    <button className={styles.download_btn}>DOWNLOAD CV</button>
    </div>

        {/* about section for above 768 px */}
        <main className={styles.main_div}>
        <div className={styles.left_container}>
            <Image className={styles.image} src="/images/pic.jpg" alt="picture" width={550} height={550}/>
        </div>
    <div className={styles.right_container}>
    A UI/UX Designer &amp; Front-End Developer Based in Pakistan
     <p className={styles.para}>With a keen eye for detail and a love for innovative design, I transform ideas into interactive, responsive, and seamless web solutions.</p>
    
     <div className={styles.cv_form}>
        <div className={styles.keys}>
            <p>Name:</p>
            <p>Skills:</p>
            <p>Email:</p>
            <p>Phone:</p>
            <p>Address:</p>
        </div>
        <div className={styles.values}>
            <p className={styles.p1}>Amraha Anwar</p>
            <p className={styles.p2}>Front-end development</p>
            <p className={styles.p3}>amrahaanwar@gmail.com</p>
            <p className={styles.p4}>+1234-5678910</p>
            <p className={styles.p5}>somewhere in Karachi, Pakistan</p>
        </div>
    </div>
    <button className={styles.download_btn}>DOWNLOAD CV</button>
    </div>
    </main>

        

    
    </motion.div>
}

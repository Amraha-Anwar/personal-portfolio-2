import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Projects.module.css'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
    return(
        <div className={styles.projects_section}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="project-card"
        >
           <div>
            <p className={styles.work}>Work</p>
            <h1 className={styles.workHeading}>{`What I've Built`}</h1>
            </div>

            <div className={styles.portfolio}>
                
                <Image src="/images/haven&hues.png" alt="project 1" className={styles.images} width={500} height={500}/>
                <Image src="/images/hijab.png" alt="project 2" className={styles.images} width={500} height={500}/>
                <Image src="/images/portfolio.png" alt="project 3" className={styles.images} width={500} height={500}/>
                <Image src="/images/npm.png" alt="project 4" className={styles.images} width={500} height={500}/>
            </div>

            <div className={styles.portfolio2}>
                <div className={styles.row1}>
                <Image src="/images/haven&hues.png" alt="project 1" className={styles.image1} width={500} height={500}/>
                <Image src="/images/hijab.png" alt="project 2" className={styles.image2} width={500} height={500}/>
                </div>
                <div className={styles.row2}>
                <Image src="/images/portfolio.png" alt="project 3" className={styles.image1} width={500} height={500}/>
                <Image src="/images/npm.png" alt="project 4" className={styles.image2} width={500} height={500}/>
                </div>
            </div>
        </motion.div>

        {/* page numbers buttons */}
        <div className={styles.buttons}>
            <button className={styles.btn}><Link href="#" className={styles.li}>{`<`}</Link></button>
            <button className={styles.btn1}><Link href="#" className={styles.li_1}>1</Link></button>
            <button className={styles.btn}><Link href="#" className={styles.li}>2</Link></button>
            <button className={styles.btn}><Link href="#" className={styles.li}>3</Link></button>
            <button className={styles.btn}><Link href="#" className={styles.li}>4</Link></button>
            <button className={styles.btn}><Link href="#" className={styles.li}>{`>`}</Link></button>
        </div>
           
        </div>
    )
}
export default Projects
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* Header text for all screens */}
    <div className={styles.header}>
    <main className={styles.navbar}>
       {/* 2 containers will appear from medium to xl screens */}

    <div className={styles.leftcontainer}>    {/* left container*/}
      <h2 className={styles.dev}>{`UI/UX DESIGNER & FRONT-END DEVELOPER`}</h2>
      <p className={styles.name}>{`I'm Amraha`}</p>
      <p className={styles.name1}>Anwar</p>

    </div>

   <div className={styles.rightcontainer}>    {/* right container*/}
    <Image className={styles.profile} src="/images/profile.png" alt="profile picture" width={800} height={800} />
   </div>

   {/* only 1 container for small screens */}
   <div className={styles.centerdiv}>
   <Image className={styles.profile} src="/images/profile.png" alt="profile picture" width={800} height={800} />
   <h2 className={styles.sm}>{`UI/UX DESIGNER & FRONT-END DEVELOPER`}</h2>
   <p className={styles.sm_name}>{`I'm Amraha`}</p>
   <p className={styles.sm_name1}>Anwar</p>
   </div>
    </main>

    <div className={styles.btn}>
      <button className={styles.btn1}><Link className={styles.btnlink} href={"/about"}>MORE ABOUT ME</Link></button>
      <button className={styles.btn2}>HIRE ME</button>
    </div>
    <p className={styles.copyright}>&copy; 2024 All rights reserved | This portfolio is made with &hearts; by A<sub>A_.</sub></p>
    </div>
    </>
  );
}

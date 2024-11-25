import Link from "next/link"
import styles from "@/styles/Navbar.module.css"


function Logo(){
    return(
        <div className={styles.navcontainer}>
        <Link className={styles.logo} href="#">A<sub>A_.</sub></Link>
      </div>
    )
}
export default Logo
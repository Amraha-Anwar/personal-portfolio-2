import Link from 'next/link'
import styles from '@/styles/Contact.module.css'

function Contact(){
    return(
        <>
        <div className={styles.main}>
            <div className={styles.buttons}>
                <button className={styles.btn1}>
                    <Link className={styles.link1} href={"/about"}>{`ABOUT ME >`}</Link>
                </button>
                <button className={styles.btn2}>
                    <Link className={styles.link2} href={"/contact"}>{`CONTACT >`}</Link>
                </button>
            </div>
                <h1 className={styles.contact_heading}>Contact Me</h1>
    <div className={styles.container}>

                {/* Contact Details */}
        <div className={styles.left}>
            <h2 className={styles.cnt}>Contact Me</h2>
            <p className={styles.text}>{`I'm open for any suggestion or just to have a chat`}</p>
        <div className={styles.details}>
            <p className={styles.key}>ADDRESS:</p>
            <p className={styles.value1}>Somewhere in Karachi, Pakistan</p>
            <p className={styles.key}>EMAIL:</p>
            <p className={styles.value}>amrahaanwar@gmail.com</p>
            <p className={styles.key}>PHONE:</p>
            <p className={styles.value}>+1234-5678910</p>
            <form className={styles.form}>
                <input className={styles.ask} type="text" placeholder="Your Name" />
                <input className={styles.ask} type="email" placeholder="Your Email" />
                <textarea className={styles.ask} placeholder="Write a Message here"></textarea>
                <button className={styles.submit} type="submit">Send Message</button>
            </form>
        </div>
            <div>
                <h3 className={styles.follow}>Follow me on</h3>
                <div className={styles.links}>
                <Link href={"https://www.linkedin.com/in/amraha-anwar-45bb342b3/"} className={styles.link} target='main'>LINKEDIN</Link>
                <Link href={"https://www.instagram.com/amrahaanwar/?hl=en"} className={styles.link} target='main'>INSTAGRAM</Link>
                <Link href={"https://github.com/Amraha-Anwar"} className={styles.link} target='main'>GITHUB</Link>
                </div>
            </div>
        </div>
        {/* map */}
        <div className={styles.right}>
        <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28944.64712675265!2d67.01332333397446!3d24.86073456859359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5fa0b8d6cf%3A0xd2f51458a9185bb!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697554781230!5m2!1sen!2s"
          width="100%"
          height="100%"
        ></iframe>
        </div>
        </div>
    </div>
    <p className={styles.copyright}>&copy; 2024 All rights reserved | This portfolio is made with &hearts; by A<sub>A_.</sub></p>
        </div>
        </>
    )
}
export default Contact
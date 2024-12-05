import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>Contacto</h1>
            <div className={styles.content}>
                <img src='./images/Contacto.png' alt="Contacto" />
                <div className={styles.socialButtons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src='./images/facebook.png' alt="Facebook" className={styles.icon} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src='./images/twitter.png' alt="Twitter" className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
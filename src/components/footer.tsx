import styles from './footer.module.scss';
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Separator className={styles.separator} />
            <div className={styles.list}>
                <div className={styles.credits}>
                    <div className={styles.title}>AstroLog</div>
                    <div className={styles.sub}>
                        Made with
                        <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 65,29 C 59,19 49,12 37,12 20,12 7,25 7,42 7,75 25,80 65,118 105,80 123,75 123,42 123,25 110,12 93,12 81,12 71,19 65,29 z"/>
                        </svg>
                        by Rouven Spaar
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.title}>Support</div>
                    <Link href='https://docs.astro-log.app/' className={styles.link}>Documentation</Link>
                    <Link href='' className={styles.link}>Community Forum</Link>
                    <Link href='/licenseKey' className={styles.link}>License Key</Link>
                </div>
                <div className={styles.section}>
                    <div className={styles.title}>Social Media</div>
                    <Link href='https://github.com/astrolog-app/astrolog' className={styles.link}>GitHub</Link>
                    <Link href='https://www.astrobin.com/users/Rouvi05/' className={styles.link}>AstroBin</Link>
                </div>
            </div>
        </div>
    );
}
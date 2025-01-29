import Link from 'next/link';
import styles from './navBar.module.scss';

export default function NavBar() {
    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBar}>
                <Link href='' className={styles.logo}>AstroLog</Link>
                <div className={styles.navigation}>
                    <Link href='/'>Product</Link>
                    <Link href='/purchase'>Purchase</Link>
                    <Link href='/downloads'>Downloads</Link>
                    <Link href='/about'>About</Link>
                </div>
            </div>
        </div>
    );
}

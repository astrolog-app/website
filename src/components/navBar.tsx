import Link from 'next/link';
import styles from './navBar.module.scss';
import {Button} from './ui/button';

export default function NavBar() {
    return (
        <div className={styles.navBarWrapper}>
        <div className={styles.navBar}>
            <div className={styles.left}>
                <div className={styles.logo}>AstroLog</div>
                <div className={styles.navigation}>
                    <Link href='/'>Product</Link>
                    <Link href='/purchase'>Purchase</Link>
                    <Link href='/downloads'>Downloads</Link>
                    <Link href='/about'>About</Link>
                </div>
            </div>
            <Button>Purchase</Button>
        </div>
        </div>
    );
}

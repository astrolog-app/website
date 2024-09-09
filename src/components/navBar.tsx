import Link from 'next/link';
import styles from './navBar.module.scss';
import { Button } from './ui/button';

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logo}>AstroLog</div>
            <div className={styles.navigation}>
                <Link href='/'>Product</Link>
                <Link href='/purchase'>Purchase</Link>
                <Link href='/downloads'>Downloads</Link>
                <Link href='/about'>About</Link>
            </div>
            <Button>Purchase</Button>
        </div>
    );
}

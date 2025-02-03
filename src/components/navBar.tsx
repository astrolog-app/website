'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './navBar.module.scss';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.navBar}>
                <Link href='/' className={styles.logo}>AstroLog</Link>
                <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </div>
                <div className={`${styles.navigation} ${menuOpen ? styles.open : ''}`}>
                    <Link href='/' onClick={() => setMenuOpen(false)}>Product</Link>
                    <Link href='/purchase' onClick={() => setMenuOpen(false)}>Purchase</Link>
                    <Link href='/downloads' onClick={() => setMenuOpen(false)}>Downloads</Link>
                    <Link href='/about' onClick={() => setMenuOpen(false)}>About</Link>
                </div>
            </div>
        </div>
    );
}

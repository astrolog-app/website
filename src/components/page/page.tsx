import styles from './page.module.scss';
import {ReactNode} from "react";

export default function Page({ children } : { children: ReactNode }) {
    return (
        <div className={styles.page}>
            {children}
        </div>
    );
}

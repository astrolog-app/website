import styles from './pageContent.module.scss';
import {ReactNode} from "react";

export default function PageContent({ children } : { children: ReactNode }) {
    return (
        <div className={styles.pageContent}>
            {children}
        </div>
    );
}

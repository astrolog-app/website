import styles from './pageTitle.module.scss';
import {ReactNode} from "react";
import {Separator} from "@/components/ui/separator";

export default function PageTitle({ children } : { children: ReactNode }) {
    return (
        <div className={styles.component}>
            <div className={styles.title}>
                {children}
            </div>
            <Separator className={styles.separator} />
        </div>
    );
}

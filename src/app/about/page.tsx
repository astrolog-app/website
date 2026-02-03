import styles from './page.module.scss';
import Footer from "@/components/footer";
import Page from "@/components/page/page";
import PageContent from "@/components/page/pageContent";
import NavBar from "@/components/navBar";
import PageTitle from "@/components/page/pageTitle";
import Image from "next/image";

export default function About() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <PageTitle>About</PageTitle>
                <Image alt={"profile"} src={"profile.jpg"} width={10} height={10} className={styles.picture} />
                <div className={styles.content}>test</div>
            </PageContent>
            <Footer/>
        </Page>
    );
}

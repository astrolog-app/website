import styles from './page.module.scss';
import Footer from "@/components/footer";
import Page from "@/components/page/page";
import PageContent from "@/components/page/pageContent";
import NavBar from "@/components/navBar";
import PageTitle from "@/components/page/pageTitle";

export default function About() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <PageTitle>About</PageTitle>
                <div className={styles.content}>test</div>
                <div className={styles.content}>test</div>
                <div className={styles.content}>test</div>
            </PageContent>
            <Footer/>
        </Page>
    );
}

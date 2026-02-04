import styles from './page.module.scss';
import Footer from "@/components/footer";
import Page from "@/components/page/page";
import PageContent from "@/components/page/pageContent";
import NavBar from "@/components/navBar";
import PageTitle from "@/components/page/pageTitle";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function About() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <PageTitle>About</PageTitle>
                
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <Image 
                            alt="Rouven Spaar" 
                            src="/profile.jpg" 
                            width={100} 
                            height={100} 
                            className={styles.avatar} 
                        />
                        <h2 className={styles.name}>Rouven Spaar</h2>
                        <p className={styles.tagline}>Building AstroLog</p>
                        
                        <div className={styles.links}>
                            <Link 
                                href="https://github.com/astrolog-app" 
                                className={styles.iconLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </Link>
                            <Link 
                                href="https://www.astrobin.com/users/Rouvi05/" 
                                className={styles.iconLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="AstroBin"
                            >
                                <ExternalLink size={18} />
                            </Link>
                            <Link 
                                href="mailto:contact@astrolog.app" 
                                className={styles.iconLink}
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </Link>
                        </div>
                    </aside>

                    <main className={styles.content}>
                        <p className={styles.intro}>
                            {"I'm"} a Computer Science student at <span className={styles.highlight}>ETH Zurich</span> with 
                            a passion for astrophotography. When {"I'm"} not studying, {"you'll"} find me under the night 
                            sky capturing the cosmos.
                        </p>

                        <p className={styles.text}>
                            AstroLog started from frustration with tracking imaging sessions. Existing tools were 
                            either too complex or {"didn't"} fit the workflow of an astrophotographer. So I built 
                            the tool I wished existed — fast, intuitive, and focused on what matters.
                        </p>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Stack</h3>
                            <div className={styles.stack}>
                                <span className={styles.stackItem}>Next.js</span>
                                <span className={styles.stackItem}>Tauri</span>
                                <span className={styles.stackItem}>Rust</span>
                                <span className={styles.stackItem}>TypeScript</span>
                                <span className={styles.stackItem}>React</span>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Connect</h3>
                            <p className={styles.text}>
                                Find me on{' '}
                                <Link href="https://github.com/astrolog-app" className={styles.link} target="_blank">
                                    GitHub
                                </Link>
                                , view my work on{' '}
                                <Link href="https://www.astrobin.com/users/Rouvi05/" className={styles.link} target="_blank">
                                    AstroBin
                                </Link>
                                , or reach out via{' '}
                                <Link href="mailto:contact@astrolog.app" className={styles.link}>
                                    email
                                </Link>
                                .
                            </p>
                        </div>
                    </main>
                </div>
            </PageContent>
            <Footer/>
        </Page>
    );
}

import styles from './page.module.scss';
import Footer from "@/components/footer";
import Page from "@/components/page/page";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function About() {
    return (
        <Page>
            <NavBar/>
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Left Column - Profile */}
                    <aside className={styles.sidebar}>
                        <Image 
                            alt="Rouven Spaar" 
                            src="/profile.jpg" 
                            width={120} 
                            height={120} 
                            className={styles.avatar} 
                        />
                        <h1 className={styles.name}>Rouven Spaar</h1>
                        <p className={styles.tagline}>Building AstroLog</p>
                        
                        <nav className={styles.nav}>
                            <span className={styles.navActive}>About</span>
                            <Link href="/#roadmap" className={styles.navLink}>Roadmap</Link>
                            <Link href="/downloads" className={styles.navLink}>Downloads</Link>
                        </nav>

                        <div className={styles.links}>
                            <Link 
                                href="https://github.com/astrolog-app" 
                                className={styles.iconLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </Link>
                            <Link 
                                href="https://www.astrobin.com/users/Rouvi05/" 
                                className={styles.iconLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="AstroBin"
                            >
                                <ExternalLink size={20} />
                            </Link>
                            <Link 
                                href="mailto:contact@astrolog.app" 
                                className={styles.iconLink}
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </aside>

                    {/* Right Column - Content */}
                    <main className={styles.content}>
                        <p className={styles.intro}>
                            {"I'm"} a Computer Science student at <span className={styles.highlight}>ETH Zurich</span> with 
                            a deep passion for astrophotography. When {"I'm"} not studying algorithms or building software, 
                            {"you'll"} find me under the night sky, capturing the cosmos through my telescope.
                        </p>

                        <p className={styles.text}>
                            AstroLog started as a personal project born from frustration. After countless imaging 
                            sessions, I found myself drowning in spreadsheets, trying to track equipment settings, 
                            weather conditions, and which targets {"I'd"} captured. Existing tools were either too 
                            complex or {"didn't"} understand the workflow of an astrophotographer.
                        </p>

                        <p className={styles.text}>
                            So I built the tool I wished existed. AstroLog is designed to be fast, intuitive, 
                            and focused on what matters most: helping you spend less time organizing and more 
                            time imaging.
                        </p>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Building</h2>
                            <div className={styles.project}>
                                <Link href="/" className={styles.projectTitle}>
                                    AstroLog
                                    <ExternalLink size={14} className={styles.projectIcon} />
                                </Link>
                                <p className={styles.projectDesc}>
                                    Open source astrophotography logging and analytics app.
                                </p>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Stack</h2>
                            <div className={styles.stack}>
                                <span className={styles.stackItem}>Next.js</span>
                                <span className={styles.stackItem}>Tauri</span>
                                <span className={styles.stackItem}>Rust</span>
                                <span className={styles.stackItem}>TypeScript</span>
                                <span className={styles.stackItem}>React</span>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Connect</h2>
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
            </div>
            <Footer/>
        </Page>
    );
}

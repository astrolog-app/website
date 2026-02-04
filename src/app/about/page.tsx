import styles from './page.module.scss';
import Footer from "@/components/footer";
import Page from "@/components/page/page";
import PageContent from "@/components/page/pageContent";
import NavBar from "@/components/navBar";
import PageTitle from "@/components/page/pageTitle";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function About() {
    return (
        <Page>
            <NavBar/>
            <PageContent>
                <PageTitle>About</PageTitle>
                
                <section className={styles.creatorSection}>
                    <Image 
                        alt="Rouven Spaar - Creator of AstroLog" 
                        src="/profile.jpg" 
                        width={200} 
                        height={200} 
                        className={styles.picture} 
                    />
                    <div className={styles.creatorInfo}>
                        <h2 className={styles.creatorName}>Rouven Spaar</h2>
                        <p className={styles.creatorRole}>Creator & Developer</p>
                        <div className={styles.socialLinks}>
                            <Link 
                                href="https://github.com/astrolog-app/astrolog" 
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={18} />
                                GitHub
                            </Link>
                            <Link 
                                href="https://www.astrobin.com/users/Rouvi05/" 
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink size={18} />
                                AstroBin
                            </Link>
                        </div>
                    </div>
                </section>

                <section className={styles.storySection}>
                    <h2 className={styles.sectionTitle}>The Story</h2>
                    <p className={styles.paragraph}>
                        AstroLog was born out of a personal need. As an astrophotographer, I found myself 
                        struggling to keep track of all my imaging sessions, equipment configurations, 
                        and the countless hours spent under the stars. Existing solutions were either 
                        too complex, too expensive, or simply not designed with astrophotographers in mind.
                    </p>
                    <p className={styles.paragraph}>
                        So I decided to build something better. AstroLog is designed from the ground up 
                        to be the companion app every astrophotographer deserves — intuitive, fast, and 
                        focused on what matters most: capturing the cosmos.
                    </p>
                </section>

                <section className={styles.missionSection}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.paragraph}>
                        Our mission is to empower astrophotographers of all skill levels with tools that 
                        make logging and analyzing imaging sessions effortless. We believe that great 
                        software should stay out of your way and let you focus on what you love — 
                        exploring the night sky.
                    </p>
                </section>

                <section className={styles.openSourceSection}>
                    <h2 className={styles.sectionTitle}>Open Source</h2>
                    <p className={styles.paragraph}>
                        AstroLog is proudly open source. We believe in transparency and community-driven 
                        development. Whether you want to contribute code, report bugs, or suggest features, 
                        {"we'd"} love to have you as part of the AstroLog community.
                    </p>
                    <Link 
                        href="https://github.com/astrolog-app/astrolog" 
                        className={styles.githubButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={20} />
                        View on GitHub
                    </Link>
                </section>

                <section className={styles.techSection}>
                    <h2 className={styles.sectionTitle}>Built With</h2>
                    <div className={styles.techGrid}>
                        <div className={styles.techItem}>
                            <span className={styles.techName}>Rust</span>
                            <span className={styles.techDescription}>Blazing fast backend</span>
                        </div>
                        <div className={styles.techItem}>
                            <span className={styles.techName}>Tauri</span>
                            <span className={styles.techDescription}>Cross-platform framework</span>
                        </div>
                        <div className={styles.techItem}>
                            <span className={styles.techName}>React</span>
                            <span className={styles.techDescription}>Modern UI library</span>
                        </div>
                        <div className={styles.techItem}>
                            <span className={styles.techName}>TypeScript</span>
                            <span className={styles.techDescription}>Type-safe development</span>
                        </div>
                    </div>
                </section>
            </PageContent>
            <Footer/>
        </Page>
    );
}

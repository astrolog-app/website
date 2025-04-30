import {Button} from '@/components/ui/button';
import styles from './page.module.scss';
import FeatureCard from '@/components/featureCard';
import {AnalyticsSVG, BackupSVG, GallerySVG, LogSVG, OpenSourceSVG, RocketSVG} from '@/public/svgs';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import Link from "next/link";
import {Roadmap, RoadmapStep} from "@/components/page/roadmap/roadmap";

export default function Product() {
    const roadmapSteps: RoadmapStep[] = [
        {
            title: "Preview Version",
            description: "Public demo of AstroLog with basic functionality to gather early user feedback and build community interest.",
            status: "completed",
        },
        {
            title: "AstroLog v1.0.0",
            description: "Launch of the first stable version with core features: manual logging, equipment tracking, and session management.",
            status: "current",
        },
        {
            title: "Backup System",
            description: "Implementation of local and cloud backup functionality.",
            status: "upcoming",
        },
        {
            title: "Advanced Analytics",
            description: "Session and equipment performance insights through interactive statistics and visualizations.",
            status: "upcoming",
        },
        {
            title: "Assisted Session Logging",
            description: "Automatic extraction of metadata from images, plus integration with weather and astronomy APIs.",
            status: "upcoming",
        },
        {
            title: "Full N.I.N.A. Integration",
            description: "Automated logging of all images captured using N.I.N.A., with full metadata import.",
            status: "upcoming",
        },
        {
            title: "Community Features",
            description: "Implementation of features requested and shaped by the AstroLog user community.",
            status: "upcoming",
        },
    ];

    return (
        <div className={styles.page}>
            <NavBar/>
            <div className={styles.grid}/>
            <div className={styles.lights}/>
            <div className={styles.pageContent}>
                <div className={styles.landing}>
                    <div className={styles.title}>AstroLog</div>
                    <div className={styles.subTitle}>
                        The astrophotography application for automatically logging and classifying
                        imaging sessions.
                    </div>
                    <div className={styles.buttons}>
                        <Button
                            asChild
                            className={styles.button}
                        >
                            <Link href='/purchase'>
                                Purchase
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className={styles.button}
                            variant='ghost'
                        >
                            <Link href='/downloads'>
                                Download for free
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className={styles.features}>
                    <FeatureCard icon={<LogSVG/>} iconColor='rgb(94, 79, 162)' title="Log & Classify">
                        AstroLog helps you to log and classify your recent imaging sessions by analyzing them.
                    </FeatureCard>
                    {/*<FeatureCard icon={<BackupSVG/>} iconColor='rgb(244, 114, 182)' title="Automatic Backup's">*/}
                    {/*    With the automatic backup system of AstroLog, your data will always be safe, when setup*/}
                    {/*    correctly.*/}
                    {/*</FeatureCard>*/}
                    {/*<FeatureCard icon={<GallerySVG/>} iconColor='rgb(240, 113, 103)' title="Gallery">*/}
                    {/*    The integrated gallery lets you view all of your processed images.*/}
                    {/*</FeatureCard>*/}
                    <FeatureCard icon={<AnalyticsSVG/>} iconColor='rgb(52, 199, 89)' title="Analytics">
                        AstroLog analyzes your imaging sessions and displays interesting statistics about your data.
                    </FeatureCard>
                    <FeatureCard icon={<RocketSVG/>} iconColor='rgb(58, 160, 237)' title="Blazing Fast">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Thanks to a powerful and secure rust backend, AstroLog's image analysis is blazing fast.
                    </FeatureCard>
                    <FeatureCard icon={<OpenSourceSVG/>} iconColor='rgb(255, 159, 64)' title="Open Source">
                        The source code of AstroLog is publicly available and lets you contribute to the project.
                    </FeatureCard>
                </div>
            </div>
            <div>
            </div>
            <div className={styles.test}>
                <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" className={styles.svg}>
                    <path
                        d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"></path>
                </svg>
                <Roadmap steps={roadmapSteps} className={styles.roadmap} />
                <svg className={styles.bottomSvg} viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg"
                     width="100%">
                    <path
                        d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"></path>
                </svg>
            </div>
            <div className={styles.test2}>
            </div>
            <Footer/>
        </div>
    );
}

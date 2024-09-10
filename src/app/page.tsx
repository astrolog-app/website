import { Button } from '@/components/ui/button';
import styles from './page.module.scss';
import FeatureCard from '@/components/featureCard';
import { AnalyticsSVG, BackupSVG, GallerySVG, LogSVG, OpenSourceSVG, RocketSVG } from '@/public/svgs';

export default function Product() {
  return (
    <div className={styles.page}>
      <div className={styles.grid} />
      <div className={styles.lights} />
      <div className={styles.pageContent}>
        <div className={styles.landing}>
          <div className={styles.title}>AstroLog</div>
          <div className={styles.subTitle}>Subtitle</div>
          <div className={styles.buttons}>
            <Button>Purchase</Button>
            <Button variant='ghost'>Download for free</Button>
          </div>
        </div>
        <div className={styles.features}>
            <FeatureCard icon={<LogSVG />} title="Log & Classify">
              AstroLog helps you to log and classify with analyzing your recent
              imaging sessions.
            </FeatureCard>
            <FeatureCard icon={<BackupSVG />} title="Automatic Backup's">
              With the automatic backup system of AstroLog, your data
              will always be safe, when setup correctly.
            </FeatureCard>
            <FeatureCard icon={<GallerySVG />} title="Gallery">
              The integrated gallery lets you view all of your processed images.
            </FeatureCard>
            <FeatureCard icon={<AnalyticsSVG />} title="Analytics">
              AstroLog analyzes your imaging sessions and displays interesting
              statistics about your data.
            </FeatureCard>
            <FeatureCard icon={<RocketSVG />} title="Blazing Fast">
              Thanks to a powerful and secure rust backend, AstroLog's image
              analysis is blazing fast.
            </FeatureCard>
            <FeatureCard icon={<OpenSourceSVG />} title="Open Source">
              The source code of AstroLog is publicly available and lets 
              you contibute to the project.
            </FeatureCard>
        </div>
      </div>
      <div className={styles.test}>
        <svg viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
          <path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"></path>
        </svg>
        <svg className={styles.bottomSvg} viewBox="0 0 1440 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
          <path d="M-100 58C-100 58 218.416 36.3297 693.5 36.3297C1168.58 36.3297 1487 58 1487 58V-3.8147e-06H-100V58Z"></path>
        </svg>
      </div>
      <div className={styles.test2}></div>
    </div>
  );
}

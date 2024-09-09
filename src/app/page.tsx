import { Button } from '@/components/ui/button';
import styles from './page.module.scss';
import FeatureCard from '@/components/featureCard';

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
          <div className={styles.featuresColumn}>
            <FeatureCard title="feature">
              xyz
            </FeatureCard>
            <FeatureCard title="feature">
              dasd
            </FeatureCard>
            <FeatureCard title="feature">
              xyz
            </FeatureCard>
          </div>
          <div className={styles.featuresColumn}>
            <FeatureCard title="feature">
              xyz
            </FeatureCard>
            <FeatureCard title="feature">
              xyz
            </FeatureCard>
            <FeatureCard title="feature">
              xyz
            </FeatureCard>
          </div>
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

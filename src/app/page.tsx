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
              xyz
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
      <div className={styles.test}></div>
      <div className={styles.test2}></div>
    </div>
  );
}

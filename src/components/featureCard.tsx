import stlyes from './featureCard.module.scss';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    children?: React.ReactNode;
}

export default function FeatureCard({ icon, title, children }: FeatureCardProps) {
    return (
        <div className={stlyes.card}>
            <div className={stlyes.header}>
                <div className={stlyes.icon}>
                    {icon}
                </div>
                <div className={stlyes.title}>
                    {title}
                </div>
            </div>
            <div className={stlyes.children}>
                {children}
            </div>
        </div>
    );
}

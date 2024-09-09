import stlyes from './featureCard.module.scss';

interface FeatureCardProps {
    title: string;
    children?: React.ReactNode;
}

export default function FeatureCard({ title, children }: FeatureCardProps) {
    return (
        <div className={stlyes.card}>
            <div className={stlyes.header}>
                <div></div>
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

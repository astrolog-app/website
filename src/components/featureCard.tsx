import stlyes from './featureCard.module.scss';

interface FeatureCardProps {
    icon: React.ReactNode;
    iconColor: string;
    title: string;
    children?: React.ReactNode;
}

export default function FeatureCard({ icon, iconColor, title, children }: FeatureCardProps) {
    const transformRgbToRgba = (rgbColor: string): string => {
        const rgbMatch = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        if (rgbMatch) {
            const r = rgbMatch[1];
            const g = rgbMatch[2];
            const b = rgbMatch[3];
            return `rgba(${r}, ${g}, ${b}, 0.125)`; // Convert to rgba with alpha 0.1
        }
        return rgbColor; // If it's not an rgb value, return it as-is
    };

    const backgroundColor = transformRgbToRgba(iconColor);

    return (
        <div className={stlyes.card}>
            <div className={stlyes.header}>
                <div
                    className={stlyes.icon}
                    style={{ backgroundColor: backgroundColor, borderColor: iconColor }}
                >
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

import {RoadmapItem} from "./roadmapItem"
import {cn} from "@/lib/utils";

export interface RoadmapStep {
    title: string
    description: string
    status?: "completed" | "current" | "upcoming"
}

interface RoadmapProps {
    className?: string
    id?: string,
    steps: RoadmapStep[]
    title?: string
    subtitle?: string
}

export function Roadmap({
                            className,
                            id,
                            steps,
                            title = "AstroLog Roadmap",
                            subtitle = "The development journey of AstroLog"
                        }: RoadmapProps) {
    return (
        <div id={id} className={cn(className, "w-full text-zinc-100")}>
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-zinc-400">{subtitle}</p>
            </div>

            {/* Desktop view - centered vertical timeline with alternating sides */}
            <div className="hidden desktop:block">
                <div className="relative max-w-2xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute top-0 left-1/2 h-full w-0.5 bg-zinc-700 -translate-x-1/2"></div>

                    {/* Timeline items */}
                    <div className="relative">
                        {steps.map((step, index) => (
                            <RoadmapItem
                                key={index}
                                step={step}
                                layout="vertical-alternating"
                                side={index % 2 === 0 ? "left" : "right"}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile view - simple vertical timeline */}
            <div className="desktop:hidden">
                <div className="relative pl-8">
                    {/* Timeline line */}
                    <div className="absolute top-0 ml-3.5 left-4 h-full w-0.5 bg-zinc-700"></div>

                    {/* Timeline items */}
                    <div className="relative space-y-12">
                        {steps.map((step, index) => (
                            <RoadmapItem
                                key={index}
                                step={step}
                                layout="vertical"
                                side="right"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

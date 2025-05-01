import {CheckCircle, Circle, CircleDot} from "lucide-react"
import {cn} from "@/lib/utils"
import type {RoadmapStep} from "./roadmap"

interface RoadmapItemProps {
    step: RoadmapStep
    layout: "vertical" | "vertical-alternating"
    side: "left" | "right"
}

export function RoadmapItem({step, layout, side}: RoadmapItemProps) {
    const getStatusIcon = () => {
        switch (step.status) {
            case "completed":
                return (
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-md"></div>
                        <CheckCircle className="h-8 w-8 text-primary relative z-10"/>
                    </div>
                )
            case "current":
                return (
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-pulse"></div>
                        <CircleDot className="h-8 w-8 text-primary relative z-10"/>
                    </div>
                )
            default:
                return (
                    <div className="relative">
                        <Circle className="h-8 w-8 text-zinc-600 relative z-10"/>
                    </div>
                )
        }
    }

    const getContentClasses = () => {
        switch (step.status) {
            case "completed":
                return "border-zinc-700 bg-zinc-800/50"
            case "current":
                return "border-red-900/50 bg-zinc-800/80 shadow-lg shadow-red-900/10"
            default:
                return "border-zinc-800/30 bg-zinc-800/30"
        }
    }

    const getTitleClasses = () => {
        switch (step.status) {
            case "completed":
                return "text-zinc-100"
            case "current":
                return "text-primary"
            default:
                return "text-zinc-400"
        }
    }

    // Simple vertical layout for mobile
    if (layout === "vertical") {
        return (
            <div className="relative">
                {/* Timeline node */}
                <div
                    className="absolute -left-4 top-1/3 z-10 flex items-center justify-center bg-zinc-950 rounded-full">
                    {getStatusIcon()}
                </div>

                {/* Content */}
                <div className={cn("ml-6 p-4 border rounded-lg transition-all duration-300", getContentClasses())}>
                    <h3 className={cn("font-bold text-lg mb-1", getTitleClasses())}>{step.title}</h3>
                    <p className="text-sm text-zinc-400">{step.description}</p>
                </div>
            </div>
        )
    }

    // Alternating sides vertical layout for desktop
    return (
        <div className={cn("flex items-center mb-16 relative", side === "left" ? "flex-row-reverse" : "flex-row")}>
            {/* Timeline node in center */}
            <div
                className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center bg-zinc-950 p-1 rounded-full">
                {getStatusIcon()}
            </div>

            {/* Content */}
            <div
                className={cn(
                    "w-[calc(50%-20px)] p-4 border rounded-lg transition-all duration-300",
                    side === "left" ? "pr-6 text-right" : "pl-6 text-left",
                    getContentClasses(),
                )}
            >
                <h3 className={cn("font-bold text-lg mb-1", getTitleClasses())}>{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.description}</p>
            </div>

            {/* Empty div for spacing on the other side */}
            <div className="w-[calc(50%-20px)]"></div>
        </div>
    )
}

import Page from "@/components/page/page";
import NavBar from "@/components/navBar";
import PageContent from "@/components/page/pageContent";
import Footer from "@/components/footer";
import DownloadSelection from "@/components/page/downloadSelection";
import PageTitle from "@/components/page/pageTitle";
import type { LucideIcon } from "lucide-react"
import { Monitor, Apple, Terminal, Cpu, MemoryStick, HardDrive } from "lucide-react"
import { AlertTriangle } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {cn} from "@/lib/utils";

export default function Downloads() {
    return (
        <Page>
            <NavBar />
            <PageContent>
                <PageTitle>Downloads</PageTitle>
                <DownloadSelection className="mt-8" />
                <SystemRequirements className="mt-14" />
                <SecurityWarning className="mt-10 w-full" />
            </PageContent>
            <Footer />
        </Page>
    );
}

const requirements: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Monitor, label: "Windows", value: "Windows 10 or newer (x64)" },
    { icon: Apple, label: "macOS", value: "macOS 12+ (Intel & Apple Silicon)" },
    { icon: Terminal, label: "Linux", value: "Ubuntu 20.04+, Debian-based, or compatible" },
    { icon: Cpu, label: "CPU", value: "x64 or ARM (see builds above)" },
    { icon: MemoryStick, label: "RAM", value: "1 GB+" },
    { icon: HardDrive, label: "Disk Space", value: "~50 MB for app + storage for your astro images" },
]

function SystemRequirements({ className } : { className?: string}) {
    return (
        <section className={cn('w-full', className)}>
            <h2 className="mb-4 text-lg font-semibold">
                System Requirements
            </h2>

            <div className="rounded-lg border border-border">
                {requirements.map((req, index) => (
                    <div
                        key={req.label}
                        className={`flex items-center gap-4 px-4 py-3 ${
                            index !== requirements.length - 1 ? "border-b border-border" : ""
                        }`}
                    >
                        <req.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="w-24 shrink-0 text-sm font-medium text-foreground">{req.label}:</span>
                        <span className="text-sm text-muted-foreground">{req.value}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

const platformInstructions = [
    {
        platform: "Windows",
        steps: [
            "When Windows Defender SmartScreen appears, click \"More info\"",
            "Click \"Run anyway\" to proceed with installation",
            "The app is safe — we just don't have a code signing certificate yet",
        ],
    },
    {
        platform: "macOS",
        steps: [
            "Open System Settings → Privacy & Security",
            "Scroll to Security and find the blocked app message",
            "Click \"Open Anyway\" next to the app name",
            "Alternatively: Right-click the app → Open → Open",
        ],
    },
    {
        platform: "Linux",
        steps: [
            "For AppImage: Right-click → Properties → Permissions → Allow executing as program",
            "Or run: chmod +x ./AppName.AppImage",
            "For .deb: Install normally with dpkg -i or your package manager",
            "For .tar.gz: Extract and run the binary directly",
        ],
    },
]

function SecurityWarning({ className } : { className?: string}) {
    return (
        <section className={className}>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
                Security Notice
            </h2>

            <div className="rounded-lg border border-amber-500/30 bg-amber-500/5">
                <div className="flex gap-3 px-4 py-4">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                            Unsigned Application
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            This app is not signed with a developer certificate. Your operating
                            system may display a security warning when you try to run it. This is
                            expected — the app is safe to use.
                        </p>
                    </div>
                </div>

                <Accordion type="single" collapsible className="border-t border-amber-500/20">
                    {platformInstructions.map((item) => (
                        <AccordionItem
                            key={item.platform}
                            value={item.platform}
                            className="border-amber-500/20 last:border-b-0"
                        >
                            <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:bg-amber-500/5 hover:no-underline">
                                {item.platform}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4">
                                <ol className="space-y-1.5 pl-4">
                                    {item.steps.map((step, stepIndex) => (
                                        <li
                                            key={stepIndex}
                                            className="text-sm text-muted-foreground list-decimal"
                                        >
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

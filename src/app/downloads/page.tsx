import Page from "@/components/page/page";
import NavBar from "@/components/navBar";
import PageContent from "@/components/page/pageContent";
import Footer from "@/components/footer";
import DownloadSelection from "@/components/page/downloadSelection";
import PageTitle from "@/components/page/pageTitle";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {Separator} from "@/components/ui/separator";

export default function Downloads() {
    return (
        <Page>
            <NavBar />
            <PageContent>
                <PageTitle>Downloads</PageTitle>
                <DownloadSelection className="mt-12" />

                {/* Installation Notes Section */}
                <div className="mt-16 border border-destructive/50 bg-destructive/10 rounded-xl p-6">
                    <h2 className="text-3xl font-bold mb-4 text-destructive">Installation Notes</h2>
                    <p className="mb-6 text-muted-foreground">
                        AstroLog is currently <strong>not signed with a developer certificate</strong>.
                        Your operating system may show a warning during installation.
                        Follow the instructions below depending on your platform:
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="windows">
                            <AccordionTrigger>Windows</AccordionTrigger>
                            <AccordionContent>
                                You may see <em>“Windows protected your PC”</em>.
                                Click <strong>More info</strong> → <strong>Run anyway</strong> to continue.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="macos">
                            <AccordionTrigger>macOS</AccordionTrigger>
                            <AccordionContent>
                                Gatekeeper may block the app. Right-click the installer, choose <strong>Open</strong>, then confirm.
                                This only needs to be done the first time.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="linux">
                            <AccordionTrigger>Linux</AccordionTrigger>
                            <AccordionContent>
                                Some installers (e.g., AppImage, tarballs) may need to be made executable first:
                                <pre className="bg-muted p-2 rounded mt-2">
                                    <code>chmod +x astrolog.AppImage</code>
                                </pre>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">System Requirements</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li><strong>Windows:</strong> Windows 10 or newer (x64)</li>
                    <li><strong>macOS:</strong> macOS 12+ (Intel & Apple Silicon)</li>
                    <li><strong>Linux:</strong> Ubuntu 20.04+, Debian-based, or compatible</li>
                    <li><strong>CPU:</strong> x64 or ARM (see builds above)</li>
                    <li><strong>RAM:</strong> 1 GB+</li>
                    <li><strong>Disk Space:</strong> ~50 MB for app + storage for your astro images</li>
                </ul>
            </PageContent>
            <Footer />
        </Page>
    );
}

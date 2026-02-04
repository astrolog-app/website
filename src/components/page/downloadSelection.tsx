"use client";

import {Button} from "@/components/ui/button";
import {Download, Monitor, Apple, Terminal} from "lucide-react";
import {cn} from "@/lib/utils";

const downloadOptions = {
    windows: {
        icon: Monitor,
        label: "Windows",
        options: [
            { ext: ".exe", label: "EXE Installer" },
            { ext: ".msi", label: "MSI Installer" },
        ],
    },
    macos: {
        icon: Apple,
        label: "macOS",
        options: [
            { ext: ".dmg-arm", label: "Apple Silicon" },
            { ext: ".dmg", label: "Intel (x64)" },
        ],
    },
    linux: {
        icon: Terminal,
        label: "Linux",
        options: [
            { ext: ".deb", label: "DEB" },
            { ext: ".AppImage", label: "AppImage" },
            { ext: ".tar.gz", label: "Tarball (x64)" },
            { ext: ".tar.gz-arm", label: "Tarball (ARM)" },
        ],
    },
};

const version = "0.1.0"
const basePath = `https://github.com/astrolog-app/astrolog/releases/download/astrolog-v${version}/`;

const downloadLinks: Record<string, Record<string, string>> = {
    windows: {
        ".exe": `${basePath}AstroLog_${version}_x64-setup.exe`,
    },
    macos: {
        ".dmg": `${basePath}AstroLog_${version}_x64.dmg`,
        ".dmg-arm": `${basePath}AstroLog_${version}_aarch64.dmg`,
    },
    linux: {
        ".AppImage": `${basePath}AstroLog_${version}_amd64.AppImage`,
        ".deb": `${basePath}AstroLog_${version}_amd64.deb`,
        ".tar.gz": `${basePath}AstroLog_x64.app.tar.gz`,
        ".tar.gz-arm": `${basePath}AstroLog_aarch64.app.tar.gz`,
    },
};

export default function DownloadSelection({ className }: { className?: string }) {
    return (
        <div className={cn(className, "grid gap-4 sm:grid-cols-3")}>
            {Object.entries(downloadOptions).map(([os, { icon: Icon, label, options }]) => (
                <div 
                    key={os} 
                    className="rounded-lg border border-border bg-card/50 p-5 flex flex-col"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground">{label}</h3>
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-auto">
                        {options.map(({ ext, label: optionLabel }) => {
                            const url = downloadLinks[os]?.[ext];
                            if (!url) return null;

                            return (
                                <Button
                                    key={ext}
                                    variant="outline"
                                    size="sm"
                                    className="w-full justify-start border-border bg-background hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                                    onClick={() => {
                                        const a = document.createElement("a");
                                        a.href = url;
                                        a.download = "";
                                        document.body.appendChild(a);
                                        a.click();
                                        document.body.removeChild(a);
                                    }}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    {optionLabel}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

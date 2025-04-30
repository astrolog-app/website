"use client";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

const osExtensions: Record<string, string[]> = {
    windows: [".exe", ".msi"],
    macos: [".dmg", ".dmg-arm"],
    linux: [".AppImage", ".deb", ".tar.gz", ".tar.gz-arm"],
};

const version = "0.1.0";
const basePath = `https://github.com/astrolog-app/astrolog/releases/download/astrolog-v${version}/`;

const downloadLinks: Record<string, Record<string, string>> = {
    windows: {
        ".exe": `${basePath}AstroLog_${version}_x64-setup.exe`,
        ".msi": `${basePath}AstroLog_${version}_x64_en-US.msi`,
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
    const [selectedOS, setSelectedOS] = useState<string>("windows");
    const [selectedExt, setSelectedExt] = useState<string>(".exe");

    useEffect(() => {
        const platform = navigator.userAgent.toLowerCase();

        if (platform.includes("win")) setSelectedOS("windows");
        else if (platform.includes("mac")) setSelectedOS("macos");
        else if (platform.includes("linux")) setSelectedOS("linux");
        else setSelectedOS("windows");
    }, []);

    useEffect(() => {
        if (selectedOS) {
            setSelectedExt(osExtensions[selectedOS][0]);
        }
    }, [selectedOS]);

    return (
        <div className={cn(className, "flex")}>
            <Select value={selectedOS} onValueChange={(value) => setSelectedOS(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Operating System" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="windows">Windows</SelectItem>
                    <SelectItem value="macos">MacOS</SelectItem>
                    <SelectItem value="linux">Linux</SelectItem>
                </SelectContent>
            </Select>

            <Select value={selectedExt} onValueChange={(value) => setSelectedExt(value)}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="File Extension" />
                </SelectTrigger>
                <SelectContent>
                    {selectedOS &&
                        osExtensions[selectedOS].map((ext) => (
                            <SelectItem key={ext} value={ext}>
                                {ext}
                            </SelectItem>
                        ))}
                </SelectContent>
            </Select>

            <Button
                onClick={() => {
                    const url = downloadLinks[selectedOS]?.[selectedExt];
                    if (url) window.open(url, "_blank");
                }}
            >

                Download
            </Button>
        </div>
    );
}

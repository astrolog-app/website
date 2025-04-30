"use client";

import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Download} from "lucide-react";
import {cn} from "@/lib/utils";

const downloadOptions = {
    windows: [".exe", ".msi"],
    macOS: [".dmg", ".dmg-arm"],
    linux: [".AppImage", ".deb", ".tar.gz", ".tar.gz-arm"],
}

const version = "0.1.0"
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
    return (
        <div className={cn(className, "mt-80 rounded-lg border border-zinc-800 overflow-hidden")}>
            <Table>
                <TableHeader className="bg-zinc-900">
                    <TableRow className="hover:bg-zinc-900/80">
                        <TableHead className="text-zinc-400 w-[200px]">Platform</TableHead>
                        <TableHead className="text-zinc-400">Download Options</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.entries(downloadOptions).map(([os, extensions]) => (
                        <TableRow key={os} className="border-zinc-800 hover:bg-zinc-900/50">
                            <TableCell className="font-medium capitalize text-zinc-200">{os}</TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    {extensions.map((ext) => (
                                        <Button
                                            key={ext}
                                            variant="outline"
                                            size="sm"
                                            className="border-zinc-800 bg-zinc-900 hover:bg-red-950 hover:text-red-400 hover:border-red-900 transition-colors"
                                            onClick={() => {
                                                const url = downloadLinks[os][ext];
                                                const a = document.createElement('a');
                                                a.href = url;
                                                a.download = '';
                                                document.body.appendChild(a);
                                                a.click();
                                                document.body.removeChild(a);
                                            }}
                                        >
                                            <Download className="mr-2 h-4 w-4 text-red-500"/>
                                            <span className="mr-1">v{version}</span>
                                            <span className="text-zinc-400">{ext}</span>
                                        </Button>
                                    ))}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

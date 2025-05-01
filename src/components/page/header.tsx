import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ChevronRight, Download} from "lucide-react";
import {cn} from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
    return (
        <div className={cn(className, "md:w-1/2 md:pr-12")}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-clip-text pb-4 text-transparent bg-gradient-to-r from-primary to-red-300">
                AstroLog
            </h1>
            <p className="text-xl md:text-2xl font-light mb-4 text-zinc-300">
                Organize, Classify, and Log Your Astrophotography Sessions
            </p>
            <p className="text-zinc-400 mb-8 max-w-lg">
                A practical tool for amateur and professional astrophotographers. Keep track of your sessions, gear, and
                imaging data — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                    <Link href='/downloads'>
                        <Download className="mr-2 h-4 w-4"/> Download Beta
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href='/#roadmap'>
                        Roadmap <ChevronRight className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
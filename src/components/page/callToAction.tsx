import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Download} from "lucide-react";
import {cn} from "@/lib/utils";

export default function CallToAction({ className }: { className?: string }) {
    return (
        <div className={cn(className, "container mx-auto max-w-4xl text-center")}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Organize Your Astrophotography?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Keep track of your sessions, equipment, and raw data — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="w-fit mr-auto ml-auto">
                    <Link href='/downloads'>
                        <Download className="mr-2 h-4 w-4"/> Download Beta
                    </Link>
                </Button>
            </div>
        </div>
    );
}

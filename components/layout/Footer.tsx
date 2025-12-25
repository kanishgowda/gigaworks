import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="font-display text-xl font-bold tracking-tight text-white">
                            Giga<span className="text-primary">Works</span>
                        </span>
                        <p className="text-sm text-zinc-500 max-w-xs">
                            Connecting students with flexible, hyperlocal opportunities.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-zinc-600">
                    © {new Date().getFullYear()} GigaWorks. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

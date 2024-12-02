"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
];

const MobileNavigation = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-3xl text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-32 mb-40 text-2xl text-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Efosa<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                {/* Navigation Links */}
                <nav className="flex flex-col gap-4 text-2xl text-center">
                    {links.map(({ href, label }) => (
                        <Link key={href} href={href} className={`text-xl hover:text-accent ${pathname === href ? "font-semibold text-accent transition-all" : ""}`}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation;
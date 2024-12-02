"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
    {
        name: "home",
        href: "/",
    },
    {
        name: "services",
        href: "/services",
    },
    {
        name: "resume",
        href: "/resume",
    },
    {
        name: "work",
        href: "/work",
    },
];

const Navigation = () => {
    const pathname = usePathname();

    // Prefetch all routes on mount
    useEffect(() => {
        links.forEach(link => {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link.href;
            document.head.appendChild(prefetchLink);
        });
    }, []);

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                const isActive = link.href === pathname;
                return (
                    <Link
                        href={link.href}
                        key={index}
                        prefetch={true}
                        className={`${isActive ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all duration-300 ease-in-out`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navigation;
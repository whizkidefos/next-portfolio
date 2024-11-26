"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.href}
                        key={index}
                        className={`${link.href === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all duration-300 ease-in-out`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navigation;
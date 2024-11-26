"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        number: "01",
        title: "Web Development",
        description: "I build responsive and user-friendly websites that are fast and accessible.",
        link: "/web-development",
    },
    {
        number: "02",
        title: "Mobile Development",
        description: "I develop mobile applications that are scalable and user-friendly.",
        link: "/mobile-development",
    },
    {
        number: "03",
        title: "UI/UX Design",
        description: "I design elegant and user-friendly interfaces that are intuitive and accessible.",
        link: "/ui-ux-design",
    },
    {
        number: "04",
        title: "SEO Optimization",
        description: "I optimize websites for search engines to improve visibility and ranking.",
        link: "/seo-optimization",
    },
    {
        number: "05",
        title: "E-commerce Solutions",
        description: "I develop e-commerce solutions that are secure and user-friendly.",
        link: "/ecommerce-solutions",
    },
    {
        number: "06",
        title: "Consulting",
        description: "I provide consulting services to help businesses improve their digital presence.",
        link: "/consulting",
    },
];

const Services = () => {
    return (
        <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col justify-center flex-1 gap-6 group">
                            <div className="flex items-center justify-between w-full">
                                <span className="text-3xl text-transparent transition-all duration-500 font-extra-bold text-outline group-hover:text-outline-hover">{service.number}</span>
                                <Link
                                    href={service.link}
                                    className="w-[70px] h-[70px] flex items-center justify-center bg-accent rounded-full transition-all duration-500 hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-3xl text-primary" />
                                </Link>
                            </div>

                            <h3 className="text-2xl font-bold leading-none text-accent">{service.title}</h3>
                            <p className="text-white/80">{service.description}</p>
                            <div className="w-full border-b border-white/20"></div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
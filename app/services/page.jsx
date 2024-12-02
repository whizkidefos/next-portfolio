"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense } from "react";

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

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const ServiceCard = ({ service }) => (
    <motion.div 
        variants={itemVariants}
        className="flex flex-col justify-center flex-1 gap-6 group"
    >
        <div className="flex items-center justify-between w-full">
            <span className="text-3xl text-transparent transition-all duration-500 font-extra-bold text-outline group-hover:text-outline-hover">
                {service.number}
            </span>
            <Link
                href={service.link}
                className="w-[70px] h-[70px] flex items-center justify-center bg-accent rounded-full transition-all duration-500 hover:-rotate-45"
            >
                <BsArrowDownRight className="text-3xl text-primary" />
            </Link>
        </div>

        <h3 className="text-2xl font-bold leading-none text-accent">
            {service.title}
        </h3>
        <p className="text-white/80">
            {service.description}
        </p>
        <div className="w-full border-b border-white/20"></div>
    </motion.div>
);

const LoadingFallback = () => (
    <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2 animate-pulse">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col justify-center flex-1 gap-6">
                <div className="flex items-center justify-between w-full">
                    <div className="w-12 h-12 bg-accent/20 rounded" />
                    <div className="w-[70px] h-[70px] bg-accent/20 rounded-full" />
                </div>
                <div className="h-8 w-48 bg-accent/20 rounded" />
                <div className="h-20 w-full bg-accent/10 rounded" />
                <div className="w-full border-b border-white/20" />
            </div>
        ))}
    </div>
);

const Services = () => {
    return (
        <section className="min-h-[100vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Suspense fallback={<LoadingFallback />}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
                    >
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </motion.div>
                </Suspense>
            </div>
        </section>
    );
};

export default Services;
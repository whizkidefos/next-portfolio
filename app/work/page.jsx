"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, lazy, suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Lazy load components
const WordSliderButtons = lazy(() => import("@/components/WordSliderButtons"));

// Optimize image loading
// const ProjectImage = ({ src, alt }) => (
//     <Image
//         src={src}
//         fill
//         sizes="(max-width: 640px) 100vw, 640px"
//         className="object-cover"
//         alt={alt}
//         loading="lazy"
//         quality={75} // Reduce quality slightly for better performance
//         placeholder="blur"
//         blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add appropriate blur data URL
//     />
// );

const projects = [
    {
        number: "01",
        category: "Frontend Development",
        title: "Iphone Pro Website",
        description: "A build that resembles Apple’s iPhone 15 Pro page using React, Three.js, and GSAP.",
        link: "https://iphone-website-phi.vercel.app/",
        image: "/assets/work/iphone-pro-website.webp",
        technologies: ["Python", "Django", "Sass", "PostgreSQL", "HTML", "Bootstrap", "JavaScript"],
        github: "",
        live: "https://iphone-website-phi.vercel.app/",
    },
    {
        number: "02",
        category: "Fullstack Development",
        title: "Access Medics",
        description: "I built a responsive portfolio website that showcases my projects and skills.",
        link: "https://accessmedics.co.uk/",
        image: "/assets/work/access-medics.webp",
        technologies: ["PHP", "MySQL", "UIKit CSS", "WordPress", "Sass", "JavaScript", "HTML"],
        github: "",
        live: "https://accessmedics.co.uk/",
    },
    {
        number: "03",
        category: "Fullstack Development",
        title: "Big Love Swim Club",
        description: "I built a responsive portfolio website that showcases my projects and skills.",
        link: "https://javascript-mastery.teachable.com/courses/",
        image: "/assets/work/thumb3.png",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "",
        live: "",
    },
    {
        number: "04",
        category: "Frontend Development",
        title: "World Covid-19 Tracker",
        description: "As covid-19 cases grew, it became pertinent to create an app that can track live cases both globally and locally. Using React and the Axios library to pull in data from open disease API, this was possible.",
        link: "https://covid19-tracker-affa7.web.app/",
        image: "/assets/work/covid-19-tracker.webp",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        github: "",
        live: "https://covid19-tracker-affa7.web.app/",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentSlideIndex = swiper.activeIndex;

        setProject(projects[currentSlideIndex]);
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

                        <div className="flex flex-col gap-[30px]">
                            {/* Outline number */}
                            <h4 className="font-extrabold leading-none text-transparent text-outline text-8xl">{project.number}</h4>
                            {/* Category */}
                            <span className="text-[36px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</span>
                            {/* Title */}
                            <h2 className="text-4xl font-bold text-white/80">{project.title}</h2>
                            {/* Description */}
                            <p className="text-white/80">{project.description}</p>
                            {/* Technologies */}
                            <div className="flex gap-4">
                                {project.technologies.map((technology, index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-bold rounded-md text-primary bg-accent">{technology}</span>
                                ))}
                            </div>
                            {/* Border */}
                            <div className="border border-white/20"></div>
                            {/* Links */}
                            <div className="flex items-center gap-4 mb-12">
                                <Link href={project.link} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-2xl text-accent group-hover:text-white" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="">Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-2xl text-accent group-hover:text-white" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="">Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="relative h-[460px] group flex justify-center items-center bg-pink-50/20 mb-5">
                                        {/* Overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/20"></div>

                                        {/* Image */}
                                        <figure className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill
                                                sizes="(min-width: 640px) 640px, 100vw"
                                                className="object-cover"
                                                alt={project.title}
                                            />
                                        </figure>
                                    </div>

                                </SwiperSlide>
                            ))}

                            {/* Pagination */}
                            <WordSliderButtons
                                containerStyles="flex gap-2 justify-between absolute right-0 bottom-[calc(50%-20px)] xl:bottom-0 z-20 w-full xl:w-max xl:justify-none"
                                buttonStyles="w-[44px] h-[44px] rounded-full bg-accent text-primary hover:bg-primary hover:text-accent text-[22px] flex justify-center items-center transition-all duration-300 shadow-lg"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
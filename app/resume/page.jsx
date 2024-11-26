"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNode, FaPython, FaWordpress, FaPhp } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiSvelte, SiDjango, SiExpress, SiSass, SiBootstrap } from "react-icons/si";

// About me data
const about = {
    title: "About Me",
    description: "I am a software developer with over 10 years of experience in building user-friendly websites and applications. I am proficient in various programming languages and technologies. I am passionate about building software that is scalable, maintainable and user-friendly.",
    info: [
        { label: "Name", value: "Efosa Igbinehi" },
        { label: "Email", value: "me@iefosa.me" },
        { label: "Phone", value: "+44 73 8816 5778" },
        { label: "Location", value: "Manchester, England" },
        { label: "Languages", value: "English, Italian" },
        { label: "Experience", value: "10+ years" },
    ],
};

// Experience data
const experience = {
    icon: '/assets/resume/badges.svg',
    title: "Experience",
    description: "I have over 10 years of experience in building user-friendly websites and applications. I have worked with various clients and companies to deliver high-quality software solutions.",
    items: [
        {
            position: "Software Engineer",
            company: "Clinigen Group, Burton-on-Trent, England",
            duration: "2023 - 2024",
            description: "I worked as a developer at Company B where I built websites and applications for clients using various technologies.",
        },
        {
            position: "Fullstack Developer",
            company: "Zaizi, London, England",
            duration: "Contract 2022",
            description: "I started my career as a junior developer at Company C where I learned the basics of web development.",
        },
        {
            position: "Software Craftsman",
            company: "Codurance, London, England",
            duration: "2021 - 2022",
            description: "I started my career as a junior developer at Company C where I learned the basics of web development.",
        },
        {
            position: "Senior Developer",
            company: "Electric Circus Digital, Manchester, England",
            duration: "2020 - 2021",
            description: "I started my career as a junior developer at Company C where I learned the basics of web development.",
        },
        {
            position: "Senior Frontend Developer",
            company: "Makkie Communications Lab, Vignola, Italy",
            duration: "2018 - 2019",
            description: "I started my career as a junior developer at Company C where I learned the basics of web development.",
        },
        {
            position: "Web Developer",
            company: "Projetti di Impresa SRL, Modena, Italy",
            duration: "2016 - 2018",
            description: "I worked as a junior developer at Company D where I built websites and applications for clients.",
        },
        {
            position: "Web Master, Graphic and Web Designer",
            company: "Pagine Gialle (Italiaonline), Bologna, Italy",
            duration: "2015 - 2016",
        },
        {
            position: "Web developer internship",
            company: "Evolve web agency, Modena, Italy",
            duration: "2014 - 2015",
        }
    ],
}

// Education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "Education",
    description: "I have a Bachelors degree in Industrial Chemistry, from Delta State University, Abraka. I started learning to code part-time in 2012 and I have been building websites and applications since 2014.",
    items: [
        {
            degree: "AI-102: Azure AI Engineer",
            institution: "Microsoft Online Training",
            duration: "November 2024",
        },
        {
            degree: "AI-900: Azure AI Fundamentals",
            institution: "Microsoft Online Training",
            duration: "September 2024",
        },
        {
            degree: "AI Driven Software Engineering",
            institution: "Skill City Bootcamp, Manchester, England",
            duration: "August 2024",
        },
        {
            degree: "AWS Certfied Cloud Practitioner",
            institution: "Amazon Web Services Online Training",
            duration: "November 2023",
        },
        {
            degree: "AZ-900: Microsoft Azure Fundamentals",
            institution: "Microsoft Online Training",
            duration: "October 2023",
        },
        {
            degree: "Diploma in AutoCAD 2D and 3D",
            institution: "PuntoNet Formazione, Bologna, Italy",
            duration: "May 2015",
        },
        {
            degree: "Fullstack Developer, Software Engineer",
            institution: "Codecademy",
            duration: "November 2014 - present",
        },
        {
            degree: "Web developer Bootcamp",
            institution: "Evolve web agency, Modena, Italy",
            duration: "May 2013 - January 2014",
        },
    ],
}

// Skills data
const skills = {
    title: "Skills",
    description: "I am proficient in various programming languages and technologies. I have mastered the following technologies:",
    skillSet: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiSvelte />, name: "Svelte" },
        { icon: <FaNode />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <FaWordpress />, name: "WordPress" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiSass />, name: "Sass" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
        { icon: <FaFigma />, name: "Figma" },
    ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    {/* Tab Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-2xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="flex flex-col gap-1 bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-sm text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-2xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[500px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="flex flex-col gap-1 bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start"
                                                >
                                                    <span className="text-accent">{item.degree}</span>
                                                    <h3 className="text-xl text-center lg:text-left">{item.institution}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.duration}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gao-[30px]">
                                <div className="">
                                    <h3 className="">{skills.title}</h3>
                                    <p className="">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillSet.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232326] rounded-xl flex justify-center items-center group">
                                                            <div className="text-4xl transition-all duration-300 group-hover:text-accent">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <span className="capitalize">{skill.name}</span>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>

                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-3xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center gap-4 xl:justify-start">
                                                <span className="text-white/60">{item.label}</span>
                                                <span className="text-xl">{item.value}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Resume
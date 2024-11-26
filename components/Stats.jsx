"use client";

import CountUp from "react-countup";

const stats = [
    {
        title: "Years of Experience",
        count: 10,
    },
    {
        title: "Projects completed",
        count: 102,
    },
    {
        title: "Technologies mastered",
        count: 27,
    },
    {
        title: "Code commits",
        count: 506,
    },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-center flex-1 gap-4 xl:justify-start">
                            <CountUp
                                end={stat.count}
                                duration={5}
                                delay={2}
                                className="text-4xl font-bold text-accent"
                            />
                            <p className={`${stat.title.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}>{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats;
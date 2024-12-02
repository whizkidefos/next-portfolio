"use client";

import { SiGotomeeting } from "react-icons/si";

const Consulting = () => {
  return (
    <div className='container mx-auto'>
        <h1 className="font-bold text-3xl text-accent">
            <SiGotomeeting className="text-accent text-5xl my-2" />
            Consulting Services: Software Engineer Extraordinaire
        </h1>
        <div className="py-2">
        Tired of software that&apos;s more buggy than a rainforest? Code so convoluted it could pass for a modern art installation?  Fear not, for I am here to wield my digital wand and transform your tech woes into triumphs.
        <br /><br />

        <h3 className="font-bold text-xl">What I Bring to the Table (Besides Snacks)</h3>
        <ul className="list-disc">
            <li>Code Wizardry: My fingers dance across the keyboard, conjuring clean, efficient code that&apos;s as elegant as a ballet performance.</li>

            <li>Problem-Solving Prowess: I thrive on unraveling complex challenges. Consider me your Sherlock Holmes of software, minus the pipe and deerstalker hat.</li>

            <li>Communication Clarity: Tech jargon is great for impressing fellow nerds, but I speak human, ensuring everyone&apos;s on the same page.</li>

            <li>Adaptability: Whether it&apos;s a legacy system older than the pyramids or cutting-edge tech, I&apos;m fluent in all the latest buzzwords (and some ancient ones too).</li>

            <li>
            Sense of Humor: Because debugging shouldn&apos;t be a soul-crushing experience. A good laugh can be the best bug repellent.
            </li>
        </ul>
        
        <br />
        <h3 className="font-bold text-xl">How I Can Help</h3>
        <ul className="list-disc">
            <li>
                Project Rescue Missions: Is your project on the brink of disaster? I specialize in parachuting in and turning chaos into order.
            </li>
            <li>
                Architecture Audits: Let me examine your software&apos;s blueprints and suggest improvements to ensure it&apos;s built on a solid foundation.
            </li>
            <li>
                Performance Optimization: Slow software is like watching paint dry. I&apos;ll turbocharge your systems so they run faster than a caffeine-fueled cheetah.
            </li>
            <li>
                Code Reviews: My eagle eyes will spot bugs, vulnerabilities, and code smells before they turn into full-blown disasters.
            </li>
            <li>
                Mentoring &amp; Training: I&apos;ll share my knowledge and experience to empower your team to become software superheroes in their own right.
            </li>
        </ul>
        <br />

        <h3 className="font-bold text-xl">Why Choose Me?</h3>
        <ul className="list-disc">
            <li>
                Passionate: I genuinely love what I do. You won&apos;t find a more enthusiastic code wrangler this side of the Mississippi.
            </li>
            <li>
                Experienced: I&apos;ve tackled projects big and small, across a variety of industries. There&apos;s not much I haven&apos;t seen (or debugged).
            </li>
            <li>
                Results-Oriented: I&apos;m not just here to collect a paycheck. My goal is to deliver solutions that make a real difference to your business.
            </li>
        </ul>
        <br />
        
        
        <h3 className="font-bold text-xl">So, What Are You Waiting For?</h3>
        If you&apos;re ready to transform your software from a source of frustration to a source of pride, <a href="/contact" className="text-accent underline">let&apos;s talk</a>. Together, we&apos;ll build something amazing.
        <br /><br />

        P.S. I also make a mean cup of coffee. Just sayin&apos;.
        </div>
    </div>
  )
}

export default Consulting;
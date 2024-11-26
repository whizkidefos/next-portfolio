"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        label: "Phone",
        value: "+44 738 816 5778",
    },
    {
        icon: <FaEnvelope />,
        label: "Email",
        value: "me@iefosa.me",
    },
    {
        icon: <FaMapMarkerAlt />,
        label: "Location",
        value: "Manchester M11 3NJ, United Kingdom",
    }
];

const Contact = () => {
    return (
        <section className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Contact Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-3xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I am available for freelance work. Complete the form below and I will get back to you as soon as possible.
                            </p>
                            {/* Input fields */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input type="text" placeholder="First Name" name="firstname" />
                                <Input type="text" placeholder="Last Name" name="lastname" />
                                <Input type="email" placeholder="Email address" name="email" />
                                <Input type="phone" placeholder="Phone number" name="phone" />
                            </div>
                            {/* Select fields */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" name="service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                                        <SelectItem value="E-commerce Solutions">E-commerce Solutions</SelectItem>
                                        <SelectItem value="Consulting">Consulting</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* Message */}
                            <Textarea placeholder="Type your message here..." name="message" className="h-[200px]" />
                            {/* Submit button */}
                            <Button type="submit" size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.label}</p>
                                        <h3 className="">{item.value}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
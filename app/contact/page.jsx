"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

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
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceChange = (value) => {
        setFormData(prev => ({
            ...prev,
            service: value
        }));
    };

    const validateForm = () => {
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
            toast({
                variant: "destructive",
                title: "Required Fields Missing",
                description: "Please fill in all required fields.",
            });
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast({
                variant: "destructive",
                title: "Invalid Email",
                description: "Please enter a valid email address.",
            });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            // For success:
            toast({
                variant: "success",
                title: "Message Sent Successfully! 🎉",
                description: "We'll get back to you as soon as possible.",
                className: "border-l-4 border-l-green-500", // Adds a colored left border
            });

            // For email validation:
            toast({
                variant: "destructive",
                title: "Invalid Email",
                description: "Please enter a valid email address.",
                className: "border-l-4 border-l-red-500",
            })

            // For general errors:
            toast({
                variant: "destructive",
                title: "Error Sending Message",
                description: error.message,
                className: "border-l-4 border-l-red-500",
            })

            // Reset form
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                service: "",
                message: ""
            });

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error Sending Message",
                description: error.message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Contact Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-3xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I am available for freelance work. Complete the form below and I will get back to you as soon as possible.
                            </p>

                            {/* Input fields */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input 
                                    type="text" 
                                    placeholder="First Name" 
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    required
                                />
                                <Input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                                <Input 
                                    type="email" 
                                    placeholder="Email address" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input 
                                    type="tel" 
                                    placeholder="Phone number" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Select fields */}
                            <Select 
                                value={formData.service}
                                onValueChange={handleServiceChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
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
                            <Textarea 
                                placeholder="Type your message here..." 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="h-[200px]"
                                required
                            />
                            {/* Submit button */}
                            <Button 
                                type="submit" 
                                size="lg" 
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
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
            <Toaster />
        </section>
    );
};

export default Contact;
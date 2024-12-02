"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="relative w-full h-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4, ease: 'easeIn' } }}
            >
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
                    className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
                >
                    {/* Gradient overlay container */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/80 mix-blend-overlay rounded-full z-10" />
                    
                    {/* Radial gradient for edge fade */}
                    <div className="absolute inset-0 bg-radial-fade mix-blend-overlay rounded-full z-10" />
                    
                    {/* Image container */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/assets/efosa-ppic.png"
                            priority={true}
                            quality={100}
                            fill={true}
                            alt="Efosa Igbinehi"
                            className="object-contain rounded-full mix-blend-luminosity"
                            style={{
                                maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Circle */}
                <motion.svg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360, 720],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
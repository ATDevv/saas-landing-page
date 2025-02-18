'use client'
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import Image from 'next/image'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start'],
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <section
            ref={heroRef}
            className="pt-8 pb-20 overflow-x-clip bg-gradient-to-b from-[#EAEEFE] to-blue-500"
        >
            <div className="p-5">
                <div className="container mx-auto">
                    <div className="md:flex items-center">
                        <div className="md:w-[478px]">
                            <div className="tag">Version 2 is here.</div>
                            <h1 className="text-5xl md:text-7xl font-bold block bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                                Pathway to productivity
                            </h1>
                            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Eveniet amet inventore quasi
                                veniam molestias quas aspernatur voluptates!
                                Sunt in ullam blanditiis dicta delectus, quia
                                nisi quae!
                            </p>
                            <div className="flex gap-1 mt-[30px] items-center">
                                <button className="btn btn-primary">
                                    Get for free
                                </button>
                                <button className="btn btn-text gap-1 flex items-center">
                                    <span>Learn More</span>
                                    <ArrowIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative lg:ml-[190px]">
                            <motion.img
                                src={cogImage.src}
                                alt="Cog Image"
                                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
                                animate={{
                                    translateY: [-30, 30],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    repeatType: 'mirror',
                                    ease: 'easeInOut',
                                }}
                            />
                            <motion.img
                                src={cylinderImage.src}
                                alt="Cylinder Image"
                                width={220}
                                height={220}
                                className="hidden md:block -top-8 -left-32 md:absolute"
                                style={{
                                    translateY: translateY,
                                }}
                            />
                            <motion.img
                                src={noodleImage.src}
                                alt="Noodle Image"
                                height={220}
                                width={220}
                                className="hidden md:block absolute top-[574px] left-[448px] rotate-[30deg]"
                                style={{
                                    translateY: translateY,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

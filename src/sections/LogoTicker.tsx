'use client'
import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import calestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const LogoTicker = () => {
    return (
        <div className="py-8 bg-white md:py-10">
            <div className="container mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    animate={{
                        translateX: '-50%',
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                    }}
                >
                    <Image
                        src={acmeLogo}
                        alt="Acme Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={quantumLogo}
                        alt="Quantum Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={echoLogo}
                        alt="Echo Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={calestialLogo}
                        alt="Calestial Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={pulseLogo}
                        alt="Pulse Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={apexLogo}
                        alt="Apex Logo"
                        className="logo-ticker-img"
                    />

                    {/* Second images for animation */}
                    <Image
                        src={acmeLogo}
                        alt="Acme Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={quantumLogo}
                        alt="Quantum Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={echoLogo}
                        alt="Echo Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={calestialLogo}
                        alt="Calestial Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={pulseLogo}
                        alt="Pulse Logo"
                        className="logo-ticker-img"
                    />
                    <Image
                        src={apexLogo}
                        alt="Apex Logo"
                        className="logo-ticker-img"
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default LogoTicker

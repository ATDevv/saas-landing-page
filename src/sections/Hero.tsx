import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='pt-8 pb-20'>
            <div className="p-5">
                <div className="container mx-auto">
                    <div className="">
                        <div>
                            <div className="border-[#222]/10 px-3 py-1 tracking-tight rounded-lg border inline-flex">Version 2 is here.</div>
                            <h1 className="text-5xl font-bold tracking-tighter block bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
                            <div className="text-xl text-[#010D3E] tracking-tight mt-6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet amet inventore quasi veniam molestias quas aspernatur voluptates! Sunt in ullam blanditiis dicta delectus, quia nisi quae!
                            </div>
                        </div>
                        <div className="flex gap-1 mt-[30px] items-center">
                            <button className="btn btn-primary">Get for free</button>
                            <button className='btn btn-text gap-1 flex items-center'>
                                <span>Learn More</span>
                                <ArrowIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <Image src={cogImage} alt='Cog Image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
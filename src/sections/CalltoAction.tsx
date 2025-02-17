import ArrowIcon from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image'

const CalltoAction = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 px-10 overflow-x-clip">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="relative">
                    <h2 className="section-title">Sign up for free today</h2>
                    <p className="text-center max-w-[600px] text-[22px] leading-[30px] tracking-tight mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Velit architecto sit culpa sequi similique dolorem
                        nihil
                    </p>
                    <Image
                        src={starImage}
                        alt="Star Image"
                        width={360}
                        className="hidden md:block absolute -left-[380px] -top-[137px]"
                    />
                    <Image
                        src={springImage}
                        alt="Spring Image"
                        width={360}
                        className="hidden md:block absolute -right-[380px] -top-[19px]"
                    />
                </div>
                <div className="flex gap-2 mt-9 items-center">
                    <button className="btn btn-primary">Get for free</button>
                    <button className="btn btn-text gap-1 flex items-center">
                        <span>Learn More</span>
                        <ArrowIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CalltoAction

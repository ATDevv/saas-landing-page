import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import Link from 'next/link'
import SocialX from '@/assets/social-x.svg'
import SocialInsta from '@/assets/social-insta.svg'
import SocialLinkedIn from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'

const Footer = () => {
    return (
        <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
            <div className="container mx-auto">
                <div className="inline-flex relative before:content-[''] before:w-full before:h-full before:bg-[linear-gradient(to_right,#f87bff,#ffdd98,#c2f0b1,#2fd8fe)] before:absolute before:blur">
                    <Image
                        src={logo}
                        alt="saas logo"
                        width={40}
                        className="relative"
                    />
                </div>
                <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Features</Link>
                    <Link href={'#'}>Customers</Link>
                    <Link href={'#'}>Pricing</Link>
                    <Link href={'#'}>Help</Link>
                    <Link href={'#'}>Careers</Link>
                </nav>
                <div className="flex justify-center gap-6 my-6">
                    <SocialX />
                    <SocialInsta />
                    <SocialLinkedIn />
                    <SocialPin />
                    <SocialYoutube />
                </div>
                <p className='text-end'>&copy; {new Date().getFullYear()} Your Company, D1a</p>
            </div>
        </footer>
    )
}

export default Footer

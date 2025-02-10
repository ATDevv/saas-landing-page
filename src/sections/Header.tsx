import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image'
import MenuIcon from '@/assets/menu.svg'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-20">
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-1">
                <p className="text-white/60 px-3">Hello D1a</p>
                <p>Get started for free</p>
                <ArrowRight className="h-4 w-4" />
            </div>
            <div>
                <div className="p-5">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <Image
                                src={Logo}
                                alt="saas logo"
                                width={40}
                                height={40}
                            />
                            <MenuIcon className="w-6 h-6 md:hidden" />
                            <nav className="hidden md:flex gap-6 items-center justify-center text-black/60">
                                <Link href={'#'}>About</Link>
                                <Link href={'#'}>Features</Link>
                                <Link href={'#'}>Customers</Link>
                                <Link href={'#'}>Updates</Link>
                                <Link href={'#'}>Help</Link>
                                <button className="bg-black px-4 py-2 text-white rounded-lg font-medium">
                                    Get for free
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

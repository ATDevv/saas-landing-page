import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image'
import MenuIcon from '@/assets/menu.svg'

const Header = () => {
    return (
        <header>
            <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-1">
                <p>Get started for free</p>
                <ArrowRight className="h-4 w-4" />
            </div>
            <div >
                <div className='p-5'>
                    <div className=' flex justify-between items-center'>
                        <Image src={Logo} alt='saas logo' width={40} height={40} />
                        <MenuIcon className="w-6 h-6 md:hidden" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
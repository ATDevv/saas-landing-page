import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from 'next/image'

const ProductShowCase = () => {
    return (
        <section className="bg-gradient-to-b from-white to-[#D2DCFF]] py-24 overflow-x-clip">
            <div className=" px-5 flex flex-col justify-center items-center">
                <div className="tag">Dinh Tuan Anh</div>
                <h2 className="max-w-[550px] text-center text-4xl md:text-6xl md:leading-[60px] font-semibold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
                    A more effctive way to track proress
                </h2>
                <p className="text-center max-w-[700px] text-[22px] leading-[30px] tracking-tight mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur laboriosam soluta, eius fuga sequi ad facilis
                    sint praesentium quo nesciunt.
                </p>
                <div className="relative">
                    <Image
                        src={productImage}
                        alt="Product Image"
                        className="mt-10"
                    />
                    <Image
                        src={pyramidImage}
                        alt="Pyramid Image"
                        className="hidden md:block md:h-[148px] md:w-auto lg:h-[248px] absolute -right-20 -top-16"
                        height={262}
                        width={262}
                    />
                    <Image
                        src={tubeImage}
                        alt="Tube Image"
                        className="hidden md:block md:h-[148px] md:w-auto lg:h-[248px] absolute bottom-24 -left-20"
                        // height={248}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProductShowCase

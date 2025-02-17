import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge'

const pricingTiers = [
    {
        title: 'Free',
        monthlyPrice: 0,
        buttonText: 'Get started for free',
        popular: false,
        inverse: false,
        features: [
            'Up to 5 project members',
            'Unlimited tasks and projects',
            '2GB storage',
            'Integrations',
            'Basic support',
        ],
    },
    {
        title: 'Pro',
        monthlyPrice: 9,
        buttonText: 'Sign up now',
        popular: true,
        inverse: true,
        features: [
            'Up to 50 project members',
            'Unlimited tasks and projects',
            '50GB storage',
            'Integrations',
            'Priority support',
            'Advanced support',
            'Export support',
        ],
    },
    {
        title: 'Business',
        monthlyPrice: 19,
        buttonText: 'Sign up now',
        popular: false,
        inverse: false,
        features: [
            'Up to 5 project members',
            'Unlimited tasks and projects',
            '200GB storage',
            'Integrations',
            'Dedicated account manager',
            'Custom fields',
            'Advanced analytics',
            'Export capabilities',
            'API access',
            'Advanced security features',
        ],
    },
]

interface IPricing {
    title: string
    monthlyPrice: number
    buttonText: string
    popular: boolean
    inverse: boolean
    features: string[]
}

const Pricing = () => {
    return (
        <section className="py-24 px-5">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-4xl md:text-6xl md:leading-[60px] font-semibold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                        Pricing
                    </h2>
                    <p className="text-center max-w-[600px] text-[22px] leading-[30px] tracking-tight mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corrupti ab repellat, sint dignissimos quo quam
                        officia
                    </p>
                </div>
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(
                        ({
                            title,
                            monthlyPrice,
                            buttonText,
                            popular,
                            inverse,
                            features,
                        }: IPricing) => {
                            return (
                                <div
                                    className={twMerge(
                                        'p-10 border border-[#f1f1f1] rounded-3xl shadow-lg m-5 max-w-sm w-full',
                                        inverse &&
                                            'bg-black border-black text-white'
                                    )}
                                >
                                    <div className="flex justify-between">
                                        <h3
                                            className={twMerge(
                                                'text-lg font-bold text-black/50',
                                                inverse && 'text-white/60'
                                            )}
                                        >
                                            {title}
                                        </h3>
                                        {popular && (
                                            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-[#ccc]">
                                                <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-orange-500 to-purple-500">
                                                    Popular
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-baseline gap-1 mt-[30px] ">
                                        <span className="text-4xl font-bold tracking-tighter leading-none">
                                            ${monthlyPrice}
                                        </span>
                                        <span className="font-bold tracking-tighter text-black/50">
                                            /month
                                        </span>
                                    </div>
                                    <button
                                        className={twMerge(
                                            'btn btn-primary w-full mt-[30px]',
                                            inverse && 'bg-white text-black'
                                        )}
                                    >
                                        {buttonText}
                                    </button>
                                    <ul className="flex flex-col gap-5 mt-6">
                                        {features.map((feature) => (
                                            <li className="text-sm flex items-center gap-4">
                                                <CheckIcon className="h-6" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </section>
    )
}

export default Pricing

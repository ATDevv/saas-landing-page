import type { Configuration } from 'webpack'

const nextConfig = {
    webpack(config: Configuration) {
        config.module?.rules?.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        })

        return config
    },
}

export default nextConfig

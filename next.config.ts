// import type { Configuration } from 'webpack'

// const nextConfig = {
//     webpack(config: Configuration) {
//         config.module?.rules?.push({
//             test: /\.svg$/,
//             use: [
//                 {
//                     loader: '@svgr/webpack',
//                     options: {
//                         icon: true,
//                     },
//                 },
//             ],
//         })

//         return config
//     },
// }

// export default nextConfig
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })
        return config
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.midhafin.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.eduzan.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'midha-images.s3.ap-south-1.amazonaws.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'latex.codecogs.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'd502jbuhuh9wk.cloudfront.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cms.midhafin.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.midhafin.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cmsfrm.midhafin.com',
                port: '',
                pathname: '/**',
            }

        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname:  'localhost:3001',
                port: '',
                pathname: '/uploads/*'
            }
        ],
        dangerouslyAllowSVG: true,
        domains: ['images.unsplash.com', 'placehold.co', 'localhost'],
    },
}

module.exports = nextConfig

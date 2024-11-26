/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        localPatterns:[
            {
                protocol: 'http',
                hostname: 'localhost:3001',
                port: '',
                pathname: '/assets/images/**'
            }
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'very-deep-tech-server.onrender.com',
                port: '',
                pathname: '/uploads/**'
            }
        ],
        dangerouslyAllowSVG: true,
        domains: ['images.unsplash.com', 'placehold.co', 'very-deep-tech-server.onrender.com', 'localhost'],
    },
}

module.exports = nextConfig

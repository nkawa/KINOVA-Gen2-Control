/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/mqapi/:path*',
                destination: '/app/api/:path*',
            },
            {
                source: '/hello',
                destination: '/test',
            },
        ]
    },
};

export default nextConfig;

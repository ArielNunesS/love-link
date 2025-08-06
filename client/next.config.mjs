/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,

    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    }
};


export default nextConfig;

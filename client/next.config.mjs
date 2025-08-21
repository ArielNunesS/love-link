/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,

    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    },

    images: {
        remotePatterns: [new URL("https://i.postimg.cc/**"), new URL("https://res.cloudinary.com/**")]
    },

};


export default nextConfig;

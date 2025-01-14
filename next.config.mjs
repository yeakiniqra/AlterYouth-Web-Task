/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.alteryouth.com",
      },
    ],
  },
};

export default nextConfig;

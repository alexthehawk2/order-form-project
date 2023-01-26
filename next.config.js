/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
      },
      {
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
};

module.exports = nextConfig;

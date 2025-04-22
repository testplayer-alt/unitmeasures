/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"], // Googleのプロフィール画像を許可
  },
};

module.exports = nextConfig;

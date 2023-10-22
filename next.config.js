/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GA4: process.env.NEXT_PUBLIC_GA4,
    NEXT_PUBLIC_GTM: process.env.NEXT_PUBLIC_GTM,
  },
};

module.exports = nextConfig;

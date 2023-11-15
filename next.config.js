/** @type {import('next').NextConfig} */
const nextConfig = {
  // THIS IS HOW YOU TELL NEXT TO ALLOW AN EXTERNAL IMAGE
  images: {
    domains: ["media.tenor.com"],
  },
};

module.exports = nextConfig;

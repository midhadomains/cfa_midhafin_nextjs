// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'filesharingaplic.s3.ap-south-1.amazonaws.com',
        'midha-images.s3.ap-south-1.amazonaws.com',
        'files.midhafin.com'
      ],
    },
  };
  
  module.exports = nextConfig;
  
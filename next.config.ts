import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'encrypted-tbn0.gstatic.com',
        protocol: 'https',
        port: '',
      },     
      {
        hostname: 'cdn.pixabay.com',
        protocol: 'https',
        port: '',
      },
     {
        hostname: 'plus.unsplash.com',
        protocol: 'https',
        port: '',
      },   
      {
        hostname: 'pixabay.com',
        protocol: 'https',
        port: '',
      },  
      {
        hostname: 'www.freepik.es',
        protocol: 'https',
        port: '',
      },
   {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https',
        port: '',
      },

    ],
  },
};

export default nextConfig;

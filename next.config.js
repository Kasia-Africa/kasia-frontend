/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   webpack(config, { nextRuntime }) { 
    // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
    if (typeof nextRuntime === "undefined") {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        dns: false,
        child_process: false,
      };  
    }

    return config;
  },
   compiler: {
    styledComponents: true,
   },
   env: {
      API_URI: process.env.API_URI,
      MAP_API_KEY: process.env.MAP_API_KEY,
      SMTP_PASSWORD: process.env.SMTP_PASSWORD,
      SMTP_FROM: process.env.SMTP_FROM,
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'kasia-app.techwithdee.com',
          port: '',
          pathname: '/products/categories/**',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '',
          pathname: '**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
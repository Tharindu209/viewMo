/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  swcMinify: true, // Enable SWC minification
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.module.rules.push({
        test: /\.node$/,
        use: 'raw-loader',
      });
    }
    return config;
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
    CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
  },
  experimental: {
    appDir: true,
    esmExternals: "loose", // required to make Konva & react-konva work
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
  images: {
    domains: ["103.217.176.51"],
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "103.217.176.51",
    //     port: "8000",
    //     pathname: "/media/**",
    //   },
    // ],
  },
};

export default nextConfig;

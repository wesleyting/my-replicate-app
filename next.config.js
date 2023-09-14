const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbxt.replicate.delivery"], // Add the new hostname here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
  },
};

module.exports = nextConfig;

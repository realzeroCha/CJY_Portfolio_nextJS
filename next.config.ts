import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-image-file.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/get-started",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

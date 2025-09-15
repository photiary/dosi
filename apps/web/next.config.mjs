/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dosi' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dosi' : '',
  async rewrites() {
    // GitHub Pages에서는 rewrites가 작동하지 않으므로 개발 환경에서만 사용
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:8080/api/:path*", // API Proxy 설정
        },
      ];
    }
    return [];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // 关键：这里必须改成当前仓库的名字 Mobile
  basePath: '/Mobile', 
  assetPrefix: '/Mobile/', 
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

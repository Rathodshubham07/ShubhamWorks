/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.replace(/.*\//, '')
  : '';
const basePath = isGithubActions && repository ? `/${repository}` : '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
};

module.exports = nextConfig;


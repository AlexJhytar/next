/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  // output: 'export',
};


export default withNextIntl(nextConfig);

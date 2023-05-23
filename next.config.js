/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  redirects: () => [
    {
      source: '/',
      destination: '/account',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;

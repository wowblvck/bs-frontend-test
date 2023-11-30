/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/advertisers/orders/2/requests',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

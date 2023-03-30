const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/your-account/image/upload/',
  },
};

module.exports = nextConfig;

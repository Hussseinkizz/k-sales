module.exports = {
  images: {
    unoptimized: true, // opt out of image optimization!
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
};

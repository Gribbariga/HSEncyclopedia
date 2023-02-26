

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
    },
  },
  
  
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;



// +module.exports = withTM({
//  webpack: (config) => {
//    config.resolve.alias = {
//      ...config.resolve.alias,
// +    '@mui/styled-engine': '@mui/styled-engine-sc',
//     };
//     return config;
//   }
// +});

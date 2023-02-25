

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
    },
  },
  
  
  reactStrictMode: false,
  withTM:require('next-transpile-modules')([
    '@mui/material',
    '@mui/system',
    '@mui/icons-material', // If @mui/icons-material is being used
  ]),
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

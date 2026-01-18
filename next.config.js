/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // CRITICAL: Disable all memory-intensive features
  images: {
    unoptimized: true, // Skip image optimization
    loader: 'default',
    dangerouslyAllowSVG: true,
  },
  
  // Force standalone output to reduce bundle size
  output: 'standalone',
  
  // Disable source maps completely
  productionBrowserSourceMaps: false,
  
  // Disable SWC minify (uses less memory but larger bundle)
  swcMinify: false,
  
  // Aggressive webpack optimization for memory
  webpack: (config, { dev, isServer }) => {
    // Disable source maps in production
    if (!dev) {
      config.devtool = false;
    }
    
    // Reduce memory consumption
    config.optimization = {
      ...config.optimization,
      minimize: false, // Disable minification to save memory during build
      
      // Split chunks more aggressively
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          
          // Separate vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          
          // Common chunk for shared code
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        },
        maxInitialRequests: 25,
        minSize: 20000
      }
    };
    
    // Disable parallelism completely
    config.parallelism = 1;
    
    // Reduce cache
    config.cache = false;
    
    // Limit memory usage
    config.performance = {
      maxAssetSize: 10000000, // 10MB
      maxEntrypointSize: 10000000,
      hints: false
    };
    
    return config;
  },
  
  // Experimental optimizations
  experimental: {
    workerThreads: false,
    cpus: 1,
    // Disable optimization that uses memory
    optimizeCss: false,
    optimizePackageImports: ['lucide-react'], // Only optimize specific packages
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable compression
  compress: true,
  
  // Reduce page data size
  poweredByHeader: false,
  generateEtags: false,
  
  // Headers to prevent caching during development
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
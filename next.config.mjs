/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["marhenke.blog-s.de"],
    formats: ["image/webp"],
    unoptimized: true,
  },

  // ✅ Serve only modern JavaScript to modern browsers
  experimental: {
    esmExternals: "loose", // allows modern ES modules
    legacyBrowsers: false, // disables old browser transpilation/polyfills
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // optional: removes console logs
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|mp4|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

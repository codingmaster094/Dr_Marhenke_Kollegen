/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["marhenke.blog-s.de"],
    formats: ["image/webp"],
    unoptimized: true,
  },

  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|mp4|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // cache for 1 year
          },
        ],
      },
    ];
  },
};

export default nextConfig;

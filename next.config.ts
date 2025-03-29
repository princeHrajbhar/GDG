const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.mdpi.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.medianama.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "d17ocfn2f5o4rl.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "community.nasscom.in",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Add this line
      },
    ],
  },
};

export default nextConfig;

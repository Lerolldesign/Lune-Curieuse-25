const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL?.replace(
          "https://",
          ""
        ),
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "lunecloud.fra1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "bucket-production-b812.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      ...(process.env.NEXT_PUBLIC_MINIO_ENDPOINT
        ? [
            {
              protocol: "https",
              hostname: process.env.NEXT_PUBLIC_MINIO_ENDPOINT,
            },
          ]
        : []),
    ],
  },
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
  webpack: (config, { isServer }) => {
    // Find the existing rule that handles SCSS files
    const scssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("scss")
    )

    if (scssRule) {
      // Update the sass-loader options to use Dart Sass
      scssRule.use = scssRule.use.map((useEntry) => {
        if (typeof useEntry === "object" && useEntry.loader === "sass-loader") {
          return {
            ...useEntry,
            options: {
              ...useEntry.options,
              implementation: require("sass"),
            },
          }
        }
        return useEntry
      })
    }

    return config
  },
}

module.exports = nextConfig

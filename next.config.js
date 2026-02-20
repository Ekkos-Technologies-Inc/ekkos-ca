const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: "ekkos-technologies-inc",
  project: "ekkos-ca",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload source maps for better debugging
  widenClientFileUpload: true,

  // Automatically hide source maps from generated client bundles
  hideSourceMaps: true,

  // Disable the Sentry SDK Webpack plugin's logger
  disableLogger: true,
});

































import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Production builds must not overwrite a running development server's files.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
})

export default nextConfig

const nextConfig = {
  output: 'export', // Habilita la exportación estática
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes para exportación estática
  },
};

export default nextConfig;

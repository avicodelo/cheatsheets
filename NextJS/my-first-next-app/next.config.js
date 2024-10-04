/** @type {import('next').NextConfig} */
const nextConfig = {

  // Configurar "experimental" para utilizar la nueva forma de obtener rutas
  experimental: {
    appDir: true
  },
  reactStrictMode:true,
  images: {
    domains: ['api.dicebear.com'],
    dangerouslyAllowSVG: true,
  },
 
}

module.exports = nextConfig

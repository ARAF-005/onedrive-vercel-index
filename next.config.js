const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // 👈 This disables the need for 'sharp'
  },
}

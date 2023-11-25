const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '/src/styles/style')],
      },
}

console.log(path.join(__dirname))

module.exports = nextConfig

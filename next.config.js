/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

// module.exports = {
//   reactStrictMode: true,
// }

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
  },
});
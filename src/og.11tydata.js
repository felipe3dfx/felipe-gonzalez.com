export default {
  eleventyComputed: {
    permalink: (data) => (data.env.OG ? "/og/index.html" : false),
  },
};

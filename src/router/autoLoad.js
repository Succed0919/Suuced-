const components = require.context('../components/pages/', false, /\.vue$/);
const pages = {};
components.keys().map(value => components(value))
  .filter(value => value.default).forEach((value) => {
    pages[value.default.name] = value.default;
  });
export default pages;

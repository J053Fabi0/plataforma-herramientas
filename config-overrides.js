const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@utils": "src/utils",
    "@views": "src/views",
    "@styles": "src/styles",
  })(config);

  return config;
};

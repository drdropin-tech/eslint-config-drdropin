module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
    "prettier/react",
  ],
  plugins: [],
  rules: {
    "no-use-before-define": "off",
    "react/jsx-props-no-spreading": "off",
    "no-param-reassign": ["error", { props: false }],
  },
};

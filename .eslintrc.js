module.exports = {
  "extends": "airbnb",
  "rules": {
    "semi": ["error", "never"],
    "no-shadow": 1,
    "arrow-body-style": 1,
    "arrow-parens": ["error", "as-needed"],
    "react/destructuring-assignment": [
      true, "always", { "ignoreClassFields": true }],
    "react/prop-types": 1,
    "no-restricted-syntax": 1,
    "jsx-a11y/label-has-for": 0,
    "react/no-access-state-in-setstate": 1,
  },
  "env": {
    "browser": true
  }
};

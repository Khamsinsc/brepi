module.exports = {
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
        ],
      },
    ],
  },
  "env": {
    "browser": true,
  },
  "settings": {
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { "property": "freeze", "object": "Object" },
      { "property": "myFavoriteWrapper" }
    ]
  }
};
module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "chai-friendly",
        "chai-expect"
    ],
    "rules": {
      "semi": [2, "always"],
      "quotes": ["error", "single"],
      "no-extra-semi": 2,
      "no-unused-expressions": 0,
      "chai-friendly/no-unused-expressions": 2,
      "chai-expect/missing-assertion": 2,
    },
    "env": {
      "mocha": true,
      "node": true,
      "es6": true,
    }
};
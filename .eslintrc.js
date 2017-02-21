module.exports = {
    "extends": "airbnb",
    "plugins": [
    ],
    "globals": {
    },
    "rules": {
      "func-names": 0,
      "max-len": [2, 110, 2, {
        "ignoreUrls": true,
        "ignoreComments": false
      }],
      "strict": 0,
      "linebreak-style": 0,
      "no-plusplus": 0,
      "no-loop-func": 0,
      "no-param-reassign": 0,
    },
    "env": {
        "browser": true
    }
};

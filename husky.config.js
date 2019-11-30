module.exports = {
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "prettier -c .prettierrc --write {amplify/backend/function, frontend}/**/**/*.js"
    }
  }
};

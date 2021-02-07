require("dotenv").config();
const path = require("path");

module.exports = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

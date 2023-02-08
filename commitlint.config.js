module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => /.*\(release\)/.test(message)],
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "docs", "feat", "fix", "refactor", "revert", "style"],
    ],
  },
};

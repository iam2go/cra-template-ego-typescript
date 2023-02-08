module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(?<emoji>:\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]gi)?\s*(?<type>\w+)?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))(?:\s\(?(?<ticket>#\d*)\)?)?$/,
      headerCorrespondence: ["emoji", "type", "subject", "ticket"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "docs", "feat", "fix", "refactor", "revert", "style"],
    ],
  },
};

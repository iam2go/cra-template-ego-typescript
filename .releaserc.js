module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    {
      releaseRules: [
        { breaking: true, release: "major" },
        { revert: true, release: "patch" },
        { type: "feat", release: "minor" },
        { type: "fix", release: "patch" },
        { type: "✨feat", release: "minor" },
        { type: "🐛fix", release: "patch" },
      ],
    },
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message:
          "🔖chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};

module.exports = {
  types: [
    { value: "✨feat", name: "✨feat: \t새로운 기능, 페이지 추가" },
    {
      value: "🐛fix",
      name: "🐛fix: \t버그 수정",
    },
    { value: "📝docs", name: "📝docs: \t문서 수정" },
    {
      value: "💄style",
      name: "💄style: \t스타일 수정 (공백, 세미콜론 추가 등 코드 의미에 영향을 주지 않는 변경)",
    },
    {
      value: "♻️refactor",
      name: "♻️refactor: \t코드 리팩토링(기능 추가, 버그 수정 이외의 코드 변경)",
    },
    {
      value: "chore",
      name: "chore: \t설정 변경(빌드 테스크 업데이트, 패키지 매니저 환경설정 등)",
    },
    {
      value: "✅test",
      name: "✅test: \t테스트 추가, 테스트 코드 관련 변경",
    },
    {
      value: "⏪revert",
      name: "⏪revert: \tcommit 되돌리기",
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["scope"],
  subjectLimit: 100,
};

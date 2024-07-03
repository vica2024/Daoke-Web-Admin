module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']
    ],
    
    // 'subject-full-stop': [0, 'never'],
    "subject-case": [0, "never"]
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型:",
      scope: "选择一个提交范围(可选):",
      customScope: "请输入自定义的提交范围:",
      subject: "填写简短精炼的变更描述:",
      body: "填写更加详细的变更描述(可选). 使用'|'换行:",
      breaking: "列举非兼容性重大的变更(可选). 使用'|'换行:",
      footerPrefixsSelect: "选择是否添加BREAKING CHANGE(可选):",
    },
    types: [
      { value: 'feat', name: 'feat:     新增功能' },
      { value: 'fix', name: 'fix:      修复缺陷' },
      { value: 'docs', name: 'docs:     文档变更' },
      { value: 'style', name: 'style:     代码格式(不影响代码运行的变动)' },
      { value: 'refactor', name: 'refactor: 重构代码(既不是增加feature,也不是修复bug)' },
      { value: 'test', name: 'test:     增加测试' },
      { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
      { value: 'revert', name: 'revert:   代码回退' }
    ]
  }
};

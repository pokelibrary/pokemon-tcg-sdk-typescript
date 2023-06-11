module.exports = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "auto",
  jsxDoubleQuote: true,
  overrides: [
    {
      files: "*.md",
      options: {
        parser: "markdown",
      },
    },
  ],
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
};

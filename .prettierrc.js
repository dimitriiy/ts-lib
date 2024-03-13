const alias = [
  '^components',
  '^constants/(.*)$',
  '^contexts/(.*)$',
  '^hooks',
  '^theme/(.*)$',
  '^types/(.*)$',
  '^utils/(.*)$',
].join('|');

module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  importOrder: ['^@x5-react-uikit/(.*)$', alias, '^./(.*)', '^../(.*)'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

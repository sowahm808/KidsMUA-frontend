const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');
module.exports = [{files:['**/*.ts'],extends:[...angular.configs.tsRecommended,prettier],processor:angular.processInlineTemplates,rules:{'@typescript-eslint/no-explicit-any':'error'}},{files:['**/*.html'],extends:[...angular.configs.templateRecommended,...angular.configs.templateAccessibility],rules:{}}];

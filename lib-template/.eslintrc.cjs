// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  /**本项目继承的代码风格和规则集 */
  extends: [
    'eslint:recommended', // eslint推荐的基础规则
    'plugin:@typescript-eslint/recommended', // typescript的推荐规则
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // 额外的类型检查规则
    'airbnb-base', // Airbnb的JS代码风格规则
    'airbnb-typescript/base', // Airbnb的TS代码风格规则
    'plugin:sonarjs/recommended', // SonarJS的代码质量规则
    'sonarjs', // SonarJS的基本规则
    'plugin:prettier/recommended', // Prettier的
    // 'plugin:compat/recommended', // 兼容不同浏览器内置对象的代码规则
  ],
  /** 忽略检查的文件和目录 */
  ignorePatterns: [
    'node_modules',
    'vendors',
    'docs',
    'docs-html',
    'build',
    'example',
    'public',
    '.browserslistrc',
    '.babelrc.js',
  ],
  /** 代码允许运行的环境 */
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  /** 配置自定义解析器
   *  @description 项目使用第三方解析器@typescript-eslint/parser来覆盖eslint默认解析器
   *  @see https://www.npmjs.com/package/@typescript-eslint/parser
   */
  parser: '@typescript-eslint/parser',
  /** 解析器选项设置 */
  parserOptions: {
    /** TS类型规则文件(tsconfig.json)的路径 */
    project: './tsconfig.json',
    /** 源码使用module语法
     * @explain 允许使用`import`和`export`语句
     */
    sourceType: 'module',
  },
  settings: {
    /**
     * eslint-plugin-compat插件的配置选项，用于清理代码在不同浏览器下的兼容性代码报错
     * @see https://github.com/amilajack/eslint-plugin-compat?tab=readme-ov-file#adding-polyfills
     */
    polyfills: [],
  },
  /**
   * eslint插件的应用列表
   */
  plugins: [
    /** 检查TypeDoc注释语法 */
    'eslint-plugin-tsdoc',
  ],
  /** 具体的代码规则配置 */
  rules: {
    /**---------同花顺的sonar规则设置----------- */
    'thsjs/no-redundant-assignments': 'off',
    'thsjs/elseif-without-else': 'off',
    /**---------同花顺的sonar规则设置----------- */
    'line-comment-position': ['error', { ignorePattern: 'pragma' }],
    'guard-for-in': 'off',
    'no-console': 'warn',
    'no-undefined': 'warn',
    'no-magic-numbers': 'warn',
    'no-unused-vars': 'warn',
    /** 驼峰示例 */
    'camelcase': 'off',
    /** 复杂度检测 */
    'complexity': 'off',
    'filenames/match-exported': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'no-use-before-define': [
      'warn',
      {
        functions: false,
      },
    ],
    'tsdoc/syntax': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowedNames: ['self', 'that'],
      },
    ],
    'no-bitwise': 'warn',
    'no-plusplus': 'warn',
    'no-underscore-dangle': 'off',
    'no-shadow': 'error',
    'no-invalid-this': 'warn',
    // 允许函数内对传入参数进行赋值
    'no-param-reassign': 'off',
    // 针对一些需要子类实现的方法，不限制其内部必须要使用this
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
            '_enter',
            '_update',
            '_exit',
            '_render',
            'destroy',
            'update',
            'render',
            '_bindEvents'
        ]
      }
    ],
    // if 后面必须加{}
    curly: ['error', 'all']
  },
  /** 全局变量定义
   *  xxx: 'readonly' 设置为只读
   */
  globals: {}
};

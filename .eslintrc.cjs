require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/eslint-config-standard'
  ]
}
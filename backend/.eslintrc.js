module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	rules: { 'react/prop-types': ['off'] },
	"ignorePatterns": [".eslintrc.js"],
};

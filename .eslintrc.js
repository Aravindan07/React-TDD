module.exports = {
	extends: ["codingitwrong"],
	parser: "babel-eslint",
	plugins: ["cypress", "jest", "react"],
	rules: {
		indent: "off",
	},
	env: {
		"cypress/globals": true,
		browser: true,
		node: true,
		"jest/globals": true,
	},
};

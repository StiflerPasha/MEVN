module.exports = {
	'outputDir': 'D:\\Learn Programming\\WebstormProjects\\MEVN\\server\\public',
	'devServer': {
		'proxy': {
			'/api': {
				'target': 'http://localhost:5000',
			},
		},
	},
	'transpileDependencies': [
		'vuetify',
	],
};

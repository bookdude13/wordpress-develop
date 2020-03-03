/**
 * External dependencies
 */
const { join } = require( 'path' );

module.exports = function( env = { environment: 'production', watch: false, buildTarget: false } ) {
	const mode = env.environment;
	const suffix = mode === 'production' ? '.min' : '';
	const buildTarget = env.buildTarget || ( mode === 'production' ? 'build' : 'src' );

	return {
		mode,

		entry: {
			lodash: 'lodash',
			'wp-polyfill': '@babel/polyfill',
			'wp-polyfill-fetch': 'whatwg-fetch',
			'wp-polyfill-element-closest': 'element-closest',
			'wp-polyfill-node-contains': 'polyfill-library/polyfills/Node/prototype/contains/polyfill.js',
			'wp-polyfill-url': 'polyfill-library/polyfills/URL/polyfill.js',
			'wp-polyfill-dom-rect': 'polyfill-library/polyfills/DOMRect/polyfill.js',
			'wp-polyfill-formdata': 'formdata-polyfill',
			'moment': 'moment',
			'react': 'react',
			'react-dom': 'react-dom',
		},

		output: {
			filename: `[name]${ suffix }.js`,
			path: join( __dirname, `../../${ buildTarget }/wp-includes/js/dist/vendor` ),
		},

		stats: {
			children: false,
		},

		watch: env.watch,
	};
};

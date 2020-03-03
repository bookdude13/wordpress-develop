const mediaConfig = require( './tools/webpack/media' );
const packagesConfig = require( './tools/webpack/packages' );
const vendorConfig = require( './tools/webpack/vendor' );

module.exports = function( env = { environment: "production", watch: false, buildTarget: false } ) {
	if ( ! env.watch ) {
		env.watch = false;
	}

	if ( ! env.buildTarget ) {
		env.buildTarget = ( env.mode === 'production' ? 'build/' : 'src/' );
	}

	const config = [
		mediaConfig( env ),
		packagesConfig( env ),
		vendorConfig( env ),
	];

	return config;
};

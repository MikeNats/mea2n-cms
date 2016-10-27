
'use strict';

exports.config = {
	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['e2e/**/*.js'],
	 baseUrl: 'http://localhost:3000/index',

	useAllAngular2AppRoots: true
}
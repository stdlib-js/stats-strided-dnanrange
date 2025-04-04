/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Compute the range of a double-precision floating-point strided array, ignoring `NaN` values.
*
* @module @stdlib/stats-strided-dnanrange
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dnanrange = require( '@stdlib/stats-strided-dnanrange' );
*
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnanrange( x.length, x, 1 );
* // returns 4.0
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var dnanrange = require( '@stdlib/stats-strided-dnanrange' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = dnanrange.ndarray( 5, x, 2, 1 );
* // returns 6.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require' );
var isError = require( '@stdlib/assert-is-error' );
var main = require( './main.js' );


// MAIN //

var dnanrange;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dnanrange = main;
} else {
	dnanrange = tmp;
}


// EXPORTS //

module.exports = dnanrange;

// exports: { "ndarray": "dnanrange.ndarray" }

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

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );


// MAIN //

/**
* Computes the range of a double-precision floating-point strided array, ignoring `NaN` values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} range
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = dnanrange( 5, x, 2, 1 );
* // returns 6.0
*/
function dnanrange( N, x, strideX, offsetX ) {
	var max;
	var min;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		if ( isnan( x[ offsetX ] ) ) {
			return x[ offsetX ];
		}
		return 0.0;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			break;
		}
		ix += strideX;
	}
	if ( i === N ) {
		return NaN;
	}
	min = v;
	max = min;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		v = x[ ix ];
		if ( isnan( v ) ) {
			continue;
		}
		if ( v < min ) {
			min = v;
		} else if ( v > max ) {
			max = v;
		}
	}
	return max - min;
}


// EXPORTS //

module.exports = dnanrange;

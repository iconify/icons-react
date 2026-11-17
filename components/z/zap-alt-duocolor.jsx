import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qnwembnpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 15l-5.293 5.293c-.206.206-.553.015-.49-.27l1.566-7.047A.802.802 0 0 0 8 12H7a.65.65 0 0 1-.594-.914l3.33-7.492A1 1 0 0 1 10.65 3H16a.58.58 0 0 1 .504.868l-3.008 5.264A.58.58 0 0 0 14 10h3c.369 0 .554.446.293.707z");
}
</style><path class="qnwembnpk"/>`,
		"fallback": "coolicons:zap-alt-duocolor",
	});
}

export default Component;

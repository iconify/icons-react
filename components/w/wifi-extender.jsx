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
		"content": `<style>.v7yqj3bsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.375 4h1.25A4.375 4.375 0 0 1 13 8.375v5.25A4.375 4.375 0 0 1 8.625 18h-1.25A4.375 4.375 0 0 1 3 13.625v-5.25A4.375 4.375 0 0 1 7.375 4M6.5 18v2.5m3-2.5v2.5m6.75-12.75a4.5 4.5 0 0 1 0 6.5m2.5-9a8 8 0 0 1 0 11.5");
}
</style><path class="v7yqj3bsg"/>`,
		"fallback": "uix:wifi-extender",
	});
}

export default Component;

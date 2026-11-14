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
		"content": `<style>.d2nkhyw_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m2.25 3v6.75m0-5L8 12l-2 3.5m6-6l4 2.5l2 3.5m-14.5 2c0-1.5 2.5-2 8.5-.5c6-1.5 8.5-1 8.5.5s-2.5 2-8.5 1c-6 1-8.5.5-8.5-1");
}
</style><path class="d2nkhyw_h"/>`,
		"fallback": "uix:yoga-studio",
	});
}

export default Component;

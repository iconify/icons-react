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
		"content": `<style>.c9qe-fbap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 16.5a7 2.75 0 1 0 14 0a7 2.75 0 1 0-14 0m2-5.25a5 2.25 0 1 0 10 0a5 2.25 0 1 0-10 0M8.75 7a3.25 1.75 0 1 0 6.5 0a3.25 1.75 0 1 0-6.5 0");
}
</style><path class="c9qe-fbap"/>`,
		"fallback": "uix:zen-stones",
	});
}

export default Component;

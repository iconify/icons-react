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
		"content": `<style>.wfvr_obgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h13a3 3 0 1 0-3-3m-10 8H18a3 3 0 1 1-3 3");
}
</style><path class="wfvr_obgv"/>`,
		"fallback": "uix:wind-fresh-breeze",
	});
}

export default Component;

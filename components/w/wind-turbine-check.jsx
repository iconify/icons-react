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
		"content": `<style>.spmm3nb8d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0M10 6.5V2M8.75 8.75l-4 2.25m6.5-2.25l4 2.25M10 9.5v12m-2.5 0h5m2.25-3.5l2 2L21 15.75");
}
</style><path class="spmm3nb8d"/>`,
		"fallback": "uix:wind-turbine-check",
	});
}

export default Component;

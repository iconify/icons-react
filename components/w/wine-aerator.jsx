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
		"content": `<style>.ii4o1_-lf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l-3.75 4v1.5h-2.5V7Zm0 8.25h10q0 6.25-5 6.25t-5-6.25m5 6.25v3.75m-3 0h6");
}
</style><path class="ii4o1_-lf"/>`,
		"fallback": "uix:wine-aerator",
	});
}

export default Component;

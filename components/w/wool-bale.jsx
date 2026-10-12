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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-9oeiaip {
  d: path("M2.75 9a2.31 2.31 0 0 1 4.62 0A2.31 2.31 0 0 1 12 9a2.31 2.31 0 0 1 4.62 0a2.31 2.31 0 0 1 4.63 0v10.5a1.75 1.75 0 0 1-1.75 1.75h-15a1.75 1.75 0 0 1-1.75-1.75Z");
}

.olzq8_b3s {
  d: path("M4.5 13.5q1.125-1.125 2.25 0M10.5 17q1.125-1.125 2.25 0m4.5-3.5q1.125-1.125 2.25 0m-11-3.75v11.5m7-11.5v11.5");
}
</style><g class="hntgybcog"><path class="n-9oeiaip"/><path class="olzq8_b3s"/></g>`,
		"fallback": "iconoven:wool-bale",
	});
}

export default Component;

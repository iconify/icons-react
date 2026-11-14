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
		"content": `<style>.nnlqekbhz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0M10 7V2.5M8.75 9.25l-4 2.25m6.5-2.25l4 2.25M10 10v11.5m-2.5 0h5m5.5-7V18m0 3h.01");
}
</style><path class="nnlqekbhz"/>`,
		"fallback": "uix-sharp:wind-turbine-alert",
	});
}

export default Component;

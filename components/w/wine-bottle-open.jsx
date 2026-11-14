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
		"content": `<style>.h5hr7ccxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h3V7q2.5 2 2.5 5v8q0 1.5-1.5 1.5H6q-1.5 0-1.5-1.5v-8q0-3 2.5-5Zm9.628 13.192l2.265-1.056a1.75 1.75 0 0 1 2.326.846a1.75 1.75 0 0 1-.847 2.326l-2.265 1.056a1.75 1.75 0 0 1-2.326-.846a1.75 1.75 0 0 1 .847-2.326M4.5 14.5h8");
}
</style><path class="h5hr7ccxd"/>`,
		"fallback": "uix:wine-bottle-open",
	});
}

export default Component;

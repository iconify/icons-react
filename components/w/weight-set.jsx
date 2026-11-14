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
		"content": `<style>.tzrqmhtci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5zA1.75 1.75 0 0 1 9 6.75v10.5A1.75 1.75 0 0 1 7.25 19a1.75 1.75 0 0 1-1.75-1.75V6.75A1.75 1.75 0 0 1 7.25 5m9.5 0za1.75 1.75 0 0 1 1.75 1.75v10.5A1.75 1.75 0 0 1 16.75 19A1.75 1.75 0 0 1 15 17.25V6.75A1.75 1.75 0 0 1 16.75 5M9 12h6M2.5 12h3m13 0h3");
}
</style><path class="tzrqmhtci"/>`,
		"fallback": "uix:weight-set",
	});
}

export default Component;

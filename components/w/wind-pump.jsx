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
		"content": `<style>.uf0dtr5dj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8V2.5M9 8l4.75 2.75M9 8l-4.75 2.75M5.5 21.5L9 8l3.5 13.5M18 14l2.5 3.25a3 3 0 1 1-5 0Z");
}
</style><path class="uf0dtr5dj"/>`,
		"fallback": "uix:wind-pump",
	});
}

export default Component;

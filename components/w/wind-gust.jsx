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
		"content": `<style>.po3meccvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5h11a2.75 2.75 0 1 0-2.75-2.75M3 12h17M3 15.5h13a2.75 2.75 0 1 1-2.75 2.75");
}
</style><path class="po3meccvh"/>`,
		"fallback": "uix:wind-gust",
	});
}

export default Component;

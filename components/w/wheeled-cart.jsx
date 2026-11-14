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
		"content": `<style>.mqopj4b3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 5h9.75A2.625 2.625 0 0 1 19.5 7.625v5.75A2.625 2.625 0 0 1 16.875 16h-9.75A2.625 2.625 0 0 1 4.5 13.375v-5.75A2.625 2.625 0 0 1 7.125 5M4.5 10.5h15M5.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m10 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="mqopj4b3y"/>`,
		"fallback": "uix:wheeled-cart",
	});
}

export default Component;

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
		"content": `<style>.q-6q3ob4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13.5V5a2.5 2.5 0 0 1 5 0v8.5a4 4 0 1 1-5 0m9.5 3h4a1.5 1.5 0 1 0-1.5-1.5M15 19h5a1.5 1.5 0 1 1-1.5 1.5");
}
</style><path class="q-6q3ob4h"/>`,
		"fallback": "uix:wind-chill",
	});
}

export default Component;

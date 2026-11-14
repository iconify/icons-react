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
		"content": `<style>.hwd7ut5xo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 21.5c0-6.5 2.5-10.5 6-13m0 0c0-2.5 1.5-4 4-4.5c0 2.5-1.5 4-4 4.5m-14.5 0H9a1.75 1.75 0 1 0-1.75-1.75M2.5 13h5a1.75 1.75 0 1 1-1.75 1.75");
}
</style><path class="hwd7ut5xo"/>`,
		"fallback": "uix:wind-crop",
	});
}

export default Component;

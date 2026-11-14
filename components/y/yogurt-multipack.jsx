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
		"content": `<style>.roid20pmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12H11l-.75 8h-6Zm9.5 0h7.5l-.75 8h-6ZM3.5 4.5H11L10.25 9h-6Zm9.5 0h7.5L19.75 9h-6Z");
}
</style><path class="roid20pmz"/>`,
		"fallback": "uix:yogurt-multipack",
	});
}

export default Component;

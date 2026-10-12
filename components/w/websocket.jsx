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
		"content": `<style>.nzjs-gq5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4v16m16.5-16v16M7 8.75h10m-2.5-2.5l2.5 2.5l-2.5 2.5m2.5 4H7m2.5-2.5L7 15.25l2.5 2.5");
}
</style><path class="nzjs-gq5b"/>`,
		"fallback": "iconoven:websocket",
	});
}

export default Component;

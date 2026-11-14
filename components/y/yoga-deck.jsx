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
		"content": `<style>.cjpp86lhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 3.75v5m-5.5.5L9 10l3-.5l3 .5l2.5 4m-12 2.5c2.5-1.75 10.5-1.75 13 0M3.75 19h16.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 3.75 19");
}
</style><path class="cjpp86lhl"/>`,
		"fallback": "uix:yoga-deck",
	});
}

export default Component;

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
		"content": `<style>.u60mwj2av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5H10q2 3 4 0h2.5l.5 6c1.5 1.5 1.5 4 1 6.5q-3 3-4.5 6h-3Q9 18 6 15c-.5-2.5-.5-5 1-6.5Zm-.5 6h10");
}
</style><path class="u60mwj2av"/>`,
		"fallback": "uix:wrestling-singlet",
	});
}

export default Component;

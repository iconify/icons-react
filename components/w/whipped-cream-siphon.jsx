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
		"content": `<style>.p9lxt_8kz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5h.5A3.5 3.5 0 0 1 11 11v7a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-7A3.5 3.5 0 0 1 7 7.5m-.25-4.75h1A1.75 1.75 0 0 1 9.5 4.5v1.25A1.75 1.75 0 0 1 7.75 7.5h-1A1.75 1.75 0 0 1 5 5.75V4.5a1.75 1.75 0 0 1 1.75-1.75M9.5 5H14l1.75 2.5M14 20h7q0-3-2.25-3.25q.5-3.25-1.25-5.75q-1.75 2.5-1.25 5.75Q14 17 14 20");
}
</style><path class="p9lxt_8kz"/>`,
		"fallback": "uix:whipped-cream-siphon",
	});
}

export default Component;

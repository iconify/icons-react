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
		"content": `<style>.h4gc7c2lu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h.75A2.625 2.625 0 0 1 8.5 5.125v.75A2.625 2.625 0 0 1 5.875 8.5h-.75A2.625 2.625 0 0 1 2.5 5.875v-.75A2.625 2.625 0 0 1 5.125 2.5M14 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-8.875 8h.75A2.625 2.625 0 0 1 8.5 16.125v.75A2.625 2.625 0 0 1 5.875 19.5h-.75A2.625 2.625 0 0 1 2.5 16.875v-.75A2.625 2.625 0 0 1 5.125 13.5m3.375-8H14m-8.5 3v5m9 6.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><path class="h4gc7c2lu"/>`,
		"fallback": "uix:workflow-secrets",
	});
}

export default Component;

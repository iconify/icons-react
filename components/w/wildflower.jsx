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
		"content": `<style>.ab3bqkbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.75a2.25 2.25 0 1 1 4 0a2.25 2.25 0 1 1 1.25 3.75A2.25 2.25 0 1 1 12 12a2.25 2.25 0 1 1-3.25-2.5A2.25 2.25 0 1 1 10 5.75ZM12 12v9.5m0-13h.01m-.01 11c0-2.5 1.75-4 4.25-4c0 2.5-1.75 4-4.25 4Z");
}
</style><path class="ab3bqkbcz"/>`,
		"fallback": "uix-sharp:wildflower",
	});
}

export default Component;

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
		"content": `<style>.qz1n5lbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5H10c0 3.5 4 3.5 4 0h2.5c0 4 2 5 2 8C18.5 13 17 14 17 16l1.5 5.5h-5l-1.5-3l-1.5 3h-5L7 16c0-2-1.5-3-1.5-5.5c0-3 2-4 2-8ZM7 16h10");
}
</style><path class="qz1n5lbyt"/>`,
		"fallback": "uix-sharp:weightlifting-singlet",
	});
}

export default Component;

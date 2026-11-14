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
		"content": `<style>.on52ezpge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19v3h-19ZM5 12v9m14-9v9M5 17.5h14M14.5 5H19v4h-4.5ZM6 6h5");
}
</style><path class="on52ezpge"/>`,
		"fallback": "uix-sharp:workbench",
	});
}

export default Component;

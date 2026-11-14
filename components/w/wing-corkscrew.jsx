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
		"content": `<style>.st-yp7bjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 7h4v9h-4ZM9 3h6m-3 0v4m-2 2L5.5 5M14 9l4.5-4M12 16l1.5 1.25l-3 1.5l3 1.5L12 21");
}
</style><path class="st-yp7bjb"/>`,
		"fallback": "uix-sharp:wing-corkscrew",
	});
}

export default Component;

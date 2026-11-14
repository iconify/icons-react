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
		"content": `<style>.zvjrpu7gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm3 5H13M9 12h1.25M13 12h3.5M9 16.5h1.25m2.75 0h3.5");
}
</style><path class="zvjrpu7gm"/>`,
		"fallback": "uix-sharp:yaml-config",
	});
}

export default Component;

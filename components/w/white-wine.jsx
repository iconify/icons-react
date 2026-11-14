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
		"content": `<style>.y6txxuuvb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10l.5 5a5.5 5.5 0 0 1-11 0Zm5 10.5V21m-4 0h8M6.5 8h11");
}
</style><path class="y6txxuuvb"/>`,
		"fallback": "uix-sharp:white-wine",
	});
}

export default Component;

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
		"content": `<style>.w08uom44x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5h11v10H10Zm-7.5 13h19m-19-8H7M5 8.25l2.25 2.25L5 12.75");
}
</style><path class="w08uom44x"/>`,
		"fallback": "uix-sharp:work-physics",
	});
}

export default Component;

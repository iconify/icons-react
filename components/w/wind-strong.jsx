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
		"content": `<style>.uj8m8__-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5H14a2.75 2.75 0 1 0-2.75-2.75M2.5 12h19m-19 4.5H16a2.75 2.75 0 1 1-2.75 2.75");
}
</style><path class="uj8m8__-o"/>`,
		"fallback": "uix-sharp:wind-strong",
	});
}

export default Component;

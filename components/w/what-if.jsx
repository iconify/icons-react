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
		"content": `<style>.iyl2ljb0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h4m6 0h9m-15 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9.25 7.5c0-1.25 1-2 2.25-2s2.25.75 2.25 2C20.25 18 18 18 18 19.25m0 2.25h.01");
}
</style><path class="iyl2ljb0x"/>`,
		"fallback": "uix-sharp:what-if",
	});
}

export default Component;

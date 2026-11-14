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
		"content": `<style>.qle8z4beb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9c1.5 1.5 2 3.5 2 5a6.5 6.5 0 0 1-13 0c0-1.5.5-3.5 2-5ZM12 14.5V21m-4 0h8M5.5 8.5h13");
}
</style><path class="qle8z4beb"/>`,
		"fallback": "uix-sharp:wine-glass-red",
	});
}

export default Component;

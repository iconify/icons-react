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
		"content": `<style>.j0cvqvmzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5H6L12.5 5v14L6 14.5H2.5Zm12.681.25a3.5 3.5 0 0 1 0 4.5m2.107-6.267a6.25 6.25 0 0 1 0 8.034m2.106-9.802a9 9 0 0 1 0 11.57");
}
</style><path class="j0cvqvmzv"/>`,
		"fallback": "uix-sharp:whistleblower",
	});
}

export default Component;

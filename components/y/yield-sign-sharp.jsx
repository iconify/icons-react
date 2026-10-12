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
		"content": `<style>.c-isjib1p {
  d: path("M8.75 7.25h7.5l-.49.87l-3.27 5.76l-.49.87l-.49-.87l-3.27-5.76l-.49-.87z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgkgjc1lj {
  d: path("M4.75 4h16.5l-.99 1.74l-7.27 12.77l-.99 1.74l-.99-1.74L3.74 5.74L2.75 4z");
}
</style><g class="x2cwu0gfd"><path class="zgkgjc1lj"/><path class="c-isjib1p"/></g>`,
		"fallback": "iconoven:yield-sign-sharp",
	});
}

export default Component;
